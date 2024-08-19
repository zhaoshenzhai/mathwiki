import { initMetaLinks } from "./single/metaLinks.js";
import { initMetaTOC } from "./single/metaTOC.js";

const root = getComputedStyle(document.querySelector(':root'));

export var fontSize = Number(
    root.getPropertyValue('--bigFontSize').replace('px', ''));
export var scFontSize = fontSize - 7;
export var textHeight = fontSize + 7;

export var metaLinksEl;
export var headersEl, metaTOCEl;

export var contentEl, metaDataEl;

document.addEventListener("DOMContentLoaded", (e) => {
    metaLinksEl = document.getElementById("metaLinks");
    initMetaLinks();

    headersEl = document.querySelectorAll("h1, h2");
    metaTOCEl = document.getElementById("metaTOC");
    initMetaTOC();

    contentEl = document.getElementById("content");
    metaDataEl = document.getElementById("metadata");
});
