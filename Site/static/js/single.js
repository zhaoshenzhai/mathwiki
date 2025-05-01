import { initTitle, initHeaders, initTOC } from './single/headers.js';
import { toggleDark } from './darkMode.js';
import { removePX } from './stringUtils.js';

export var contentEl, tocEl;

var root = document.querySelector(':root');
var fontSize;

document.addEventListener('DOMContentLoaded', (e) => {
    fontSize = removePX(getComputedStyle(root)
        .getPropertyValue('--fontSize'));
    setFontSize(fontSize);

    contentEl = document.getElementById('content');
    tocEl = document.getElementById('toc');

    var headerEls = document.querySelectorAll('h1, h2')
    var titleEl = headerEls[0];

    initHeaders(headerEls);
    initTitle(titleEl);
    initTOC();
});

export function getFontSize() { return fontSize; }
export function setFontSize(size) {
    fontSize = size;
    root.style.setProperty('--SCSize', (size - 7) + 'px');
}
