import { initTitle, initHeaders, initTOC } from './single/headers.js';
import { toggleDark } from './darkMode.js';

export var contentEl, tocEl;

var root = document.querySelector(':root');
var fontSize;

document.addEventListener('DOMContentLoaded', (e) => {
    fontSize = getComputedStyle(root).getPropertyValue('--fontSize');
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
export function getSCFontSize() { return fontSize - 7; }
export function getTextHeight() { return fontSize + 7; }

export function setFontSize(size) {
    fontSize = size;
    root.style.setProperty('--size', size + 'px');
    root.style.setProperty('--SCSize', getSCFontSize() + 'px');
}
