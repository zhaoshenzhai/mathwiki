'use strict';

var obsidian = require('obsidian');
var state = require('@codemirror/state');
var view = require('@codemirror/view');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class Settings {
    constructor() {
        // Defaults as in Vimium extension for browsers
        this.letters = 'sadfjklewcmpgh';
        this.jumpToAnywhereRegex = '\\b\\w{3,}\\b';
        this.lightspeedCaseSensitive = false;
    }
}

class MarkWidget extends view.WidgetType {
    constructor(mark) {
        super();
        this.mark = mark;
    }
    eq(other) {
        return other.mark === this.mark;
    }
    toDOM() {
        const mark = activeDocument.createElement("span");
        mark.innerText = this.mark;
        const wrapper = activeDocument.createElement("div");
        wrapper.style.display = "inline-block";
        wrapper.style.position = "absolute";
        wrapper.classList.add('jl');
        wrapper.classList.add('popover');
        wrapper.append(mark);
        return wrapper;
    }
    ignoreEvent() {
        return false;
    }
}

class MarkPlugin {
    constructor(_view) {
        this.links = [];
        this.links = [];
        this.decorations = view.Decoration.none;
    }
    setLinks(links) {
        this.links = links;
    }
    clean() {
        this.links = [];
    }
    get visible() {
        return this.links.length > 0;
    }
    update(_update) {
        const widgets = this.links.map((x) => view.Decoration.widget({
            widget: new MarkWidget(x.letter),
            side: 1,
        }).range(x.index));
        this.decorations = view.Decoration.set(widgets);
    }
}

/**
 * Get only visible content
 * @param cmEditor
 * @returns Letter offset and visible content as a string
 */
function getVisibleLineText(cmEditor) {
    const scrollInfo = cmEditor.getScrollInfo();
    const { line: from } = cmEditor.coordsChar({ left: 0, top: 0 }, 'page');
    const { line: to } = cmEditor.coordsChar({ left: scrollInfo.left, top: scrollInfo.top + scrollInfo.height });
    const indOffset = cmEditor.indexFromPos({ ch: 0, line: from });
    const strs = cmEditor.getRange({ ch: 0, line: from }, { ch: 0, line: to + 1 });
    return { indOffset, strs };
}
/**
 *
 * @param alphabet - Letters which used to produce hints
 * @param numLinkHints - Count of needed links
 */
function getLinkHintLetters(alphabet, numLinkHints) {
    const alphabetUppercase = alphabet.toUpperCase();
    let prefixCount = Math.ceil((numLinkHints - alphabetUppercase.length) / (alphabetUppercase.length - 1));
    // ensure 0 <= prefixCount <= alphabet.length
    prefixCount = Math.max(prefixCount, 0);
    prefixCount = Math.min(prefixCount, alphabetUppercase.length);
    const prefixes = ['', ...Array.from(alphabetUppercase.slice(0, prefixCount))];
    const linkHintLetters = [];
    for (let i = 0; i < prefixes.length; i++) {
        const prefix = prefixes[i];
        for (let j = 0; j < alphabetUppercase.length; j++) {
            if (linkHintLetters.length < numLinkHints) {
                const letter = alphabetUppercase[j];
                if (prefix === '') {
                    if (!prefixes.contains(letter)) {
                        linkHintLetters.push(letter);
                    }
                }
                else {
                    linkHintLetters.push(prefix + letter);
                }
            }
            else {
                break;
            }
        }
    }
    return linkHintLetters;
}
function getMDHintLinks(content, offset, letters) {
    // expecting either [[Link]] or [[Link|Title]]
    const regExInternal = /\[\[(.+?)(\|.+?)?]]/g;
    // expecting [Title](../example.md)
    const regExMdInternal = /\[.+?]\(((\.\.|\w|\d).+?)\)/g;
    // expecting [Title](file://link) or [Title](https://link)
    const regExExternal = /\[.+?]\(((https?:|file:).+?)\)/g;
    // expecting http://hogehoge or https://hogehoge
    const regExUrl = /( |\n|^)(https?:\/\/[^ \n]+)/g;
    let linksWithIndex = [];
    let regExResult;
    while (regExResult = regExInternal.exec(content)) {
        const linkText = regExResult[1];
        linksWithIndex.push({ index: regExResult.index + offset, type: 'internal', linkText });
    }
    while (regExResult = regExMdInternal.exec(content)) {
        const linkText = regExResult[1];
        linksWithIndex.push({ index: regExResult.index + offset, type: 'internal', linkText });
    }
    while (regExResult = regExExternal.exec(content)) {
        const linkText = regExResult[1];
        linksWithIndex.push({ index: regExResult.index + offset, type: 'external', linkText });
    }
    while (regExResult = regExUrl.exec(content)) {
        const linkText = regExResult[2];
        linksWithIndex.push({ index: regExResult.index + offset + 1, type: 'external', linkText });
    }
    const linkHintLetters = getLinkHintLetters(letters, linksWithIndex.length);
    const linksWithLetter = [];
    linksWithIndex
        .sort((x, y) => x.index - y.index)
        .forEach((linkHint, i) => {
        linksWithLetter.push(Object.assign({ letter: linkHintLetters[i] }, linkHint));
    });
    return linksWithLetter.filter(link => link.letter);
}
function createWidgetElement(content) {
    const linkHintEl = activeDocument.createElement('div');
    linkHintEl.classList.add('jl');
    linkHintEl.classList.add('popover');
    linkHintEl.innerHTML = content;
    return linkHintEl;
}
function displaySourcePopovers(cmEditor, linkKeyMap) {
    const drawWidget = (cmEditor, linkHint) => {
        const pos = cmEditor.posFromIndex(linkHint.index);
        // the fourth parameter is undocumented. it specifies where the widget should be place
        return cmEditor.addWidget(pos, createWidgetElement(linkHint.letter), false, 'over');
    };
    linkKeyMap.forEach(x => drawWidget(cmEditor, x));
}

class CM6LinkProcessor {
    constructor(editor, alphabet) {
        this.getSourceLinkHints = () => {
            const { letters } = this;
            const { index, content } = this.getVisibleLines();
            return getMDHintLinks(content, index, letters);
        };
        this.cmEditor = editor;
        this.letters = alphabet;
    }
    init() {
        return this.getSourceLinkHints();
    }
    getVisibleLines() {
        const { cmEditor } = this;
        const { from, to } = cmEditor.viewport;
        const content = cmEditor.state.sliceDoc(from, to);
        return { index: from, content };
    }
}

function extractRegexpBlocks(content, offset, regexp, letters, caseSensitive) {
    const regExUrl = caseSensitive ? new RegExp(regexp, 'g') : new RegExp(regexp, 'ig');
    let linksWithIndex = [];
    let regExResult;
    while ((regExResult = regExUrl.exec(content))) {
        const linkText = regExResult[1];
        linksWithIndex.push({
            index: regExResult.index + offset,
            type: "regex",
            linkText,
        });
    }
    const linkHintLetters = getLinkHintLetters(letters, linksWithIndex.length);
    const linksWithLetter = [];
    linksWithIndex
        .sort((x, y) => x.index - y.index)
        .forEach((linkHint, i) => {
        linksWithLetter.push(Object.assign({ letter: linkHintLetters[i] }, linkHint));
    });
    return linksWithLetter.filter(link => link.letter);
}

class CM6RegexProcessor extends CM6LinkProcessor {
    constructor(editor, alphabet, regexp, caseSensitive) {
        super(editor, alphabet);
        this.regexp = regexp;
        this.caseSensitive = caseSensitive;
    }
    init() {
        const { letters, regexp } = this;
        const { index, content } = this.getVisibleLines();
        return extractRegexpBlocks(content, index, regexp, letters, this.caseSensitive);
    }
}

class LegacyRegexpProcessor {
    constructor(cmEditor, regexp, alphabet, caseSensitive) {
        this.cmEditor = cmEditor;
        this.regexp = regexp;
        this.letters = alphabet;
        this.caseSensitive = caseSensitive;
    }
    init() {
        const [content, offset] = this.getVisibleContent();
        const links = this.getLinks(content, offset);
        this.display(links);
        return links;
    }
    getVisibleContent() {
        const { cmEditor } = this;
        const { indOffset, strs } = getVisibleLineText(cmEditor);
        return [strs, indOffset];
    }
    getLinks(content, offset) {
        const { regexp, letters } = this;
        return extractRegexpBlocks(content, offset, regexp, letters, this.caseSensitive);
    }
    display(links) {
        const { cmEditor } = this;
        displaySourcePopovers(cmEditor, links);
    }
}

class LegacySourceLinkProcessor {
    constructor(editor, alphabet) {
        this.getSourceLinkHints = (cmEditor) => {
            const { letters } = this;
            const { indOffset, strs } = getVisibleLineText(cmEditor);
            return getMDHintLinks(strs, indOffset, letters);
        };
        this.cmEditor = editor;
        this.letters = alphabet;
    }
    init() {
        const { cmEditor } = this;
        const linkHints = this.getSourceLinkHints(cmEditor);
        displaySourcePopovers(cmEditor, linkHints);
        return linkHints;
    }
}

function getPreviewLinkHints(previewViewEl, letters) {
    const anchorEls = previewViewEl.querySelectorAll('a');
    const embedEls = previewViewEl.querySelectorAll('.internal-embed');
    const linkHints = [];
    anchorEls.forEach((anchorEl, _i) => {
        if (checkIsPreviewElOnScreen(previewViewEl, anchorEl)) {
            return;
        }
        const linkType = anchorEl.classList.contains('internal-link')
            ? 'internal'
            : 'external';
        const linkText = linkType === 'internal'
            ? anchorEl.dataset['href']
            : anchorEl.href;
        let offsetParent = anchorEl.offsetParent;
        let top = anchorEl.offsetTop;
        let left = anchorEl.offsetLeft;
        while (offsetParent) {
            if (offsetParent == previewViewEl) {
                offsetParent = undefined;
            }
            else {
                top += offsetParent.offsetTop;
                left += offsetParent.offsetLeft;
                offsetParent = offsetParent.offsetParent;
            }
        }
        linkHints.push({
            letter: '',
            linkText: linkText,
            type: linkType,
            top: top,
            left: left,
        });
    });
    embedEls.forEach((embedEl, _i) => {
        const linkText = embedEl.getAttribute('src');
        const linkEl = embedEl.querySelector('.markdown-embed-link');
        if (linkText && linkEl) {
            if (checkIsPreviewElOnScreen(previewViewEl, linkEl)) {
                return;
            }
            let offsetParent = linkEl.offsetParent;
            let top = linkEl.offsetTop;
            let left = linkEl.offsetLeft;
            while (offsetParent) {
                if (offsetParent == previewViewEl) {
                    offsetParent = undefined;
                }
                else {
                    top += offsetParent.offsetTop;
                    left += offsetParent.offsetLeft;
                    offsetParent = offsetParent.offsetParent;
                }
            }
            linkHints.push({
                letter: '',
                linkText: linkText,
                type: 'internal',
                top: top,
                left: left,
            });
        }
    });
    const sortedLinkHints = linkHints.sort((a, b) => {
        if (a.top > b.top) {
            return 1;
        }
        else if (a.top === b.top) {
            if (a.left > b.left) {
                return 1;
            }
            else if (a.left === b.left) {
                return 0;
            }
            else {
                return -1;
            }
        }
        else {
            return -1;
        }
    });
    const linkHintLetters = getLinkHintLetters(letters, sortedLinkHints.length);
    sortedLinkHints.forEach((linkHint, i) => {
        linkHint.letter = linkHintLetters[i];
    });
    return sortedLinkHints;
}
function checkIsPreviewElOnScreen(parent, el) {
    return el.offsetTop < parent.scrollTop || el.offsetTop > parent.scrollTop + parent.offsetHeight;
}
function displayPreviewPopovers(markdownPreviewViewEl, linkHints) {
    for (let linkHint of linkHints) {
        const linkHintEl = markdownPreviewViewEl.createEl('div');
        linkHintEl.style.top = linkHint.top + 'px';
        linkHintEl.style.left = linkHint.left + 'px';
        linkHintEl.textContent = linkHint.letter;
        linkHintEl.classList.add('jl');
        linkHintEl.classList.add('popover');
    }
}

class PreviewLinkProcessor {
    constructor(view, alphabet) {
        this.view = view;
        this.alphabet = alphabet;
    }
    init() {
        const { view, alphabet } = this;
        const links = getPreviewLinkHints(view, alphabet);
        displayPreviewPopovers(view, links);
        return links;
    }
}

