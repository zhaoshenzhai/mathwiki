import { initMetaLinks } from './single/metaLinks.js';
import { initMetaTOC } from './single/metaTOC.js';

var root = document.querySelector(':root');
export var contentEl, headersEl,
           metaDataEl, resetSideEl,
           metaLinksEl, metaTOCEl;

var curSideEl;
var fontSize = 23;
var sideExpanded = true;

document.addEventListener('DOMContentLoaded', (e) => {
    metaLinksEl = document.getElementById('metaLinks');
    initMetaLinks();

    headersEl = document.querySelectorAll('h1, h2');
    metaTOCEl = document.getElementById('metaTOC');
    initMetaTOC();

    contentEl = document.getElementById('content');
    metaDataEl = document.getElementById('metadata');
    resetSideEl = document.getElementById('resetSide');
    curSideEl = metaDataEl;

    setFontSize(fontSize);
});

export function getSideExpanded() { return sideExpanded; }
export function setSideExpanded(expanded) { sideExpanded = expanded; }

export function getCurSideEl() { return curSideEl; }
export function setCurSideEl(side) { curSideEl = side; }

export function getFontSize() { return fontSize; }
export function getSCFontSize() { return fontSize - 7; }
export function getTextHeight() { return fontSize + 7; }

export function setFontSize(size) {
    fontSize = size;
    root.style.setProperty('--size', size + 'px');
    root.style.setProperty('--SCSize', getSCFontSize() + 'px');
}
