import { toSmallCaps, textOfNode, trimHeaders } from '../stringUtils.js';
import { getFontSize, getSCFontSize,
         headers, metaTOCEl, titleEl } from '../single.js';

window.showMetaTOC = showMetaTOC;
window.hideMetaTOC = hideMetaTOC;

export function initMetaTOC() {
    styleTitle();
    styleHeaders(false);
    generateTOC();
    formatHeaders();
}

function styleTitle() {
    var newTitle = document.createElement('h1');
    var newTitleSize = titleEl.getAttribute('titleSize');
    if (!newTitleSize) { newTitleSize = 25; }

    var newTitleSC = toSmallCaps(
        titleEl.innerText,
        newTitleSize,
        Number(newTitleSize) + 5
    );

    newTitle.appendChild(newTitleSC);
    newTitle.setAttribute('id', 'title');
    newTitle.classList.add('center');

    if (headers[0]) { newTitle.classList.add('title_spacer'); }
    titleEl.replaceWith(newTitle);
}

export function styleHeaders(resize) {
    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (!resize && h1El) { styleH1(h1El, h1Index); }

        for (var h2Counter = 0; h2Counter < h2List.length; h2Counter++) {
            styleH2(h2List[h2Counter], h1Index, h2Counter + 1, resize);
        }
    }
}

function styleH1(el, counter) {
    el.setAttribute('innerText', el.innerText);
    el.classList.add('center');
    el.classList.add('h1Title');
    el.classList.add('noSelect');
    el.classList.add('collapsibleHeader');

    for (var i = 0; i < el.childNodes.length; i++) {
        if (!el.childNodes[i].innerText) {
            var text = textOfNode(el.childNodes[i]);
            var textSC = toSmallCaps(text);

            el.childNodes[i].replaceWith(textSC);
        } else {
            var text = el.childNodes[i].innerText;
            var textSC = toSmallCaps(text);

            el.childNodes[i].innerHTML = textSC.innerHTML;
        }
    }

    var h1Button = document.createElement('span');
    h1Button.innerHTML = el.innerHTML;
    h1Button.classList.add('collapsibleHeaderButton');
    h1Button.classList.add('sectionHeader');
    el.innerHTML = '';
    el.appendChild(h1Button);

    var num = document.createElement('span');
    num.innerText = counter + '. ';
    el.prepend(num);
}

function styleH2(el, parentCounter, counter, resize) {
    el.style.fontSize = getFontSize() + "px";

    if (!resize) {
        el.innerHTML += '.';
        el.classList.add('noSelect');
        el.classList.add('collapsibleHeader');

        var h2Button = document.createElement('span');
        h2Button.innerHTML = el.innerHTML;
        h2Button.classList.add('collapsibleHeaderButton');
        h2Button.classList.add('sectionHeader');
        el.innerHTML = '';
        el.appendChild(h2Button);

        var num = document.createElement('span');
        num.innerText = parentCounter + '.' + counter + '. ';
        num.style.fontWeight = 'normal';
        num.style.position = 'relative';
        num.classList.add('noSelect');
        el.prepend(num);
    }
}

function generateTOC() {
    var h1TOC_Headers = document.createElement('ol');
    h1TOC_Headers.classList.add('metaTOCListH1');
    metaTOCEl.appendChild(h1TOC_Headers);

    if (Object.keys(headers).length == 0) {
        document.getElementById('metaTOC').remove();
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        var h1TOC_ElPrefix = h1Index + '. ';
        var h1TOC_ElText = h1El ? h1El.getAttribute('innerText') : 'Introduction';
        var h1TOC_ElID = h1El ? h1El.getAttribute('id') : 'Introduction';
        var h1TOC_El = generateTOCHeader(h1TOC_Headers, h1Index + '. ', h1TOC_ElText, h1TOC_ElID);

        var h2TOC_Headers = document.createElement('ol');
        h2TOC_Headers.classList.add('metaTOCListH2');
        h1TOC_El.appendChild(h2TOC_Headers);

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            var h2TOC_ElPrefix = h1Index + '.' + (h2Index + 1) + '. ';
            var h2TOC_ElText = trimHeaders(h2List[h2Index].innerText);
            var h2TOC_ElID = h2List[h2Index].getAttribute('id');
            generateTOCHeader(h2TOC_Headers, h2TOC_ElPrefix, h2TOC_ElText, h2TOC_ElID);
        }
    }
}

function generateTOCHeader(headers, prefix, text, id) {
    var TOC_El = document.createElement('div');
    headers.appendChild(TOC_El);

    var TOC_Num = document.createElement('span');
    TOC_Num.innerText = prefix;
    TOC_Num.classList.add('noSelect');

    var TOC_Button = document.createElement('button');
    TOC_Button.onclick = function () { goTo(id) };
    TOC_Button.classList.add('metaTOCButton');
    TOC_Button.classList.add('listenDark');
    TOC_Button.innerText = text;

    TOC_El.appendChild(TOC_Num);
    TOC_El.appendChild(TOC_Button);

    return TOC_El;
}

function formatHeaders() {
    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) { formatHeader(h1El, 'H1') }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            formatHeader(h2List[h2Index], 'H2');
        }
    }
}

function formatHeader(header, type) {
    var start = header.nextElementSibling;
    var wrapper = document.createElement('span');
    wrapper.classList.add('collapsibleContent');
    header.after(wrapper);

    formatHeaderHelper(header, wrapper, start, type);

    var container = document.createElement('div');
    header.parentNode.insertBefore(container, header.nextSibling);
    container.appendChild(header);
    container.classList.add('collapsibleContainer');

    if (type == 'H2') {
        var hintText = document.createElement('span');
        hintText.classList.add('collapsibleHintText');
        hintText.classList.add('noSelect');
        hintText.innerHTML = '<i>Click to expand...</i>';

        container.appendChild(hintText);
    } else if (type == 'H1') {
        var contentMaskBot = document.createElement('span');
        contentMaskBot.classList.add('collapsibleMask');
        contentMaskBot.classList.add('collapsibleMaskBot');
        wrapper.insertBefore(contentMaskBot, wrapper.childNodes[0]);

        var contentMaskTop = document.createElement('span');
        contentMaskTop.classList.add('collapsibleMask');
        contentMaskTop.classList.add('collapsibleMaskTop');
        wrapper.insertBefore(contentMaskTop, wrapper.childNodes[0]);
    }

    container.appendChild(wrapper);

    if (type == 'H2' && !header.classList.contains('noSpace')) {
        var h2BotSpace = document.createElement('div');
        h2BotSpace.classList.add('space');
        container.parentElement.insertBefore(h2BotSpace, container);
    }
}

function formatHeaderHelper(header, wrapper, curEl, type) {
    if (!curEl) { return; }
    if ((type == 'H1' && curEl.tagName == 'H1') ||
        (type == 'H2' && (curEl.tagName == 'H1' || curEl.tagName == 'H2')) ||
        (curEl.classList.contains('bottomSpace')))
    { return wrapper; }

    var nextEl = curEl.nextElementSibling;
    wrapper.appendChild(curEl);
    return formatHeaderHelper(header, wrapper, nextEl, type);
}

export function showMetaTOC() {
    metaTOCEl.style.maxHeight = metaTOCEl.scrollHeight + 'px';
}
function hideMetaTOC() {
    metaTOCEl.style.maxHeight = null;
}

function goTo(anchor) {
    var loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + anchor;
    return false;
}