var VIEW_MODE;
(function (VIEW_MODE) {
    VIEW_MODE[VIEW_MODE["SOURCE"] = 0] = "SOURCE";
    VIEW_MODE[VIEW_MODE["PREVIEW"] = 1] = "PREVIEW";
    VIEW_MODE[VIEW_MODE["LEGACY"] = 2] = "LEGACY";
})(VIEW_MODE || (VIEW_MODE = {}));
class JumpToLink extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.isLinkHintActive = false;
        this.prefixInfo = undefined;
        this.handleJumpToLink = () => {
            const { settings: { letters }, app } = this;
            const currentView = app.workspace.getLeaf(false).view;
            const mode = this.getMode(currentView);
            const { contentEl } = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            switch (mode) {
                case VIEW_MODE.LEGACY:
                    const cmEditor = currentView.sourceMode.cmEditor;
                    const sourceLinkHints = new LegacySourceLinkProcessor(cmEditor, letters).init();
                    this.handleActions(sourceLinkHints, contentEl, cmEditor);
                    break;
                case VIEW_MODE.PREVIEW:
                    const previewViewEl = currentView.previewMode.containerEl.querySelector('div.markdown-preview-view');
                    const previewLinkHints = new PreviewLinkProcessor(previewViewEl, letters).init();
                    this.handleActions(previewLinkHints, contentEl);
                    break;
                case VIEW_MODE.SOURCE:
                    const cm6Editor = currentView.editor.cm;
                    const livePreviewLinks = new CM6LinkProcessor(cm6Editor, letters).init();
                    cm6Editor.plugin(this.markViewPlugin).setLinks(livePreviewLinks);
                    this.app.workspace.updateOptions();
                    this.handleActions(livePreviewLinks, contentEl);
                    break;
            }
        };
        /*
        *  caseSensitive is only for lightspeed and shall not affect jumpToAnywhere, so it is true
        *  by default
        */
        this.handleJumpToRegex = (stringToSearch, caseSensitive = true) => {
            const { app, settings: { letters, jumpToAnywhereRegex } } = this;
            const currentView = app.workspace.getLeaf(false).view;
            const mode = this.getMode(currentView);
            const whatToLookAt = stringToSearch || jumpToAnywhereRegex;
            const { contentEl } = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            switch (mode) {
                case VIEW_MODE.SOURCE:
                    const cm6Editor = currentView.editor.cm;
                    const livePreviewLinks = new CM6RegexProcessor(cm6Editor, letters, whatToLookAt, caseSensitive).init();
                    cm6Editor.plugin(this.markViewPlugin).setLinks(livePreviewLinks);
                    this.app.workspace.updateOptions();
                    this.handleActions(livePreviewLinks, contentEl, cm6Editor);
                    break;
                case VIEW_MODE.PREVIEW:
                    break;
                case VIEW_MODE.LEGACY:
                    const cmEditor = currentView.sourceMode.cmEditor;
                    const links = new LegacyRegexpProcessor(cmEditor, whatToLookAt, letters, caseSensitive).init();
                    this.handleActions(links, contentEl, cmEditor);
                    break;
            }
        };
        this.handleActions = (linkHints, currentView, cmEditor) => {
            if (!linkHints.length) {
                return;
            }
            const linkHintMap = {};
            linkHints.forEach(x => linkHintMap[x.letter] = x);
            const handleHotkey = (newLeaf, link) => {
                if (link.type === 'internal') {
                    const file = this.app.workspace.getActiveFile();
                    if (file) {
                        // the second argument is for the link resolution
                        this.app.workspace.openLinkText(decodeURI(link.linkText), file.path, newLeaf, { active: true });
                    }
                }
                else if (link.type === 'external') {
                    window.open(link.linkText);
                }
                else {
                    const editor = cmEditor;
                    if (editor instanceof view.EditorView) {
                        const index = link.index;
                        editor.dispatch({ selection: state.EditorSelection.cursor(index) });
                    }
                    else {
                        editor.setCursor(editor.posFromIndex(link.index));
                    }
                }
            };
            const removePopovers = () => {
                currentView.removeEventListener('click', removePopovers);
                currentView.querySelectorAll('.jl.popover').forEach(e => e.remove());
                currentView.querySelectorAll('#jl-modal').forEach(e => e.remove());
                this.prefixInfo = undefined;
                const view = app.workspace.getLeaf(false).view;
                const cm6Editor = view.editor.cm;
                cm6Editor.plugin(this.markViewPlugin).clean();
                this.app.workspace.updateOptions();
                this.isLinkHintActive = false;
            };
            const handleKeyDown = (event) => {
                var _a;
                if (event.key === 'Shift') {
                    return;
                }
                const eventKey = event.key.toUpperCase();
                const prefixes = new Set(Object.keys(linkHintMap).filter(x => x.length > 1).map(x => x[0]));
                let linkHint;
                if (this.prefixInfo) {
                    linkHint = linkHintMap[this.prefixInfo.prefix + eventKey];
                }
                else {
                    linkHint = linkHintMap[eventKey];
                    if (!linkHint && prefixes && prefixes.has(eventKey)) {
                        this.prefixInfo = { prefix: eventKey, shiftKey: event.shiftKey };
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        return;
                    }
                }
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                const newLeaf = ((_a = this.prefixInfo) === null || _a === void 0 ? void 0 : _a.shiftKey) || event.shiftKey;
                linkHint && handleHotkey(newLeaf, linkHint);
                currentView.removeEventListener('keydown', handleKeyDown, { capture: true });
                removePopovers();
            };
            currentView.addEventListener('click', removePopovers);
            currentView.addEventListener('keydown', handleKeyDown, { capture: true });
            this.isLinkHintActive = true;
        };
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = (yield this.loadData()) || new Settings();
            this.addSettingTab(new SettingTab(this.app, this));
            const markViewPlugin = this.markViewPlugin = view.ViewPlugin.fromClass(MarkPlugin, {
                decorations: v => v.decorations
            });
            this.registerEditorExtension([markViewPlugin]);
            this.addCommand({
                id: 'activate-jump-to-link',
                name: 'Jump to Link',
                callback: this.action.bind(this, 'link'),
                hotkeys: [{ modifiers: ['Ctrl'], key: `'` }],
            });
            this.addCommand({
                id: "activate-jump-to-anywhere",
                name: "Jump to Anywhere Regex",
                callback: this.action.bind(this, 'regexp'),
                hotkeys: [{ modifiers: ["Ctrl"], key: ";" }],
            });
            this.addCommand({
                id: "activate-lightspeed-jump",
                name: "Lightspeed Jump",
                callback: this.action.bind(this, 'lightspeed'),
                hotkeys: [],
            });
        });
    }
    onunload() {
        console.log('unloading jump to links plugin');
    }
    action(type) {
        if (this.isLinkHintActive) {
            return;
        }
        switch (type) {
            case "link":
                this.handleJumpToLink();
                return;
            case "regexp":
                this.handleJumpToRegex();
                return;
            case "lightspeed":
                this.handleLightspeedJump();
                return;
        }
    }
    getMode(currentView) {
        // @ts-ignore
        const isLegacy = this.app.vault.getConfig("legacyEditor");
        if (currentView.getState().mode === 'preview') {
            return VIEW_MODE.PREVIEW;
        }
        else if (isLegacy) {
            return VIEW_MODE.LEGACY;
        }
        else if (currentView.getState().mode === 'source') {
            return VIEW_MODE.SOURCE;
        }
    }
    // adapted from: https://github.com/mrjackphil/obsidian-jump-to-link/issues/35#issuecomment-1085905668
    handleLightspeedJump() {
        // get all text color
        const { contentEl } = app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!contentEl) {
            return;
        }
        // this element doesn't exist in cm5/has a different class, so lightspeed will not work in cm5
        const contentContainerColor = contentEl.getElementsByClassName("cm-contentContainer");
        const originalColor = contentContainerColor[0].style.color;
        // change all text color to gray
        contentContainerColor[0].style.color = 'var(--jump-to-link-lightspeed-color)';
        const keyArray = [];
        const grabKey = (event) => {
            event.preventDefault();
            // handle Escape to reject the mode
            if (event.key === 'Escape') {
                contentEl.removeEventListener("keydown", grabKey, { capture: true });
                contentContainerColor[0].style.color = originalColor;
            }
            // test if keypress is capitalized
            if (/^[a-z]$/i.test(event.key)) {
                const isCapital = event.shiftKey;
                if (isCapital) {
                    // capture uppercase
                    keyArray.push((event.key).toUpperCase());
                }
                else {
                    // capture lowercase
                    keyArray.push(event.key);
                }
            }
            // stop when length of array is equal to 2
            if (keyArray.length === 2) {
                this.handleJumpToRegex("\\b" + keyArray.join(""), this.settings.lightspeedCaseSensitive);
                // removing eventListener after proceeded
                contentEl.removeEventListener("keydown", grabKey, { capture: true });
                contentContainerColor[0].style.color = originalColor;
            }
        };
        contentEl.addEventListener('keydown', grabKey, { capture: true });
    }
}
class SettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Settings for Jump To Link.' });
        /* Modal mode deprecated */
        // new Setting(containerEl)
        //     .setName('Presentation')
        //     .setDesc('How to show links')
        //     .addDropdown(cb => { cb
        //         .addOptions({
        //             "popovers": 'Popovers',
        //             "modal": 'Modal'
        //         })
        //         .setValue(this.plugin.settings.mode)
        //         .onChange((value: LinkHintMode) => {
        //             this.plugin.settings.mode = value;
        //             this.plugin.saveData(this.plugin.settings);
        //         })
        //     });
        new obsidian.Setting(containerEl)
            .setName('Characters used for link hints')
            .setDesc('The characters placed next to each link after enter link-hint mode.')
            .addText(cb => {
            cb.setValue(this.plugin.settings.letters)
                .onChange((value) => {
                this.plugin.settings.letters = value;
                this.plugin.saveData(this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Jump To Anywhere')
            .setDesc("Regex based navigating in editor mode")
            .addText((text) => text
            .setPlaceholder('Custom Regex')
            .setValue(this.plugin.settings.jumpToAnywhereRegex)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.jumpToAnywhereRegex = value;
            yield this.plugin.saveData(this.plugin.settings);
        })));
        new obsidian.Setting(containerEl)
            .setName('Lightspeed regex case sensitivity')
            .setDesc('If enabled, the regex for matching will be case sensitive.')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.lightspeedCaseSensitive)
                .onChange((state) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.lightspeedCaseSensitive = state;
                yield this.plugin.saveData(this.plugin.settings);
            }));
        });
    }
}

