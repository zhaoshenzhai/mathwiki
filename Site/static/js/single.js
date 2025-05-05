import { initTitle, initHeaders, initTOC } from './single/headers.js';
import { initFormat } from './single/format.js';
import { initEnvs } from './single/envs.js';
import { initRefs } from './single/refs.js';
import { removePX } from './stringUtils.js';

export var contentEl, tocEl, headerEls, titleEl;

const root = document.querySelector(':root');
const rootC = getComputedStyle(root);
var fontSize;

document.addEventListener('DOMContentLoaded', (e) => {
    fontSize = removePX(rootC.getPropertyValue('--fontSize'));
    setFontSize(fontSize);

    contentEl = document.getElementById('content');
    tocEl = document.getElementById('toc');
    headerEls = document.querySelectorAll('h1, h2');
    titleEl = headerEls[0];

    initHeaders();
    initFormat();
    initTitle();
    initTOC();
    initRefs();
});

export function getFontSize() { return fontSize; }
export function setFontSize(size) {
    fontSize = size;
    root.style.setProperty('--SCSize', (size - 7) + 'px');
}
