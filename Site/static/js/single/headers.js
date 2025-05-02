import { getFontSize, contentEl, tocEl,
         headerEls, titleEl } from '../single.js';
import { toSmallCaps, textOfNode,
         trimHeaders, removePX } from '../stringUtils.js';

window.toggleTOC = toggleTOC;

var root = getComputedStyle(document.querySelector(':root'));
var headers = {};
var tocHidden = false;

export function initHeaders() {
    var h1Num = 0;
    var index = 1;
    while (index < headerEls.length) {
        var h1El, h2Index;
        var h2List = [];

        if (headerEls[index].tagName == 'H1') {
            h1El = headerEls[index];
            h1Num++;
            index++;
            h2Index = index;
        } else {
            h1El = null;
            h2Index = 1;
        }

        while (headerEls[h2Index] && headerEls[h2Index].tagName == 'H2') {
            h2List.push(headerEls[h2Index]);
            h2Index++;
            index++;
        }

        headers[h1Num] = [h1El, h2List];
    }
}

export function initTitle() {
    var newTitle = document.createElement('h1');
    var newTitleSize = titleEl.getAttribute('titleSize');
    if (!newTitleSize) { newTitleSize = 20; }

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

export function initTOC() {
    styleHeaders();
    generateTOC();
    formatHeaders();
}

export function styleHeaders() {
    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) { styleH1(h1El, h1Index); }

        for (var h2Counter = 0; h2Counter < h2List.length; h2Counter++) {
            styleH2(h2List[h2Counter], h1Index, h2Counter + 1);
        }
    }
}

function styleH1(el, counter) {
    el.setAttribute('innerText', el.innerText);
    el.classList.add('center');
    el.classList.add('h1Title');

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

    var num = document.createElement('span');
    num.innerText = counter + '. ';
    el.prepend(num);
}

function styleH2(el, parentCounter, counter) {
    el.style.fontSize = getFontSize() + "px";
    el.innerHTML += '.';

    var num = document.createElement('span');
    num.innerText = parentCounter + '.' + counter + '. ';
    num.style.fontWeight = 'normal';
    num.style.position = 'relative';
    el.prepend(num);
}

function generateTOC() {
    var h1TOC_Headers = document.createElement('ol');
    h1TOC_Headers.classList.add('TOCListH1');
    tocEl.appendChild(h1TOC_Headers);

    if (Object.keys(headers).length == 0) {
        document.getElementById('toc').remove();
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        var h1TOC_ElPrefix = h1Index + '. ';
        var h1TOC_ElText = h1El ? h1El.getAttribute('innerText') : 'Introduction';
        var h1TOC_ElID = h1El ? h1El.getAttribute('id') : 'Introduction';
        var h1TOC_El = generateTOCHeader(h1TOC_Headers, h1Index + '. ', h1TOC_ElText, h1TOC_ElID);

        var h2TOC_Headers = document.createElement('ol');
        h2TOC_Headers.classList.add('TOCListH2');
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
    TOC_Button.classList.add('TOCButton');
    TOC_Button.classList.add('listenDark');
    TOC_Button.innerText = text;
    TOC_Button.onclick = function () {
        document.getElementById(id).scrollIntoView()
    };

    TOC_El.appendChild(TOC_Num);
    TOC_El.appendChild(TOC_Button);

    return TOC_El;
}

function formatHeaders() {
    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            var header = h2List[h2Index];
            var space = document.createElement('div');
            space.classList.add('space');
            header.parentNode.insertBefore(space, header);
        }
    }
}

export function toggleTOC() {
    var contentWidth = root.getPropertyValue('--contentWidth');
    var initialLeft = (window.innerWidth - removePX(contentWidth))/2;

    if (tocHidden) {
        tocEl.style.left = '0px';
        tocEl.style.opacity = '0';
        tocEl.style.pointerEvents = 'none';
        contentEl.style.left = initialLeft + 'px';
    } else {
        tocEl.style.left = '50px';
        tocEl.style.opacity = '1';
        tocEl.style.pointerEvents = 'all';
        contentEl.style.left = (initialLeft + 100) + 'px';
    }

    tocHidden = !tocHidden;
}