module.exports = JumpToLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInR5cGVzLnRzIiwic3JjL2NtNi13aWRnZXQvTWFya1dpZGdldC50cyIsInNyYy9jbTYtd2lkZ2V0L01hcmtQbHVnaW4udHMiLCJzcmMvdXRpbHMvY29tbW9uLnRzIiwic3JjL3Byb2Nlc3NvcnMvQ002TGlua1Byb2Nlc3Nvci50cyIsInNyYy91dGlscy9yZWdleHAudHMiLCJzcmMvcHJvY2Vzc29ycy9DTTZSZWdleFByb2Nlc3Nvci50cyIsInNyYy9wcm9jZXNzb3JzL0xlZ2FjeVJlZ2V4cFByb2Nlc3Nvci50cyIsInNyYy9wcm9jZXNzb3JzL0xlZ2FjeVNvdXJjZUxpbmtQcm9jZXNzb3IudHMiLCJzcmMvdXRpbHMvcHJldmlldy50cyIsInNyYy9wcm9jZXNzb3JzL1ByZXZpZXdMaW5rUHJvY2Vzc29yLnRzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsImV4cG9ydCB0eXBlIExpbmtIaW50VHlwZSA9ICdpbnRlcm5hbCcgfCAnZXh0ZXJuYWwnIHwgJ3JlZ2V4JztcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rSGludEJhc2Uge1xuXHRsZXR0ZXI6IHN0cmluZztcblx0dHlwZTogTGlua0hpbnRUeXBlO1xuXHRsaW5rVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXZpZXdMaW5rSGludCBleHRlbmRzIExpbmtIaW50QmFzZSB7XG5cdGxlZnQ6IG51bWJlcjtcblx0dG9wOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlTGlua0hpbnQgZXh0ZW5kcyBMaW5rSGludEJhc2Uge1xuXHRpbmRleDogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyB7XG5cdC8vIERlZmF1bHRzIGFzIGluIFZpbWl1bSBleHRlbnNpb24gZm9yIGJyb3dzZXJzXG5cdGxldHRlcnM6IHN0cmluZyA9ICdzYWRmamtsZXdjbXBnaCc7XG5cdGp1bXBUb0FueXdoZXJlUmVnZXg6IHN0cmluZyA9ICdcXFxcYlxcXFx3ezMsfVxcXFxiJztcblx0bGlnaHRzcGVlZENhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NvciB7XG5cdGxldHRlcnM6IHN0cmluZztcblxuXHRwdWJsaWMgaW5pdDogKCkgPT4gTGlua0hpbnRCYXNlW107XG59XG4iLCJpbXBvcnQge1dpZGdldFR5cGV9IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBNYXJrV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0VHlwZSB7XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgbWFyazogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZXEob3RoZXI6IE1hcmtXaWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIG90aGVyLm1hcmsgPT09IHRoaXMubWFyaztcbiAgICB9XG5cbiAgICB0b0RPTSgpIHtcbiAgICAgICAgY29uc3QgbWFyayA9IGFjdGl2ZURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBtYXJrLmlubmVyVGV4dCA9IHRoaXMubWFyaztcblxuICAgICAgICBjb25zdCB3cmFwcGVyID0gYWN0aXZlRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdqbCcpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXInKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmQobWFyayk7XG5cbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XG4gICAgfVxuXG4gICAgaWdub3JlRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIERlY29yYXRpb24sXG4gICAgRGVjb3JhdGlvblNldCxcbiAgICBFZGl0b3JWaWV3LFxuICAgIFZpZXdVcGRhdGUsXG59IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5pbXBvcnQgeyBNYXJrV2lkZ2V0IH0gZnJvbSBcIi4vTWFya1dpZGdldFwiO1xuaW1wb3J0IHtTb3VyY2VMaW5rSGludH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXJrUGx1Z2luIHtcbiAgICBkZWNvcmF0aW9uczogRGVjb3JhdGlvblNldDtcbiAgICBsaW5rczogU291cmNlTGlua0hpbnRbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoX3ZpZXc6IEVkaXRvclZpZXcpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IFtdO1xuICAgICAgICB0aGlzLmRlY29yYXRpb25zID0gRGVjb3JhdGlvbi5ub25lXG4gICAgfVxuXG4gICAgc2V0TGlua3MobGlua3M6IFNvdXJjZUxpbmtIaW50W10pIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IGxpbmtzO1xuICAgIH1cblxuICAgIGNsZWFuKCkge1xuICAgICAgICB0aGlzLmxpbmtzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKF91cGRhdGU6IFZpZXdVcGRhdGUpIHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0cyA9IHRoaXMubGlua3MubWFwKCh4KSA9PlxuICAgICAgICAgICAgRGVjb3JhdGlvbi53aWRnZXQoe1xuICAgICAgICAgICAgICAgIHdpZGdldDogbmV3IE1hcmtXaWRnZXQoeC5sZXR0ZXIpLFxuICAgICAgICAgICAgICAgIHNpZGU6IDEsXG4gICAgICAgICAgICB9KS5yYW5nZSh4LmluZGV4KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGVjb3JhdGlvbnMgPSBEZWNvcmF0aW9uLnNldCh3aWRnZXRzKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gXCJjb2RlbWlycm9yXCI7XG5pbXBvcnQge1NvdXJjZUxpbmtIaW50fSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBHZXQgb25seSB2aXNpYmxlIGNvbnRlbnRcbiAqIEBwYXJhbSBjbUVkaXRvclxuICogQHJldHVybnMgTGV0dGVyIG9mZnNldCBhbmQgdmlzaWJsZSBjb250ZW50IGFzIGEgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpYmxlTGluZVRleHQoY21FZGl0b3I6IEVkaXRvcik6IHsgaW5kT2Zmc2V0OiBudW1iZXIsIHN0cnM6IHN0cmluZyB9IHtcbiAgICBjb25zdCBzY3JvbGxJbmZvID0gY21FZGl0b3IuZ2V0U2Nyb2xsSW5mbygpO1xuICAgIGNvbnN0IHsgbGluZTogZnJvbSB9ID0gY21FZGl0b3IuY29vcmRzQ2hhcih7IGxlZnQ6IDAsIHRvcDogMCB9LCAncGFnZScpO1xuICAgIGNvbnN0IHsgbGluZTogdG8gfSA9IGNtRWRpdG9yLmNvb3Jkc0NoYXIoeyBsZWZ0OiBzY3JvbGxJbmZvLmxlZnQsIHRvcDogc2Nyb2xsSW5mby50b3AgKyBzY3JvbGxJbmZvLmhlaWdodH0pXG4gICAgY29uc3QgaW5kT2Zmc2V0ID0gY21FZGl0b3IuaW5kZXhGcm9tUG9zKHtjaDowLCBsaW5lOiBmcm9tfSlcbiAgICBjb25zdCBzdHJzID0gY21FZGl0b3IuZ2V0UmFuZ2Uoe2NoOiAwLCBsaW5lOiBmcm9tfSwge2NoOiAwLCBsaW5lOiB0byArIDF9KVxuXG4gICAgcmV0dXJuIHsgaW5kT2Zmc2V0LCBzdHJzIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBhbHBoYWJldCAtIExldHRlcnMgd2hpY2ggdXNlZCB0byBwcm9kdWNlIGhpbnRzXG4gKiBAcGFyYW0gbnVtTGlua0hpbnRzIC0gQ291bnQgb2YgbmVlZGVkIGxpbmtzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5rSGludExldHRlcnMoYWxwaGFiZXQ6IHN0cmluZywgbnVtTGlua0hpbnRzOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgYWxwaGFiZXRVcHBlcmNhc2UgPSBhbHBoYWJldC50b1VwcGVyQ2FzZSgpXG5cbiAgICBsZXQgcHJlZml4Q291bnQgPSBNYXRoLmNlaWwoKG51bUxpbmtIaW50cyAtIGFscGhhYmV0VXBwZXJjYXNlLmxlbmd0aCkgLyAoYWxwaGFiZXRVcHBlcmNhc2UubGVuZ3RoIC0gMSkpXG5cbiAgICAvLyBlbnN1cmUgMCA8PSBwcmVmaXhDb3VudCA8PSBhbHBoYWJldC5sZW5ndGhcbiAgICBwcmVmaXhDb3VudCA9IE1hdGgubWF4KHByZWZpeENvdW50LCAwKTtcbiAgICBwcmVmaXhDb3VudCA9IE1hdGgubWluKHByZWZpeENvdW50LCBhbHBoYWJldFVwcGVyY2FzZS5sZW5ndGgpO1xuXG4gICAgY29uc3QgcHJlZml4ZXMgPSBbJycsIC4uLkFycmF5LmZyb20oYWxwaGFiZXRVcHBlcmNhc2Uuc2xpY2UoMCwgcHJlZml4Q291bnQpKV07XG5cbiAgICBjb25zdCBsaW5rSGludExldHRlcnMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbHBoYWJldFVwcGVyY2FzZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGxpbmtIaW50TGV0dGVycy5sZW5ndGggPCBudW1MaW5rSGludHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBhbHBoYWJldFVwcGVyY2FzZVtqXTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4ID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZWZpeGVzLmNvbnRhaW5zKGxldHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIaW50TGV0dGVycy5wdXNoKGxldHRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5rSGludExldHRlcnMucHVzaChwcmVmaXggKyBsZXR0ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5rSGludExldHRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNREhpbnRMaW5rcyhjb250ZW50OiBzdHJpbmcsIG9mZnNldDogbnVtYmVyLCBsZXR0ZXJzOiBzdHJpbmcpOiBTb3VyY2VMaW5rSGludFtdIHtcbiAgICAvLyBleHBlY3RpbmcgZWl0aGVyIFtbTGlua11dIG9yIFtbTGlua3xUaXRsZV1dXG4gICAgY29uc3QgcmVnRXhJbnRlcm5hbCA9IC9cXFtcXFsoLis/KShcXHwuKz8pP11dL2c7XG4gICAgLy8gZXhwZWN0aW5nIFtUaXRsZV0oLi4vZXhhbXBsZS5tZClcbiAgICBjb25zdCByZWdFeE1kSW50ZXJuYWwgPSAvXFxbLis/XVxcKCgoXFwuXFwufFxcd3xcXGQpLis/KVxcKS9nO1xuICAgIC8vIGV4cGVjdGluZyBbVGl0bGVdKGZpbGU6Ly9saW5rKSBvciBbVGl0bGVdKGh0dHBzOi8vbGluaylcbiAgICBjb25zdCByZWdFeEV4dGVybmFsID0gL1xcWy4rP11cXCgoKGh0dHBzPzp8ZmlsZTopLis/KVxcKS9nO1xuICAgIC8vIGV4cGVjdGluZyBodHRwOi8vaG9nZWhvZ2Ugb3IgaHR0cHM6Ly9ob2dlaG9nZVxuICAgIGNvbnN0IHJlZ0V4VXJsID0gLyggfFxcbnxeKShodHRwcz86XFwvXFwvW14gXFxuXSspL2c7XG5cbiAgICBsZXQgbGlua3NXaXRoSW5kZXg6IHsgaW5kZXg6IG51bWJlciwgdHlwZTogJ2ludGVybmFsJyB8ICdleHRlcm5hbCcsIGxpbmtUZXh0OiBzdHJpbmcgfVtdID0gW107XG4gICAgbGV0IHJlZ0V4UmVzdWx0O1xuXG4gICAgd2hpbGUocmVnRXhSZXN1bHQgPSByZWdFeEludGVybmFsLmV4ZWMoY29udGVudCkpIHtcbiAgICAgICAgY29uc3QgbGlua1RleHQgPSByZWdFeFJlc3VsdFsxXTtcbiAgICAgICAgbGlua3NXaXRoSW5kZXgucHVzaCh7IGluZGV4OiByZWdFeFJlc3VsdC5pbmRleCArIG9mZnNldCwgdHlwZTogJ2ludGVybmFsJywgbGlua1RleHQgfSk7XG4gICAgfVxuXG4gICAgd2hpbGUocmVnRXhSZXN1bHQgPSByZWdFeE1kSW50ZXJuYWwuZXhlYyhjb250ZW50KSkge1xuICAgICAgICBjb25zdCBsaW5rVGV4dCA9IHJlZ0V4UmVzdWx0WzFdO1xuICAgICAgICBsaW5rc1dpdGhJbmRleC5wdXNoKHsgaW5kZXg6IHJlZ0V4UmVzdWx0LmluZGV4ICsgb2Zmc2V0LCB0eXBlOiAnaW50ZXJuYWwnLCBsaW5rVGV4dCB9KTtcbiAgICB9XG5cbiAgICB3aGlsZShyZWdFeFJlc3VsdCA9IHJlZ0V4RXh0ZXJuYWwuZXhlYyhjb250ZW50KSkge1xuICAgICAgICBjb25zdCBsaW5rVGV4dCA9IHJlZ0V4UmVzdWx0WzFdO1xuICAgICAgICBsaW5rc1dpdGhJbmRleC5wdXNoKHsgaW5kZXg6IHJlZ0V4UmVzdWx0LmluZGV4ICsgb2Zmc2V0LCB0eXBlOiAnZXh0ZXJuYWwnLCBsaW5rVGV4dCB9KVxuICAgIH1cblxuICAgIHdoaWxlKHJlZ0V4UmVzdWx0ID0gcmVnRXhVcmwuZXhlYyhjb250ZW50KSkge1xuICAgICAgICBjb25zdCBsaW5rVGV4dCA9IHJlZ0V4UmVzdWx0WzJdO1xuICAgICAgICBsaW5rc1dpdGhJbmRleC5wdXNoKHsgaW5kZXg6IHJlZ0V4UmVzdWx0LmluZGV4ICsgb2Zmc2V0ICsgMSwgdHlwZTogJ2V4dGVybmFsJywgbGlua1RleHQgfSlcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rSGludExldHRlcnMgPSBnZXRMaW5rSGludExldHRlcnMobGV0dGVycywgbGlua3NXaXRoSW5kZXgubGVuZ3RoKTtcblxuICAgIGNvbnN0IGxpbmtzV2l0aExldHRlcjogU291cmNlTGlua0hpbnRbXSA9IFtdO1xuICAgIGxpbmtzV2l0aEluZGV4XG4gICAgICAgIC5zb3J0KCh4LHkpID0+IHguaW5kZXggLSB5LmluZGV4KVxuICAgICAgICAuZm9yRWFjaCgobGlua0hpbnQsIGkpID0+IHtcbiAgICAgICAgICAgIGxpbmtzV2l0aExldHRlci5wdXNoKHsgbGV0dGVyOiBsaW5rSGludExldHRlcnNbaV0sIC4uLmxpbmtIaW50fSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmtzV2l0aExldHRlci5maWx0ZXIobGluayA9PiBsaW5rLmxldHRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXaWRnZXRFbGVtZW50KGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IGxpbmtIaW50RWwgPSBhY3RpdmVEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5rSGludEVsLmNsYXNzTGlzdC5hZGQoJ2psJyk7XG4gICAgbGlua0hpbnRFbC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyJyk7XG4gICAgbGlua0hpbnRFbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIHJldHVybiBsaW5rSGludEVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNvdXJjZVBvcG92ZXJzKGNtRWRpdG9yOiBFZGl0b3IsIGxpbmtLZXlNYXA6IFNvdXJjZUxpbmtIaW50W10pOiB2b2lkIHtcbiAgICBjb25zdCBkcmF3V2lkZ2V0ID0gKGNtRWRpdG9yOiBFZGl0b3IsIGxpbmtIaW50OiBTb3VyY2VMaW5rSGludCkgPT4ge1xuICAgICAgICBjb25zdCBwb3MgPSBjbUVkaXRvci5wb3NGcm9tSW5kZXgobGlua0hpbnQuaW5kZXgpO1xuICAgICAgICAvLyB0aGUgZm91cnRoIHBhcmFtZXRlciBpcyB1bmRvY3VtZW50ZWQuIGl0IHNwZWNpZmllcyB3aGVyZSB0aGUgd2lkZ2V0IHNob3VsZCBiZSBwbGFjZVxuICAgICAgICByZXR1cm4gKGNtRWRpdG9yIGFzIGFueSkuYWRkV2lkZ2V0KHBvcywgY3JlYXRlV2lkZ2V0RWxlbWVudChsaW5rSGludC5sZXR0ZXIpLCBmYWxzZSwgJ292ZXInKTtcbiAgICB9XG5cbiAgICBsaW5rS2V5TWFwLmZvckVhY2goeCA9PiBkcmF3V2lkZ2V0KGNtRWRpdG9yLCB4KSk7XG59XG5cbiIsImltcG9ydCB7UHJvY2Vzc29yLCBTb3VyY2VMaW5rSGludH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge0VkaXRvclZpZXd9IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5pbXBvcnQge2dldE1ESGludExpbmtzfSBmcm9tIFwiLi4vdXRpbHMvY29tbW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENNNkxpbmtQcm9jZXNzb3IgaW1wbGVtZW50cyBQcm9jZXNzb3Ige1xuICAgIGNtRWRpdG9yOiBFZGl0b3JWaWV3O1xuICAgIGxldHRlcnM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGVkaXRvcjogRWRpdG9yVmlldywgYWxwaGFiZXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNtRWRpdG9yID0gZWRpdG9yO1xuICAgICAgICB0aGlzLmxldHRlcnMgPSBhbHBoYWJldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiBTb3VyY2VMaW5rSGludFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U291cmNlTGlua0hpbnRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZpc2libGVMaW5lcygpIHtcbiAgICAgICAgY29uc3QgeyBjbUVkaXRvciB9ID0gdGhpcztcblxuICAgICAgICBjb25zdCB7IGZyb20sIHRvIH0gPSBjbUVkaXRvci52aWV3cG9ydDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNtRWRpdG9yLnN0YXRlLnNsaWNlRG9jKGZyb20sIHRvKTtcblxuICAgICAgICByZXR1cm4geyBpbmRleDogZnJvbSwgY29udGVudCB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U291cmNlTGlua0hpbnRzID0gKCk6IFNvdXJjZUxpbmtIaW50W10gPT4ge1xuICAgICAgICBjb25zdCB7IGxldHRlcnMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGNvbnRlbnQgfSA9IHRoaXMuZ2V0VmlzaWJsZUxpbmVzKCk7XG5cbiAgICAgICAgcmV0dXJuIGdldE1ESGludExpbmtzKGNvbnRlbnQsIGluZGV4LCBsZXR0ZXJzKTtcbiAgICB9XG59IiwiaW1wb3J0IHtnZXRMaW5rSGludExldHRlcnN9IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IHtTb3VyY2VMaW5rSGludH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UmVnZXhwQmxvY2tzKGNvbnRlbnQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIHJlZ2V4cDogc3RyaW5nLCBsZXR0ZXJzOiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCByZWdFeFVybCA9IGNhc2VTZW5zaXRpdmUgPyBuZXcgUmVnRXhwKHJlZ2V4cCwgJ2cnKSA6IG5ldyBSZWdFeHAocmVnZXhwLCAnaWcnKTtcblxuICAgIGxldCBsaW5rc1dpdGhJbmRleDoge1xuICAgICAgICBpbmRleDogbnVtYmVyO1xuICAgICAgICB0eXBlOiBcInJlZ2V4XCI7XG4gICAgICAgIGxpbmtUZXh0OiBzdHJpbmc7XG4gICAgfVtdID0gW107XG5cbiAgICBsZXQgcmVnRXhSZXN1bHQ7XG5cbiAgICB3aGlsZSAoKHJlZ0V4UmVzdWx0ID0gcmVnRXhVcmwuZXhlYyhjb250ZW50KSkpIHtcbiAgICAgICAgY29uc3QgbGlua1RleHQgPSByZWdFeFJlc3VsdFsxXTtcbiAgICAgICAgbGlua3NXaXRoSW5kZXgucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogcmVnRXhSZXN1bHQuaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgICB0eXBlOiBcInJlZ2V4XCIsXG4gICAgICAgICAgICBsaW5rVGV4dCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGlua0hpbnRMZXR0ZXJzID0gZ2V0TGlua0hpbnRMZXR0ZXJzKGxldHRlcnMsIGxpbmtzV2l0aEluZGV4Lmxlbmd0aCk7XG5cbiAgICBjb25zdCBsaW5rc1dpdGhMZXR0ZXI6IFNvdXJjZUxpbmtIaW50W10gPSBbXTtcbiAgICBsaW5rc1dpdGhJbmRleFxuICAgICAgICAuc29ydCgoeCwgeSkgPT4geC5pbmRleCAtIHkuaW5kZXgpXG4gICAgICAgIC5mb3JFYWNoKChsaW5rSGludCwgaSkgPT4ge1xuICAgICAgICAgICAgbGlua3NXaXRoTGV0dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIGxldHRlcjogbGlua0hpbnRMZXR0ZXJzW2ldLFxuICAgICAgICAgICAgICAgIC4uLmxpbmtIaW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmtzV2l0aExldHRlci5maWx0ZXIobGluayA9PiBsaW5rLmxldHRlcik7XG59XG4iLCJpbXBvcnQgQ002TGlua1Byb2Nlc3NvciBmcm9tIFwiLi9DTTZMaW5rUHJvY2Vzc29yXCI7XG5pbXBvcnQge1Byb2Nlc3Nvcn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge0VkaXRvclZpZXd9IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5pbXBvcnQge2V4dHJhY3RSZWdleHBCbG9ja3N9IGZyb20gXCIuLi91dGlscy9yZWdleHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ002UmVnZXhQcm9jZXNzb3IgZXh0ZW5kcyBDTTZMaW5rUHJvY2Vzc29yIGltcGxlbWVudHMgUHJvY2Vzc29yIHtcbiAgICByZWdleHA6IHN0cmluZztcbiAgICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGVkaXRvcjogRWRpdG9yVmlldywgYWxwaGFiZXQ6IHN0cmluZywgcmVnZXhwOiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoZWRpdG9yLCBhbHBoYWJldCk7XG4gICAgICAgIHRoaXMucmVnZXhwID0gcmVnZXhwO1xuICAgICAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBjYXNlU2Vuc2l0aXZlO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHsgbGV0dGVycywgcmVnZXhwIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7IGluZGV4LCBjb250ZW50IH0gPSB0aGlzLmdldFZpc2libGVMaW5lcygpO1xuICAgICAgICByZXR1cm4gZXh0cmFjdFJlZ2V4cEJsb2Nrcyhjb250ZW50LCBpbmRleCwgcmVnZXhwLCBsZXR0ZXJzLCB0aGlzLmNhc2VTZW5zaXRpdmUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7RWRpdG9yfSBmcm9tIFwiY29kZW1pcnJvclwiO1xuaW1wb3J0IHtQcm9jZXNzb3IsIFNvdXJjZUxpbmtIaW50fSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7ZGlzcGxheVNvdXJjZVBvcG92ZXJzLCBnZXRWaXNpYmxlTGluZVRleHR9IGZyb20gXCIuLi91dGlscy9jb21tb25cIjtcbmltcG9ydCB7ZXh0cmFjdFJlZ2V4cEJsb2Nrc30gZnJvbSBcIi4uL3V0aWxzL3JlZ2V4cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhY3lSZWdleHBQcm9jZXNzb3IgaW1wbGVtZW50cyBQcm9jZXNzb3Ige1xuICAgIGNtRWRpdG9yOiBFZGl0b3I7XG4gICAgcmVnZXhwOiBzdHJpbmc7XG4gICAgbGV0dGVyczogc3RyaW5nO1xuICAgIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihjbUVkaXRvcjogRWRpdG9yLCByZWdleHA6IHN0cmluZywgYWxwaGFiZXQ6IHN0cmluZywgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNtRWRpdG9yID0gY21FZGl0b3I7XG4gICAgICAgIHRoaXMucmVnZXhwID0gcmVnZXhwO1xuICAgICAgICB0aGlzLmxldHRlcnMgPSBhbHBoYWJldDtcbiAgICAgICAgdGhpcy5jYXNlU2Vuc2l0aXZlID0gY2FzZVNlbnNpdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiBTb3VyY2VMaW5rSGludFtdIHtcbiAgICAgICAgY29uc3QgW2NvbnRlbnQsIG9mZnNldF0gPSB0aGlzLmdldFZpc2libGVDb250ZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5nZXRMaW5rcyhjb250ZW50LCBvZmZzZXQpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheShsaW5rcyk7XG4gICAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFZpc2libGVDb250ZW50KCk6IFtzdHJpbmcsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCB7IGNtRWRpdG9yIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7IGluZE9mZnNldCwgc3RycyB9ID0gZ2V0VmlzaWJsZUxpbmVUZXh0KGNtRWRpdG9yKTtcblxuICAgICAgICByZXR1cm4gW3N0cnMsIGluZE9mZnNldF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMaW5rcyhjb250ZW50OiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogU291cmNlTGlua0hpbnRbXSB7XG4gICAgICAgIGNvbnN0IHsgcmVnZXhwLCBsZXR0ZXJzIH0gPSB0aGlzXG4gICAgICAgIHJldHVybiBleHRyYWN0UmVnZXhwQmxvY2tzKGNvbnRlbnQsIG9mZnNldCwgcmVnZXhwLCBsZXR0ZXJzLCB0aGlzLmNhc2VTZW5zaXRpdmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcGxheShsaW5rczogU291cmNlTGlua0hpbnRbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNtRWRpdG9yIH0gPSB0aGlzXG4gICAgICAgIGRpc3BsYXlTb3VyY2VQb3BvdmVycyhjbUVkaXRvciwgbGlua3MpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7UHJvY2Vzc29yLCBTb3VyY2VMaW5rSGludH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSBcImNvZGVtaXJyb3JcIjtcbmltcG9ydCB7ZGlzcGxheVNvdXJjZVBvcG92ZXJzLCBnZXRNREhpbnRMaW5rcywgZ2V0VmlzaWJsZUxpbmVUZXh0fSBmcm9tIFwiLi4vdXRpbHMvY29tbW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FjeVNvdXJjZUxpbmtQcm9jZXNzb3IgaW1wbGVtZW50cyBQcm9jZXNzb3Ige1xuICAgIGNtRWRpdG9yOiBFZGl0b3I7XG4gICAgbGV0dGVyczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZWRpdG9yOiBFZGl0b3IsIGFscGhhYmV0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jbUVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gYWxwaGFiZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHsgY21FZGl0b3IgfSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgbGlua0hpbnRzID0gdGhpcy5nZXRTb3VyY2VMaW5rSGludHMoY21FZGl0b3IpO1xuICAgICAgICBkaXNwbGF5U291cmNlUG9wb3ZlcnMoY21FZGl0b3IsIGxpbmtIaW50cyk7XG5cbiAgICAgICAgcmV0dXJuIGxpbmtIaW50cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNvdXJjZUxpbmtIaW50cyA9IChjbUVkaXRvcjogRWRpdG9yKTogU291cmNlTGlua0hpbnRbXSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGV0dGVycyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBpbmRPZmZzZXQsIHN0cnMgfSA9IGdldFZpc2libGVMaW5lVGV4dChjbUVkaXRvcik7XG5cbiAgICAgICAgcmV0dXJuIGdldE1ESGludExpbmtzKHN0cnMsIGluZE9mZnNldCwgbGV0dGVycyk7XG4gICAgfVxufSIsImltcG9ydCB7TGlua0hpbnRUeXBlLCBQcmV2aWV3TGlua0hpbnR9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtnZXRMaW5rSGludExldHRlcnN9IGZyb20gXCIuL2NvbW1vblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0xpbmtIaW50cyhwcmV2aWV3Vmlld0VsOiBIVE1MRWxlbWVudCwgbGV0dGVyczogc3RyaW5nICk6IFByZXZpZXdMaW5rSGludFtdIHtcbiAgICBjb25zdCBhbmNob3JFbHMgPSBwcmV2aWV3Vmlld0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgICBjb25zdCBlbWJlZEVscyA9IHByZXZpZXdWaWV3RWwucXVlcnlTZWxlY3RvckFsbCgnLmludGVybmFsLWVtYmVkJyk7XG5cbiAgICBjb25zdCBsaW5rSGludHM6IFByZXZpZXdMaW5rSGludFtdID0gW107XG4gICAgYW5jaG9yRWxzLmZvckVhY2goKGFuY2hvckVsLCBfaSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tJc1ByZXZpZXdFbE9uU2NyZWVuKHByZXZpZXdWaWV3RWwsIGFuY2hvckVsKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rVHlwZTogTGlua0hpbnRUeXBlID0gYW5jaG9yRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnRlcm5hbC1saW5rJylcbiAgICAgICAgICAgID8gJ2ludGVybmFsJ1xuICAgICAgICAgICAgOiAnZXh0ZXJuYWwnO1xuXG4gICAgICAgIGNvbnN0IGxpbmtUZXh0ID0gbGlua1R5cGUgPT09ICdpbnRlcm5hbCdcbiAgICAgICAgICAgID8gYW5jaG9yRWwuZGF0YXNldFsnaHJlZiddXG4gICAgICAgICAgICA6IGFuY2hvckVsLmhyZWY7XG5cbiAgICAgICAgbGV0IG9mZnNldFBhcmVudCA9IGFuY2hvckVsLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgbGV0IHRvcCA9IGFuY2hvckVsLm9mZnNldFRvcDtcbiAgICAgICAgbGV0IGxlZnQgPSBhbmNob3JFbC5vZmZzZXRMZWZ0O1xuXG4gICAgICAgIHdoaWxlIChvZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChvZmZzZXRQYXJlbnQgPT0gcHJldmlld1ZpZXdFbCkge1xuICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IG9mZnNldFBhcmVudC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBvZmZzZXRQYXJlbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGlua0hpbnRzLnB1c2goe1xuICAgICAgICAgICAgbGV0dGVyOiAnJyxcbiAgICAgICAgICAgIGxpbmtUZXh0OiBsaW5rVGV4dCxcbiAgICAgICAgICAgIHR5cGU6IGxpbmtUeXBlLFxuICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGVtYmVkRWxzLmZvckVhY2goKGVtYmVkRWwsIF9pKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtUZXh0ID0gZW1iZWRFbC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBjb25zdCBsaW5rRWwgPSBlbWJlZEVsLnF1ZXJ5U2VsZWN0b3IoJy5tYXJrZG93bi1lbWJlZC1saW5rJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGxpbmtUZXh0ICYmIGxpbmtFbCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrSXNQcmV2aWV3RWxPblNjcmVlbihwcmV2aWV3Vmlld0VsLCBsaW5rRWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBvZmZzZXRQYXJlbnQgPSBsaW5rRWwub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgbGV0IHRvcCA9IGxpbmtFbC5vZmZzZXRUb3A7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IGxpbmtFbC5vZmZzZXRMZWZ0O1xuXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFBhcmVudCA9PSBwcmV2aWV3Vmlld0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3AgKz0gb2Zmc2V0UGFyZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdCArPSBvZmZzZXRQYXJlbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpbmtIaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsZXR0ZXI6ICcnLFxuICAgICAgICAgICAgICAgIGxpbmtUZXh0OiBsaW5rVGV4dCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc29ydGVkTGlua0hpbnRzID0gbGlua0hpbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEudG9wID4gYi50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGEudG9wID09PSBiLnRvcCkge1xuICAgICAgICAgICAgaWYgKGEubGVmdCA+IGIubGVmdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhLmxlZnQgPT09IGIubGVmdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGxpbmtIaW50TGV0dGVycyA9IGdldExpbmtIaW50TGV0dGVycyhsZXR0ZXJzLCBzb3J0ZWRMaW5rSGludHMubGVuZ3RoKTtcblxuICAgIHNvcnRlZExpbmtIaW50cy5mb3JFYWNoKChsaW5rSGludCwgaSkgPT4ge1xuICAgICAgICBsaW5rSGludC5sZXR0ZXIgPSBsaW5rSGludExldHRlcnNbaV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29ydGVkTGlua0hpbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc1ByZXZpZXdFbE9uU2NyZWVuKHBhcmVudDogSFRNTEVsZW1lbnQsIGVsOiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBlbC5vZmZzZXRUb3AgPCBwYXJlbnQuc2Nyb2xsVG9wIHx8IGVsLm9mZnNldFRvcCA+IHBhcmVudC5zY3JvbGxUb3AgKyBwYXJlbnQub2Zmc2V0SGVpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJldmlld1BvcG92ZXJzKG1hcmtkb3duUHJldmlld1ZpZXdFbDogSFRNTEVsZW1lbnQsIGxpbmtIaW50czogUHJldmlld0xpbmtIaW50W10pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBsaW5rSGludCBvZiBsaW5rSGludHMpIHtcbiAgICAgICAgY29uc3QgbGlua0hpbnRFbCA9IG1hcmtkb3duUHJldmlld1ZpZXdFbC5jcmVhdGVFbCgnZGl2Jyk7XG4gICAgICAgIGxpbmtIaW50RWwuc3R5bGUudG9wID0gbGlua0hpbnQudG9wICsgJ3B4JztcbiAgICAgICAgbGlua0hpbnRFbC5zdHlsZS5sZWZ0ID0gbGlua0hpbnQubGVmdCArICdweCc7XG5cbiAgICAgICAgbGlua0hpbnRFbC50ZXh0Q29udGVudCA9IGxpbmtIaW50LmxldHRlcjtcbiAgICAgICAgbGlua0hpbnRFbC5jbGFzc0xpc3QuYWRkKCdqbCcpO1xuICAgICAgICBsaW5rSGludEVsLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXInKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7UHJldmlld0xpbmtIaW50fSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7ZGlzcGxheVByZXZpZXdQb3BvdmVycywgZ2V0UHJldmlld0xpbmtIaW50c30gZnJvbSBcIi4uL3V0aWxzL3ByZXZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJldmlld0xpbmtQcm9jZXNzb3Ige1xuICAgIHZpZXc6IEhUTUxFbGVtZW50O1xuICAgIGFscGhhYmV0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBIVE1MRWxlbWVudCwgYWxwaGFiZXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmFscGhhYmV0ID0gYWxwaGFiZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKTogUHJldmlld0xpbmtIaW50W10ge1xuICAgICAgICBjb25zdCB7IHZpZXcsIGFscGhhYmV0IH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZ2V0UHJldmlld0xpbmtIaW50cyh2aWV3LCBhbHBoYWJldCk7XG4gICAgICAgIGRpc3BsYXlQcmV2aWV3UG9wb3ZlcnModmlldywgbGlua3MpO1xuICAgICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxufSIsImltcG9ydCB7QXBwLCBNYXJrZG93blZpZXcsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBWaWV3fSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnY29kZW1pcnJvcic7XG5pbXBvcnQge0VkaXRvclNlbGVjdGlvbn0gZnJvbSBcIkBjb2RlbWlycm9yL3N0YXRlXCI7XG5pbXBvcnQge0VkaXRvclZpZXcsIFZpZXdQbHVnaW59IGZyb20gXCJAY29kZW1pcnJvci92aWV3XCI7XG5pbXBvcnQge0xpbmtIaW50QmFzZSwgU2V0dGluZ3MsIFNvdXJjZUxpbmtIaW50fSBmcm9tICd0eXBlcyc7XG5pbXBvcnQge01hcmtQbHVnaW59IGZyb20gXCIuL2NtNi13aWRnZXQvTWFya1BsdWdpblwiO1xuXG5pbXBvcnQgQ002TGlua1Byb2Nlc3NvciBmcm9tIFwiLi9wcm9jZXNzb3JzL0NNNkxpbmtQcm9jZXNzb3JcIjtcbmltcG9ydCBDTTZSZWdleFByb2Nlc3NvciBmcm9tIFwiLi9wcm9jZXNzb3JzL0NNNlJlZ2V4UHJvY2Vzc29yXCI7XG5pbXBvcnQgTGVnYWN5UmVnZXhwUHJvY2Vzc29yIGZyb20gXCIuL3Byb2Nlc3NvcnMvTGVnYWN5UmVnZXhwUHJvY2Vzc29yXCI7XG5pbXBvcnQgTGVnYWN5U291cmNlTGlua1Byb2Nlc3NvciBmcm9tIFwiLi9wcm9jZXNzb3JzL0xlZ2FjeVNvdXJjZUxpbmtQcm9jZXNzb3JcIjtcbmltcG9ydCBQcmV2aWV3TGlua1Byb2Nlc3NvciBmcm9tIFwiLi9wcm9jZXNzb3JzL1ByZXZpZXdMaW5rUHJvY2Vzc29yXCI7XG5cbmVudW0gVklFV19NT0RFIHtcbiAgICBTT1VSQ0UsXG4gICAgUFJFVklFVyxcbiAgICBMRUdBQ1lcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVtcFRvTGluayBleHRlbmRzIFBsdWdpbiB7XG4gICAgaXNMaW5rSGludEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgICBwcmVmaXhJbmZvOiB7IHByZWZpeDogc3RyaW5nLCBzaGlmdEtleTogYm9vbGVhbiB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8vbWFya1BsdWdpbjogTWFya1BsdWdpblxuICAgIG1hcmtWaWV3UGx1Z2luOiBWaWV3UGx1Z2luPGFueT5cblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKSB8fCBuZXcgU2V0dGluZ3MoKTtcblxuICAgICAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgICAgICBjb25zdCBtYXJrVmlld1BsdWdpbiA9IHRoaXMubWFya1ZpZXdQbHVnaW4gPSBWaWV3UGx1Z2luLmZyb21DbGFzcyhNYXJrUGx1Z2luLCB7XG4gICAgICAgICAgICBkZWNvcmF0aW9uczogdiA9PiB2LmRlY29yYXRpb25zXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdG9yRXh0ZW5zaW9uKFttYXJrVmlld1BsdWdpbl0pXG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiAnYWN0aXZhdGUtanVtcC10by1saW5rJyxcbiAgICAgICAgICAgIG5hbWU6ICdKdW1wIHRvIExpbmsnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuYWN0aW9uLmJpbmQodGhpcywgJ2xpbmsnKSxcbiAgICAgICAgICAgIGhvdGtleXM6IFt7bW9kaWZpZXJzOiBbJ0N0cmwnXSwga2V5OiBgJ2B9XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImFjdGl2YXRlLWp1bXAtdG8tYW55d2hlcmVcIixcbiAgICAgICAgICAgIG5hbWU6IFwiSnVtcCB0byBBbnl3aGVyZSBSZWdleFwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuYWN0aW9uLmJpbmQodGhpcywgJ3JlZ2V4cCcpLFxuICAgICAgICAgICAgaG90a2V5czogW3ttb2RpZmllcnM6IFtcIkN0cmxcIl0sIGtleTogXCI7XCJ9XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgICAgICAgIGlkOiBcImFjdGl2YXRlLWxpZ2h0c3BlZWQtanVtcFwiLFxuICAgICAgICAgICAgbmFtZTogXCJMaWdodHNwZWVkIEp1bXBcIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmFjdGlvbi5iaW5kKHRoaXMsICdsaWdodHNwZWVkJyksXG4gICAgICAgICAgICBob3RrZXlzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb251bmxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmxvYWRpbmcganVtcCB0byBsaW5rcyBwbHVnaW4nKTtcbiAgICB9XG5cbiAgICBhY3Rpb24odHlwZTogJ2xpbmsnIHwgJ3JlZ2V4cCcgfCAnbGlnaHRzcGVlZCcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMaW5rSGludEFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibGlua1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSnVtcFRvTGluaygpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY2FzZSBcInJlZ2V4cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSnVtcFRvUmVnZXgoKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIGNhc2UgXCJsaWdodHNwZWVkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMaWdodHNwZWVkSnVtcCgpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kZShjdXJyZW50VmlldzogVmlldyk6IFZJRVdfTU9ERSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaXNMZWdhY3kgPSB0aGlzLmFwcC52YXVsdC5nZXRDb25maWcoXCJsZWdhY3lFZGl0b3JcIilcblxuICAgICAgICBpZiAoY3VycmVudFZpZXcuZ2V0U3RhdGUoKS5tb2RlID09PSAncHJldmlldycpIHtcbiAgICAgICAgICAgIHJldHVybiBWSUVXX01PREUuUFJFVklFVztcbiAgICAgICAgfSBlbHNlIGlmIChpc0xlZ2FjeSkge1xuICAgICAgICAgICAgcmV0dXJuIFZJRVdfTU9ERS5MRUdBQ1k7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcuZ2V0U3RhdGUoKS5tb2RlID09PSAnc291cmNlJykge1xuICAgICAgICAgICAgcmV0dXJuIFZJRVdfTU9ERS5TT1VSQ0U7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGhhbmRsZUp1bXBUb0xpbmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtzZXR0aW5nczoge2xldHRlcnN9LCBhcHB9ID0gdGhpc1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ID0gYXBwLndvcmtzcGFjZS5nZXRMZWFmKGZhbHNlKS52aWV3O1xuICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5nZXRNb2RlKGN1cnJlbnRWaWV3KTtcblxuICAgICAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldylcblxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgVklFV19NT0RFLkxFR0FDWTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbUVkaXRvcjogRWRpdG9yID0gKGN1cnJlbnRWaWV3IGFzIGFueSkuc291cmNlTW9kZS5jbUVkaXRvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VMaW5rSGludHMgPSBuZXcgTGVnYWN5U291cmNlTGlua1Byb2Nlc3NvcihjbUVkaXRvciwgbGV0dGVycykuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9ucyhzb3VyY2VMaW5rSGludHMsIGNvbnRlbnRFbCwgY21FZGl0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBWSUVXX01PREUuUFJFVklFVzpcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3Vmlld0VsOiBIVE1MRWxlbWVudCA9IChjdXJyZW50VmlldyBhcyBhbnkpLnByZXZpZXdNb2RlLmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tYXJrZG93bi1wcmV2aWV3LXZpZXcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aWV3TGlua0hpbnRzID0gbmV3IFByZXZpZXdMaW5rUHJvY2Vzc29yKHByZXZpZXdWaWV3RWwsIGxldHRlcnMpLmluaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbnMocHJldmlld0xpbmtIaW50cywgY29udGVudEVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVklFV19NT0RFLlNPVVJDRTpcbiAgICAgICAgICAgICAgICBjb25zdCBjbTZFZGl0b3I6IEVkaXRvclZpZXcgPSAoPHsgZWRpdG9yPzogeyBjbTogRWRpdG9yVmlldyB9IH0+Y3VycmVudFZpZXcpLmVkaXRvci5jbTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXZlUHJldmlld0xpbmtzID0gbmV3IENNNkxpbmtQcm9jZXNzb3IoY202RWRpdG9yLCBsZXR0ZXJzKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgY202RWRpdG9yLnBsdWdpbih0aGlzLm1hcmtWaWV3UGx1Z2luKS5zZXRMaW5rcyhsaXZlUHJldmlld0xpbmtzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UudXBkYXRlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9ucyhsaXZlUHJldmlld0xpbmtzLCBjb250ZW50RWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAqICBjYXNlU2Vuc2l0aXZlIGlzIG9ubHkgZm9yIGxpZ2h0c3BlZWQgYW5kIHNoYWxsIG5vdCBhZmZlY3QganVtcFRvQW55d2hlcmUsIHNvIGl0IGlzIHRydWVcbiAgICAqICBieSBkZWZhdWx0XG4gICAgKi9cbiAgICBoYW5kbGVKdW1wVG9SZWdleCA9IChzdHJpbmdUb1NlYXJjaD86IHN0cmluZywgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiA9IHRydWUpID0+IHtcbiAgICAgICAgY29uc3Qge2FwcCwgc2V0dGluZ3M6IHtsZXR0ZXJzLCBqdW1wVG9Bbnl3aGVyZVJlZ2V4fX0gPSB0aGlzXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ID0gYXBwLndvcmtzcGFjZS5nZXRMZWFmKGZhbHNlKS52aWV3XG4gICAgICAgIGNvbnN0IG1vZGUgPSB0aGlzLmdldE1vZGUoY3VycmVudFZpZXcpO1xuICAgICAgICBjb25zdCB3aGF0VG9Mb29rQXQgPSBzdHJpbmdUb1NlYXJjaCB8fCBqdW1wVG9Bbnl3aGVyZVJlZ2V4O1xuXG4gICAgICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSBhcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KVxuXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSBWSUVXX01PREUuU09VUkNFOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNtNkVkaXRvcjogRWRpdG9yVmlldyA9ICg8eyBlZGl0b3I/OiB7IGNtOiBFZGl0b3JWaWV3IH0gfT5jdXJyZW50VmlldykuZWRpdG9yLmNtO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpdmVQcmV2aWV3TGlua3MgPSBuZXcgQ002UmVnZXhQcm9jZXNzb3IoY202RWRpdG9yLCBsZXR0ZXJzLCB3aGF0VG9Mb29rQXQsIGNhc2VTZW5zaXRpdmUpLmluaXQoKTtcbiAgICAgICAgICAgICAgICBjbTZFZGl0b3IucGx1Z2luKHRoaXMubWFya1ZpZXdQbHVnaW4pLnNldExpbmtzKGxpdmVQcmV2aWV3TGlua3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS51cGRhdGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb25zKGxpdmVQcmV2aWV3TGlua3MsIGNvbnRlbnRFbCwgY202RWRpdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVklFV19NT0RFLlBSRVZJRVc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFZJRVdfTU9ERS5MRUdBQ1k6XG4gICAgICAgICAgICAgICAgY29uc3QgY21FZGl0b3I6IEVkaXRvciA9IChjdXJyZW50VmlldyBhcyBhbnkpLnNvdXJjZU1vZGUuY21FZGl0b3I7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBuZXcgTGVnYWN5UmVnZXhwUHJvY2Vzc29yKGNtRWRpdG9yLCB3aGF0VG9Mb29rQXQsIGxldHRlcnMsIGNhc2VTZW5zaXRpdmUpLmluaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbnMobGlua3MsIGNvbnRlbnRFbCwgY21FZGl0b3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIGFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL21yamFja3BoaWwvb2JzaWRpYW4tanVtcC10by1saW5rL2lzc3Vlcy8zNSNpc3N1ZWNvbW1lbnQtMTA4NTkwNTY2OFxuICAgIGhhbmRsZUxpZ2h0c3BlZWRKdW1wKCkge1xuICAgICAgICAvLyBnZXQgYWxsIHRleHQgY29sb3JcbiAgICAgICAgY29uc3QgeyBjb250ZW50RWwgfSA9IGFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgICAgICBpZiAoIWNvbnRlbnRFbCkge3JldHVybn1cbiAgICAgICAgLy8gdGhpcyBlbGVtZW50IGRvZXNuJ3QgZXhpc3QgaW4gY201L2hhcyBhIGRpZmZlcmVudCBjbGFzcywgc28gbGlnaHRzcGVlZCB3aWxsIG5vdCB3b3JrIGluIGNtNVxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyQ29sb3IgPSBjb250ZW50RWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNtLWNvbnRlbnRDb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQ29sb3IgPSAoY29udGVudENvbnRhaW5lckNvbG9yWzBdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5jb2xvcjtcbiAgICAgICAgLy8gY2hhbmdlIGFsbCB0ZXh0IGNvbG9yIHRvIGdyYXlcbiAgICAgICAgKGNvbnRlbnRDb250YWluZXJDb2xvclswXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY29sb3IgPSAndmFyKC0tanVtcC10by1saW5rLWxpZ2h0c3BlZWQtY29sb3IpJztcblxuICAgICAgICBjb25zdCBrZXlBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgY29uc3QgZ3JhYktleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBFc2NhcGUgdG8gcmVqZWN0IHRoZSBtb2RlXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBncmFiS2V5LCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgKGNvbnRlbnRDb250YWluZXJDb2xvclswXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY29sb3IgPSBvcmlnaW5hbENvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0ZXN0IGlmIGtleXByZXNzIGlzIGNhcGl0YWxpemVkXG4gICAgICAgICAgICBpZiAoL15bYS16XSQvaS50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0NhcGl0YWwgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDYXBpdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhcHR1cmUgdXBwZXJjYXNlXG4gICAgICAgICAgICAgICAgICAgIGtleUFycmF5LnB1c2goKGV2ZW50LmtleSkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FwdHVyZSBsb3dlcmNhc2VcbiAgICAgICAgICAgICAgICAgICAga2V5QXJyYXkucHVzaChldmVudC5rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc3RvcCB3aGVuIGxlbmd0aCBvZiBhcnJheSBpcyBlcXVhbCB0byAyXG4gICAgICAgICAgICBpZiAoa2V5QXJyYXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVKdW1wVG9SZWdleChcIlxcXFxiXCIgKyBrZXlBcnJheS5qb2luKFwiXCIpLCB0aGlzLnNldHRpbmdzLmxpZ2h0c3BlZWRDYXNlU2Vuc2l0aXZlKTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmluZyBldmVudExpc3RlbmVyIGFmdGVyIHByb2NlZWRlZFxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBncmFiS2V5LCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgKGNvbnRlbnRDb250YWluZXJDb2xvclswXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY29sb3IgPSBvcmlnaW5hbENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnRFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ3JhYktleSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUFjdGlvbnMgPSAobGlua0hpbnRzOiBMaW5rSGludEJhc2VbXSwgY3VycmVudFZpZXc6IEhUTUxFbGVtZW50LCBjbUVkaXRvcj86IEVkaXRvciB8IEVkaXRvclZpZXcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKCFsaW5rSGludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rSGludE1hcDogeyBbbGV0dGVyOiBzdHJpbmddOiBMaW5rSGludEJhc2UgfSA9IHt9O1xuICAgICAgICBsaW5rSGludHMuZm9yRWFjaCh4ID0+IGxpbmtIaW50TWFwW3gubGV0dGVyXSA9IHgpO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZUhvdGtleSA9IChuZXdMZWFmOiBib29sZWFuLCBsaW5rOiBTb3VyY2VMaW5rSGludCB8IExpbmtIaW50QmFzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpbmsudHlwZSA9PT0gJ2ludGVybmFsJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNlY29uZCBhcmd1bWVudCBpcyBmb3IgdGhlIGxpbmsgcmVzb2x1dGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGRlY29kZVVSSShsaW5rLmxpbmtUZXh0KSwgZmlsZS5wYXRoLCBuZXdMZWFmLCB7YWN0aXZlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5rLnR5cGUgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihsaW5rLmxpbmtUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdG9yID0gY21FZGl0b3I7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvciBpbnN0YW5jZW9mIEVkaXRvclZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSAobGluayBhcyBTb3VyY2VMaW5rSGludCkuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRvci5kaXNwYXRjaCh7IHNlbGVjdGlvbjogRWRpdG9yU2VsZWN0aW9uLmN1cnNvcihpbmRleCkgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc2V0Q3Vyc29yKGVkaXRvci5wb3NGcm9tSW5kZXgoKDxTb3VyY2VMaW5rSGludD5saW5rKS5pbmRleCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVBvcG92ZXJzID0gKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVQb3BvdmVycylcbiAgICAgICAgICAgIGN1cnJlbnRWaWV3LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qbC5wb3BvdmVyJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICAgICAgY3VycmVudFZpZXcucXVlcnlTZWxlY3RvckFsbCgnI2psLW1vZGFsJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhJbmZvID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IGFwcC53b3Jrc3BhY2UuZ2V0TGVhZihmYWxzZSkudmlld1xuICAgICAgICAgICAgY29uc3QgY202RWRpdG9yOiBFZGl0b3JWaWV3ID0gKDx7IGVkaXRvcj86IHsgY206IEVkaXRvclZpZXcgfSB9PnZpZXcpLmVkaXRvci5jbTtcbiAgICAgICAgICAgIGNtNkVkaXRvci5wbHVnaW4odGhpcy5tYXJrVmlld1BsdWdpbikuY2xlYW4oKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS51cGRhdGVPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmlzTGlua0hpbnRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdTaGlmdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gZXZlbnQua2V5LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXhlcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMobGlua0hpbnRNYXApLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMSkubWFwKHggPT4geFswXSkpO1xuXG4gICAgICAgICAgICBsZXQgbGlua0hpbnQ6IExpbmtIaW50QmFzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZWZpeEluZm8pIHtcbiAgICAgICAgICAgICAgICBsaW5rSGludCA9IGxpbmtIaW50TWFwW3RoaXMucHJlZml4SW5mby5wcmVmaXggKyBldmVudEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmtIaW50ID0gbGlua0hpbnRNYXBbZXZlbnRLZXldO1xuICAgICAgICAgICAgICAgIGlmICghbGlua0hpbnQgJiYgcHJlZml4ZXMgJiYgcHJlZml4ZXMuaGFzKGV2ZW50S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZpeEluZm8gPSB7cHJlZml4OiBldmVudEtleSwgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5fTtcblxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0xlYWYgPSB0aGlzLnByZWZpeEluZm8/LnNoaWZ0S2V5IHx8IGV2ZW50LnNoaWZ0S2V5O1xuXG4gICAgICAgICAgICBsaW5rSGludCAmJiBoYW5kbGVIb3RrZXkobmV3TGVhZiwgbGlua0hpbnQpO1xuXG4gICAgICAgICAgICBjdXJyZW50Vmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmVtb3ZlUG9wb3ZlcnMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjdXJyZW50Vmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVBvcG92ZXJzKVxuICAgICAgICBjdXJyZW50Vmlldy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmlzTGlua0hpbnRBY3RpdmUgPSB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICAgIHBsdWdpbjogSnVtcFRvTGlua1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogSnVtcFRvTGluaykge1xuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbilcblxuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpblxuICAgIH1cblxuICAgIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgICAgIGxldCB7Y29udGFpbmVyRWx9ID0gdGhpcztcblxuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHt0ZXh0OiAnU2V0dGluZ3MgZm9yIEp1bXAgVG8gTGluay4nfSk7XG5cbiAgICAgICAgLyogTW9kYWwgbW9kZSBkZXByZWNhdGVkICovXG4gICAgICAgIC8vIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAvLyAgICAgLnNldE5hbWUoJ1ByZXNlbnRhdGlvbicpXG4gICAgICAgIC8vICAgICAuc2V0RGVzYygnSG93IHRvIHNob3cgbGlua3MnKVxuICAgICAgICAvLyAgICAgLmFkZERyb3Bkb3duKGNiID0+IHsgY2JcbiAgICAgICAgLy8gICAgICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgIC8vICAgICAgICAgICAgIFwicG9wb3ZlcnNcIjogJ1BvcG92ZXJzJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgXCJtb2RhbFwiOiAnTW9kYWwnXG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kZSlcbiAgICAgICAgLy8gICAgICAgICAub25DaGFuZ2UoKHZhbHVlOiBMaW5rSGludE1vZGUpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubW9kZSA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoJ0NoYXJhY3RlcnMgdXNlZCBmb3IgbGluayBoaW50cycpXG4gICAgICAgICAgICAuc2V0RGVzYygnVGhlIGNoYXJhY3RlcnMgcGxhY2VkIG5leHQgdG8gZWFjaCBsaW5rIGFmdGVyIGVudGVyIGxpbmstaGludCBtb2RlLicpXG4gICAgICAgICAgICAuYWRkVGV4dChjYiA9PiB7XG4gICAgICAgICAgICAgICAgY2Iuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubGV0dGVycylcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sZXR0ZXJzID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZSgnSnVtcCBUbyBBbnl3aGVyZScpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIlJlZ2V4IGJhc2VkIG5hdmlnYXRpbmcgaW4gZWRpdG9yIG1vZGVcIilcbiAgICAgICAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdDdXN0b20gUmVnZXgnKVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuanVtcFRvQW55d2hlcmVSZWdleClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuanVtcFRvQW55d2hlcmVSZWdleCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKCdMaWdodHNwZWVkIHJlZ2V4IGNhc2Ugc2Vuc2l0aXZpdHknKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgJ0lmIGVuYWJsZWQsIHRoZSByZWdleCBmb3IgbWF0Y2hpbmcgd2lsbCBiZSBjYXNlIHNlbnNpdGl2ZS4nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubGlnaHRzcGVlZENhc2VTZW5zaXRpdmUpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGlnaHRzcGVlZENhc2VTZW5zaXRpdmUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIldpZGdldFR5cGUiLCJEZWNvcmF0aW9uIiwiUGx1Z2luIiwiTWFya2Rvd25WaWV3IiwiRWRpdG9yVmlldyIsIkVkaXRvclNlbGVjdGlvbiIsIlZpZXdQbHVnaW4iLCJQbHVnaW5TZXR0aW5nVGFiIiwiU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUDs7TUM1RGEsUUFBUSxDQUFBO0FBQXJCLElBQUEsV0FBQSxHQUFBOztRQUVDLElBQU8sQ0FBQSxPQUFBLEdBQVcsZ0JBQWdCLENBQUM7UUFDbkMsSUFBbUIsQ0FBQSxtQkFBQSxHQUFXLGVBQWUsQ0FBQztRQUM5QyxJQUF1QixDQUFBLHVCQUFBLEdBQVksS0FBSyxDQUFDO0tBQ3pDO0FBQUE7O0FDcEJLLE1BQU8sVUFBVyxTQUFRQSxlQUFVLENBQUE7QUFDdEMsSUFBQSxXQUFBLENBQXFCLElBQVksRUFBQTtBQUM3QixRQUFBLEtBQUssRUFBRSxDQUFDO1FBRFMsSUFBSSxDQUFBLElBQUEsR0FBSixJQUFJLENBQVE7S0FFaEM7QUFFRCxJQUFBLEVBQUUsQ0FBQyxLQUFpQixFQUFBO0FBQ2hCLFFBQUEsT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbkM7SUFFRCxLQUFLLEdBQUE7UUFDRCxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELFFBQUEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsUUFBQSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDdkMsUUFBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDcEMsUUFBQSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixRQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLFFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVyQixRQUFBLE9BQU8sT0FBTyxDQUFDO0tBQ2xCO0lBRUQsV0FBVyxHQUFBO0FBQ1AsUUFBQSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNKOztNQ25CWSxVQUFVLENBQUE7QUFJbkIsSUFBQSxXQUFBLENBQVksS0FBaUIsRUFBQTtRQUY3QixJQUFLLENBQUEsS0FBQSxHQUFxQixFQUFFLENBQUM7QUFHekIsUUFBQSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUFBLElBQUksQ0FBQyxXQUFXLEdBQUdDLGVBQVUsQ0FBQyxJQUFJLENBQUE7S0FDckM7QUFFRCxJQUFBLFFBQVEsQ0FBQyxLQUF1QixFQUFBO0FBQzVCLFFBQUEsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDdEI7SUFFRCxLQUFLLEdBQUE7QUFDRCxRQUFBLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0FBRUQsSUFBQSxJQUFJLE9BQU8sR0FBQTtBQUNQLFFBQUEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDaEM7QUFFRCxJQUFBLE1BQU0sQ0FBQyxPQUFtQixFQUFBO0FBQ3RCLFFBQUEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQzdCQSxlQUFVLENBQUMsTUFBTSxDQUFDO0FBQ2QsWUFBQSxNQUFNLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNoQyxZQUFBLElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxHQUFHQSxlQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzdDO0FBQ0o7O0FDckNEOzs7O0FBSUc7QUFDRyxTQUFVLGtCQUFrQixDQUFDLFFBQWdCLEVBQUE7QUFDL0MsSUFBQSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEUsSUFBQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtBQUMzRyxJQUFBLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0FBQzNELElBQUEsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUE7QUFFMUUsSUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFFRDs7OztBQUlHO0FBQ2EsU0FBQSxrQkFBa0IsQ0FBQyxRQUFnQixFQUFFLFlBQW9CLEVBQUE7QUFDckUsSUFBQSxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUVoRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7SUFHdkcsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU5RCxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUUsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFBO0FBQzFCLElBQUEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdEMsUUFBQSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDMUIsUUFBQSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQy9DLFlBQUEsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRTtBQUN2QyxnQkFBQSxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxNQUFNLEtBQUssRUFBRSxFQUFFO0FBQ2Ysb0JBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDNUIsd0JBQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxxQkFBQTtBQUNKLGlCQUFBO0FBQU0scUJBQUE7QUFDSCxvQkFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUN4QyxpQkFBQTtBQUNKLGFBQUE7QUFBTSxpQkFBQTtnQkFDSCxNQUFNO0FBQ1QsYUFBQTtBQUNKLFNBQUE7QUFDSixLQUFBO0FBRUQsSUFBQSxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDO1NBRWUsY0FBYyxDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFBOztJQUUzRSxNQUFNLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQzs7SUFFN0MsTUFBTSxlQUFlLEdBQUcsOEJBQThCLENBQUM7O0lBRXZELE1BQU0sYUFBYSxHQUFHLGlDQUFpQyxDQUFDOztJQUV4RCxNQUFNLFFBQVEsR0FBRywrQkFBK0IsQ0FBQztJQUVqRCxJQUFJLGNBQWMsR0FBeUUsRUFBRSxDQUFDO0FBQzlGLElBQUEsSUFBSSxXQUFXLENBQUM7SUFFaEIsT0FBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM3QyxRQUFBLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFBLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzFGLEtBQUE7SUFFRCxPQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQy9DLFFBQUEsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFFBQUEsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDMUYsS0FBQTtJQUVELE9BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDN0MsUUFBQSxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsUUFBQSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtBQUN6RixLQUFBO0lBRUQsT0FBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN4QyxRQUFBLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7QUFDN0YsS0FBQTtJQUVELE1BQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0UsTUFBTSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztJQUM3QyxjQUFjO0FBQ1QsU0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNoQyxTQUFBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUk7QUFDckIsUUFBQSxlQUFlLENBQUMsSUFBSSxDQUFHLE1BQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFBLEVBQUssUUFBUSxDQUFBLENBQUUsQ0FBQztBQUNyRSxLQUFDLENBQUMsQ0FBQztBQUVQLElBQUEsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUVLLFNBQVUsbUJBQW1CLENBQUMsT0FBZSxFQUFBO0lBQy9DLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkQsSUFBQSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixJQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQUEsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDL0IsSUFBQSxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRWUsU0FBQSxxQkFBcUIsQ0FBQyxRQUFnQixFQUFFLFVBQTRCLEVBQUE7QUFDaEYsSUFBQSxNQUFNLFVBQVUsR0FBRyxDQUFDLFFBQWdCLEVBQUUsUUFBd0IsS0FBSTtRQUM5RCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFbEQsUUFBQSxPQUFRLFFBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pHLEtBQUMsQ0FBQTtBQUVELElBQUEsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JEOztBQ2pIYyxNQUFPLGdCQUFnQixDQUFBO0lBSWpDLFdBQVksQ0FBQSxNQUFrQixFQUFFLFFBQWdCLEVBQUE7UUFrQnhDLElBQWtCLENBQUEsa0JBQUEsR0FBRyxNQUF1QjtBQUNoRCxZQUFBLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDekIsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFbEQsT0FBTyxjQUFjLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRCxTQUFDLENBQUE7QUF0QkcsUUFBQSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUN2QixRQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0tBQzNCO0lBRU0sSUFBSSxHQUFBO0FBQ1AsUUFBQSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQ3BDO0lBRU0sZUFBZSxHQUFBO0FBQ2xCLFFBQUEsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUUxQixNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDdkMsUUFBQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFbEQsUUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztLQUNuQztBQVFKOztBQzdCSyxTQUFVLG1CQUFtQixDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBRSxhQUFzQixFQUFBO0lBQ3hILE1BQU0sUUFBUSxHQUFHLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXBGLElBQUksY0FBYyxHQUlaLEVBQUUsQ0FBQztBQUVULElBQUEsSUFBSSxXQUFXLENBQUM7SUFFaEIsUUFBUSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztBQUMzQyxRQUFBLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQ2hCLFlBQUEsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBTTtBQUNqQyxZQUFBLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUTtBQUNYLFNBQUEsQ0FBQyxDQUFDO0FBQ04sS0FBQTtJQUVELE1BQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0UsTUFBTSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztJQUM3QyxjQUFjO0FBQ1QsU0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqQyxTQUFBLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUk7QUFDckIsUUFBQSxlQUFlLENBQUMsSUFBSSxDQUNoQixNQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQSxFQUN2QixRQUFRLENBQUEsQ0FDYixDQUFDO0FBQ1AsS0FBQyxDQUFDLENBQUM7QUFFUCxJQUFBLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZEOztBQy9CcUIsTUFBQSxpQkFBa0IsU0FBUSxnQkFBZ0IsQ0FBQTtBQUczRCxJQUFBLFdBQUEsQ0FBWSxNQUFrQixFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLGFBQXNCLEVBQUE7QUFDcEYsUUFBQSxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLFFBQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBQSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0QztJQUVELElBQUksR0FBQTtBQUNBLFFBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDakMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDbEQsUUFBQSxPQUFPLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDbkY7QUFDSjs7QUNkYSxNQUFPLHFCQUFxQixDQUFBO0FBTXRDLElBQUEsV0FBQSxDQUFZLFFBQWdCLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEVBQUUsYUFBc0IsRUFBQTtBQUNsRixRQUFBLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFFBQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN4QixRQUFBLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0tBQ3RDO0lBRU0sSUFBSSxHQUFBO1FBQ1AsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUU3QyxRQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEIsUUFBQSxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVPLGlCQUFpQixHQUFBO0FBQ3JCLFFBQUEsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMxQixNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXpELFFBQUEsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM1QjtJQUVPLFFBQVEsQ0FBQyxPQUFlLEVBQUUsTUFBYyxFQUFBO0FBQzVDLFFBQUEsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDaEMsUUFBQSxPQUFPLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDcEY7QUFFTyxJQUFBLE9BQU8sQ0FBQyxLQUF1QixFQUFBO0FBQ25DLFFBQUEsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQTtBQUN6QixRQUFBLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxQztBQUNKOztBQ3RDYSxNQUFPLHlCQUF5QixDQUFBO0lBSTFDLFdBQVksQ0FBQSxNQUFjLEVBQUUsUUFBZ0IsRUFBQTtBQWNwQyxRQUFBLElBQUEsQ0FBQSxrQkFBa0IsR0FBRyxDQUFDLFFBQWdCLEtBQXNCO0FBQ2hFLFlBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztZQUN6QixNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpELE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEQsU0FBQyxDQUFBO0FBbEJHLFFBQUEsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDdkIsUUFBQSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztLQUMzQjtJQUVNLElBQUksR0FBQTtBQUNQLFFBQUEsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUUxQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEQsUUFBQSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFM0MsUUFBQSxPQUFPLFNBQVMsQ0FBQztLQUNwQjtBQVFKOztBQ3pCZSxTQUFBLG1CQUFtQixDQUFDLGFBQTBCLEVBQUUsT0FBZSxFQUFBO0lBQzNFLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUVuRSxNQUFNLFNBQVMsR0FBc0IsRUFBRSxDQUFDO0lBQ3hDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFJO0FBQy9CLFFBQUEsSUFBSSx3QkFBd0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDbkQsT0FBTTtBQUNULFNBQUE7UUFFRCxNQUFNLFFBQVEsR0FBaUIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ3ZFLGNBQUUsVUFBVTtjQUNWLFVBQVUsQ0FBQztBQUVqQixRQUFBLE1BQU0sUUFBUSxHQUFHLFFBQVEsS0FBSyxVQUFVO0FBQ3BDLGNBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDMUIsY0FBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0FBRXBCLFFBQUEsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQTJCLENBQUM7QUFDeEQsUUFBQSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQzdCLFFBQUEsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQUUvQixRQUFBLE9BQU8sWUFBWSxFQUFFO1lBQ2pCLElBQUksWUFBWSxJQUFJLGFBQWEsRUFBRTtnQkFDL0IsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUM1QixhQUFBO0FBQU0saUJBQUE7QUFDSCxnQkFBQSxHQUFHLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUM5QixnQkFBQSxJQUFJLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxnQkFBQSxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQTJCLENBQUM7QUFDM0QsYUFBQTtBQUNKLFNBQUE7UUFFRCxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ1gsWUFBQSxNQUFNLEVBQUUsRUFBRTtBQUNWLFlBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbEIsWUFBQSxJQUFJLEVBQUUsUUFBUTtBQUNkLFlBQUEsR0FBRyxFQUFFLEdBQUc7QUFDUixZQUFBLElBQUksRUFBRSxJQUFJO0FBQ2IsU0FBQSxDQUFDLENBQUM7QUFDUCxLQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFJO1FBQzdCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBZ0IsQ0FBQztRQUU1RSxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7QUFDcEIsWUFBQSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDakQsT0FBTTtBQUNULGFBQUE7QUFFRCxZQUFBLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUEyQixDQUFDO0FBQ3RELFlBQUEsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUMzQixZQUFBLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFFN0IsWUFBQSxPQUFPLFlBQVksRUFBRTtnQkFDakIsSUFBSSxZQUFZLElBQUksYUFBYSxFQUFFO29CQUMvQixZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQzVCLGlCQUFBO0FBQU0scUJBQUE7QUFDSCxvQkFBQSxHQUFHLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUM5QixvQkFBQSxJQUFJLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxvQkFBQSxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQTJCLENBQUM7QUFDM0QsaUJBQUE7QUFDSixhQUFBO1lBRUQsU0FBUyxDQUFDLElBQUksQ0FBQztBQUNYLGdCQUFBLE1BQU0sRUFBRSxFQUFFO0FBQ1YsZ0JBQUEsUUFBUSxFQUFFLFFBQVE7QUFDbEIsZ0JBQUEsSUFBSSxFQUFFLFVBQVU7QUFDaEIsZ0JBQUEsR0FBRyxFQUFFLEdBQUc7QUFDUixnQkFBQSxJQUFJLEVBQUUsSUFBSTtBQUNiLGFBQUEsQ0FBQyxDQUFDO0FBQ04sU0FBQTtBQUNMLEtBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUk7QUFDNUMsUUFBQSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNmLFlBQUEsT0FBTyxDQUFDLENBQUM7QUFDWixTQUFBO0FBQU0sYUFBQSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUN4QixZQUFBLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2pCLGdCQUFBLE9BQU8sQ0FBQyxDQUFDO0FBQ1osYUFBQTtBQUFNLGlCQUFBLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQzFCLGdCQUFBLE9BQU8sQ0FBQyxDQUFDO0FBQ1osYUFBQTtBQUFNLGlCQUFBO2dCQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDYixhQUFBO0FBQ0osU0FBQTtBQUFNLGFBQUE7WUFDSCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2IsU0FBQTtBQUNMLEtBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU1RSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSTtBQUNwQyxRQUFBLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLEtBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDO0FBRWUsU0FBQSx3QkFBd0IsQ0FBQyxNQUFtQixFQUFFLEVBQWUsRUFBQTtBQUN6RSxJQUFBLE9BQU8sRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFBO0FBQ25HLENBQUM7QUFFZSxTQUFBLHNCQUFzQixDQUFDLHFCQUFrQyxFQUFFLFNBQTRCLEVBQUE7QUFDbkcsSUFBQSxLQUFLLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtRQUM1QixNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDM0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFFN0MsUUFBQSxVQUFVLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDekMsUUFBQSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixRQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLEtBQUE7QUFDTDs7QUNqSGMsTUFBTyxvQkFBb0IsQ0FBQTtJQUlyQyxXQUFZLENBQUEsSUFBaUIsRUFBRSxRQUFnQixFQUFBO0FBQzNDLFFBQUEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsUUFBQSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUM1QjtJQUVNLElBQUksR0FBQTtBQUNQLFFBQUEsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFDL0IsTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELFFBQUEsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLFFBQUEsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSjs7QUNMRCxJQUFLLFNBSUosQ0FBQTtBQUpELENBQUEsVUFBSyxTQUFTLEVBQUE7QUFDVixJQUFBLFNBQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsUUFBTSxDQUFBO0FBQ04sSUFBQSxTQUFBLENBQUEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLFNBQU8sQ0FBQTtBQUNQLElBQUEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxRQUFNLENBQUE7QUFDVixDQUFDLEVBSkksU0FBUyxLQUFULFNBQVMsR0FJYixFQUFBLENBQUEsQ0FBQSxDQUFBO0FBRW9CLE1BQUEsVUFBVyxTQUFRQyxlQUFNLENBQUE7QUFBOUMsSUFBQSxXQUFBLEdBQUE7O1FBQ0ksSUFBZ0IsQ0FBQSxnQkFBQSxHQUFZLEtBQUssQ0FBQztRQUVsQyxJQUFVLENBQUEsVUFBQSxHQUFzRCxTQUFTLENBQUM7UUF3RTFFLElBQWdCLENBQUEsZ0JBQUEsR0FBRyxNQUFLO1lBQ3BCLE1BQU0sRUFBQyxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUE7QUFFdkMsWUFBQSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV2QyxZQUFBLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDQyxxQkFBWSxDQUFDLENBQUE7QUFFckUsWUFBQSxRQUFRLElBQUk7Z0JBQ1IsS0FBSyxTQUFTLENBQUMsTUFBTTtBQUNqQixvQkFBQSxNQUFNLFFBQVEsR0FBWSxXQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDbEUsb0JBQUEsTUFBTSxlQUFlLEdBQUcsSUFBSSx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hGLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDekQsTUFBTTtnQkFDVixLQUFLLFNBQVMsQ0FBQyxPQUFPO0FBQ2xCLG9CQUFBLE1BQU0sYUFBYSxHQUFpQixXQUFtQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDM0gsb0JBQUEsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRixvQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNoRCxNQUFNO2dCQUNWLEtBQUssU0FBUyxDQUFDLE1BQU07QUFDakIsb0JBQUEsTUFBTSxTQUFTLEdBQWlELFdBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3ZGLG9CQUFBLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekUsb0JBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDakUsb0JBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDbkMsb0JBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtBQUNiLGFBQUE7QUFDTCxTQUFDLENBQUE7QUFFRDs7O0FBR0U7QUFDRixRQUFBLElBQUEsQ0FBQSxpQkFBaUIsR0FBRyxDQUFDLGNBQXVCLEVBQUUsYUFBeUIsR0FBQSxJQUFJLEtBQUk7QUFDM0UsWUFBQSxNQUFNLEVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxFQUFDLEdBQUcsSUFBSSxDQUFBO0FBQzVELFlBQUEsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFBO1lBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsWUFBQSxNQUFNLFlBQVksR0FBRyxjQUFjLElBQUksbUJBQW1CLENBQUM7QUFFM0QsWUFBQSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQ0EscUJBQVksQ0FBQyxDQUFBO0FBRXJFLFlBQUEsUUFBUSxJQUFJO2dCQUNSLEtBQUssU0FBUyxDQUFDLE1BQU07QUFDakIsb0JBQUEsTUFBTSxTQUFTLEdBQWlELFdBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ3ZGLG9CQUFBLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2RyxvQkFBQSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNqRSxvQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1YsS0FBSyxTQUFTLENBQUMsT0FBTztvQkFDbEIsTUFBTTtnQkFDVixLQUFLLFNBQVMsQ0FBQyxNQUFNO0FBQ2pCLG9CQUFBLE1BQU0sUUFBUSxHQUFZLFdBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUNsRSxvQkFBQSxNQUFNLEtBQUssR0FBRyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMvRixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9DLE1BQU07QUFHYixhQUFBO0FBRUwsU0FBQyxDQUFBO1FBNENELElBQWEsQ0FBQSxhQUFBLEdBQUcsQ0FBQyxTQUF5QixFQUFFLFdBQXdCLEVBQUUsUUFBOEIsS0FBVTtBQUMxRyxZQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNuQixPQUFPO0FBQ1YsYUFBQTtZQUVELE1BQU0sV0FBVyxHQUF1QyxFQUFFLENBQUM7QUFDM0QsWUFBQSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWxELFlBQUEsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFnQixFQUFFLElBQW1DLEtBQUk7QUFDM0UsZ0JBQUEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtvQkFDMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUE7QUFDL0Msb0JBQUEsSUFBSSxJQUFJLEVBQUU7O3dCQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFDakcscUJBQUE7QUFDSixpQkFBQTtBQUFNLHFCQUFBLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDakMsb0JBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsaUJBQUE7QUFBTSxxQkFBQTtvQkFDSCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7b0JBQ3hCLElBQUksTUFBTSxZQUFZQyxlQUFVLEVBQUU7QUFDOUIsd0JBQUEsTUFBTSxLQUFLLEdBQUksSUFBdUIsQ0FBQyxLQUFLLENBQUM7QUFDN0Msd0JBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRUMscUJBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2hFLHFCQUFBO0FBQU0seUJBQUE7QUFDSCx3QkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQWtCLElBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLHFCQUFBO0FBQ0osaUJBQUE7QUFDTCxhQUFDLENBQUE7WUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFLO0FBQ3hCLGdCQUFBLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFDeEQsZ0JBQUEsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDckUsZ0JBQUEsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbkUsZ0JBQUEsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDNUIsZ0JBQUEsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFBO0FBQzlDLGdCQUFBLE1BQU0sU0FBUyxHQUFpRCxJQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDaEYsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDOUMsZ0JBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDbkMsZ0JBQUEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUNsQyxhQUFDLENBQUE7QUFFRCxZQUFBLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBb0IsS0FBVTs7QUFDakQsZ0JBQUEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtvQkFDdkIsT0FBTztBQUNWLGlCQUFBO2dCQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekMsZ0JBQUEsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTVGLGdCQUFBLElBQUksUUFBc0IsQ0FBQztnQkFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzdELGlCQUFBO0FBQU0scUJBQUE7QUFDSCxvQkFBQSxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2pELHdCQUFBLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUM7d0JBRS9ELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUN4QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzt3QkFFakMsT0FBTztBQUNWLHFCQUFBO0FBQ0osaUJBQUE7Z0JBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBRWpDLGdCQUFBLE1BQU0sT0FBTyxHQUFHLENBQUEsQ0FBQSxFQUFBLEdBQUEsSUFBSSxDQUFDLFVBQVUsTUFBQSxJQUFBLElBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBRSxRQUFRLEtBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUU1RCxnQkFBQSxRQUFRLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUU1QyxnQkFBQSxXQUFXLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdFLGdCQUFBLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLGFBQUMsQ0FBQztBQUVGLFlBQUEsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUNyRCxZQUFBLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDMUUsWUFBQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFNBQUMsQ0FBQTtLQUNKO0lBNVBTLE1BQU0sR0FBQTs7QUFDUixZQUFBLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQSxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBRXhELFlBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFbkQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBR0MsZUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7QUFDMUUsZ0JBQUEsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVztBQUNsQyxhQUFBLENBQUMsQ0FBQztBQUNILFlBQUEsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtZQUU5QyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ1osZ0JBQUEsRUFBRSxFQUFFLHVCQUF1QjtBQUMzQixnQkFBQSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7QUFDeEMsZ0JBQUEsT0FBTyxFQUFFLENBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQSxDQUFBLENBQUcsRUFBQyxDQUFDO0FBQzdDLGFBQUEsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNaLGdCQUFBLEVBQUUsRUFBRSwyQkFBMkI7QUFDL0IsZ0JBQUEsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7QUFDMUMsZ0JBQUEsT0FBTyxFQUFFLENBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUM7QUFDN0MsYUFBQSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ1osZ0JBQUEsRUFBRSxFQUFFLDBCQUEwQjtBQUM5QixnQkFBQSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztBQUM5QyxnQkFBQSxPQUFPLEVBQUUsRUFBRTtBQUNkLGFBQUEsQ0FBQyxDQUFDO1NBQ04sQ0FBQSxDQUFBO0FBQUEsS0FBQTtJQUVELFFBQVEsR0FBQTtBQUNKLFFBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0tBQ2pEO0FBRUQsSUFBQSxNQUFNLENBQUMsSUFBc0MsRUFBQTtRQUN6QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixPQUFPO0FBQ1YsU0FBQTtBQUVELFFBQUEsUUFBUSxJQUFJO0FBQ1IsWUFBQSxLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLE9BQU07QUFDVixZQUFBLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsT0FBTTtBQUNWLFlBQUEsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUM1QixPQUFNO0FBQ2IsU0FBQTtLQUNKO0FBRUQsSUFBQSxPQUFPLENBQUMsV0FBaUIsRUFBQTs7QUFFckIsUUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7UUFFekQsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFDNUIsU0FBQTtBQUFNLGFBQUEsSUFBSSxRQUFRLEVBQUU7WUFDakIsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQzNCLFNBQUE7YUFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2pELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUMzQixTQUFBO0tBRUo7O0lBZ0VELG9CQUFvQixHQUFBOztBQUVoQixRQUFBLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDSCxxQkFBWSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFDLE9BQU07QUFBQyxTQUFBOztRQUV4QixNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sYUFBYSxHQUFJLHFCQUFxQixDQUFDLENBQUMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztRQUUzRSxxQkFBcUIsQ0FBQyxDQUFDLENBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQztRQUUvRixNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7QUFDOUIsUUFBQSxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQW9CLEtBQUk7WUFDckMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUV2QixZQUFBLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDeEIsZ0JBQUEsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDcEUscUJBQXFCLENBQUMsQ0FBQyxDQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO0FBQ3pFLGFBQUE7O1lBR0QsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1QixnQkFBQSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQ2pDLGdCQUFBLElBQUksU0FBUyxFQUFFOztBQUVYLG9CQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDNUMsaUJBQUE7QUFBTSxxQkFBQTs7QUFFSCxvQkFBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixpQkFBQTtBQUNKLGFBQUE7O0FBR0QsWUFBQSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3ZCLGdCQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O0FBRXpGLGdCQUFBLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLHFCQUFxQixDQUFDLENBQUMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztBQUN6RSxhQUFBO0FBQ0wsU0FBQyxDQUFBO0FBQ0QsUUFBQSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0FBa0ZKLENBQUE7QUFFRCxNQUFNLFVBQVcsU0FBUUkseUJBQWdCLENBQUE7SUFHckMsV0FBWSxDQUFBLEdBQVEsRUFBRSxNQUFrQixFQUFBO0FBQ3BDLFFBQUEsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUVsQixRQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0tBQ3ZCO0lBRUQsT0FBTyxHQUFBO0FBQ0gsUUFBQSxJQUFJLEVBQUMsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXpCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSw0QkFBNEIsRUFBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7UUFrQmpFLElBQUlDLGdCQUFPLENBQUMsV0FBVyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQzthQUN6QyxPQUFPLENBQUMscUVBQXFFLENBQUM7YUFDOUUsT0FBTyxDQUFDLEVBQUUsSUFBRztZQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQ3BDLGlCQUFBLFFBQVEsQ0FBQyxDQUFDLEtBQWEsS0FBSTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM5QyxhQUFDLENBQUMsQ0FBQTtBQUNWLFNBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSUEsZ0JBQU8sQ0FBQyxXQUFXLENBQUM7YUFDbkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2FBQzNCLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQztBQUNoRCxhQUFBLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FDVixJQUFJO2FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQzthQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7QUFDbEQsYUFBQSxRQUFRLENBQUMsQ0FBTyxLQUFLLEtBQUksU0FBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxhQUFBO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztBQUNqRCxZQUFBLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRCxDQUFBLENBQUMsQ0FDVCxDQUFDO1FBRU4sSUFBSUEsZ0JBQU8sQ0FBQyxXQUFXLENBQUM7YUFDbkIsT0FBTyxDQUFDLG1DQUFtQyxDQUFDO2FBQzVDLE9BQU8sQ0FDSiw0REFBNEQsQ0FDL0Q7QUFDQSxhQUFBLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSTtZQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO0FBQ3hELGlCQUFBLFFBQVEsQ0FBQyxDQUFPLEtBQUssS0FBSSxTQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxFQUFBLEtBQUEsQ0FBQSxFQUFBLGFBQUE7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztBQUNyRCxnQkFBQSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEQsQ0FBQSxDQUFDLENBQUM7QUFDUCxTQUFDLENBQUMsQ0FBQztLQUNWO0FBQ0o7Ozs7In0=
