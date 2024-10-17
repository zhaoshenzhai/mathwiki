import { initMetaLinks } from './single/metaLinks.js';
import { initMetaTOC } from './single/metaTOC.js';
import { toggleSide } from './single/side.js';
import { toggleDark } from './darkMode.js';

var root = document.querySelector(':root');

export var contentEl, titleEl, metaDataEl, proofHeaderEls,
           resetSideEl, metaLinksEl, metaTOCEl;
export var headers = {};

var curSideEl;
var headerEls;
var fontSize = 28;
var sideExpanded = true;

document.addEventListener('DOMContentLoaded', (e) => {
    setFontSize(fontSize);

    contentEl = document.getElementById('content');
    metaDataEl = document.getElementById('metadata');
    metaTOCEl = document.getElementById('metaTOC');
    metaLinksEl = document.getElementById('metaLinks');
    resetSideEl = document.getElementById('resetSide');

    headerEls = document.querySelectorAll('h1, h2')
    proofHeaderEls = document.getElementsByClassName('proofHeader');

    curSideEl = metaDataEl;
    expandHeaders(headerEls);
    titleEl = headerEls[0];

    initMetaLinks();
    initMetaTOC();

    if (localStorage['darkMode'] == 'dark') {
        toggleDark(document, true, true, true);
    }

    if (localStorage['sideExpanded'] == 'false') {
        toggleSide(true, 'hideSide');
    }
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

function expandHeaders() {
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
