import { firstUpper, toSpace } from '../stringUtils.js';
import { metaLinksEl } from '../single.js';

window.expandMetaLinks = expandMetaLinks;
window.collapseMetaLinks = collapseMetaLinks;

var metaLinks = {};

export function initMetaLinks() {
    var outgoingLinks = document.getElementsByClassName('internalLink');
    var metaLinkTracker = [];
    for (var i = 0; i < outgoingLinks.length; i++) {
        var link = outgoingLinks[i];
        var linkType = link.classList[1];

        if (!metaLinkTracker.includes(linkType + link.href)) {
            var metaLinkType = metaLinks[linkType];
            if (!metaLinkType) { metaLinkType = newMetaLinkType(linkType); }

            metaLinkTracker.push(linkType + link.href);
            metaLinkType.nextElementSibling.appendChild(newMetaLink(link));
        }
    }

    for(var [key, val] of Object.entries(metaLinks)) {
        val.addEventListener('click', function() { toggleMetaLink(this); });
    }

    [...metaLinksEl.children]
        .sort((a, b) => typePriority(a) > typePriority(b) ? 1 : -1)
        .forEach(node => metaLinksEl.appendChild(node));
}

export function expandMetaLinks() {
    for(var [key, val] of Object.entries(metaLinks)) {
        expandMetaLink(val);
    }
}
function collapseMetaLinks() {
    for(var [key, val] of Object.entries(metaLinks)) {
        collapseMetaLink(val);
    }
}

function toggleMetaLink(metaLink) {
    var links = metaLink.nextElementSibling;
    var icon = metaLink.firstChild;

    if (links.style.maxHeight) {
        links.style.maxHeight = null;
        icon.style.rotate = '-90deg';
    }
    else {
        links.style.maxHeight = links.scrollHeight + 'px';
        icon.style.rotate = '0deg';
    }
}
function expandMetaLink(metaLink) {
    var links = metaLink.nextElementSibling;
    var icon = metaLink.firstChild;
    links.style.maxHeight = links.scrollHeight + 'px';
    icon.style.rotate = '0deg';
}
function collapseMetaLink(metaLink) {
    var links = metaLink.nextElementSibling;
    var icon = metaLink.firstChild;
    links.style.maxHeight = null;
    icon.style.rotate = '-90deg';
}

function newMetaLinkType(linkType) {
    var newLinkButton = document.createElement('button');
    var newLinkList = document.createElement('ul');
    var newLinkDiv = document.createElement('div');

    newLinkButton.innerText = ' ' + toSpace(firstUpper(linkType));
    newLinkButton.classList.add('metaLinkButton');
    newLinkButton.classList.add('listenDark');
    newLinkList.classList.add('metaLinkList');

    var icon = document.createElement('img');
    icon.setAttribute('src', '../css/fa/arrow-head.svg');
    icon.classList.add('icon');
    newLinkButton.prepend(icon);

    metaLinks[linkType] = newLinkButton;
    metaLinksEl.appendChild(newLinkDiv);

    newLinkDiv.setAttribute('id', 'l-' + linkType);
    newLinkDiv.insertBefore(newLinkButton, newLinkList.nextSibling);
    newLinkDiv.appendChild(newLinkList);

    return metaLinks[linkType];
}

function newMetaLink(link) {
    var metaLinkContainer = document.createElement('li');
    var metaLink = document.createElement('a');

    metaLinkContainer.appendChild(metaLink);
    metaLink.setAttribute('href', link.href.replace(/.md/, ''));
    metaLink.onclick = function (e) {
        if (metaLink.classList.contains('ghostLink')) {
            e.preventDefault();
        }
    };

    var title = link.getAttribute('title');
    if (!title) {
        title = link.href
            .replace(/.*mathwiki\//, '').replace(/.md.*/, '');
    }

    var mathLink = link.getAttribute('mathLink');
    if (mathLink) { title = mathLink; }

    var secDisplay = link.getAttribute('secDisplay');
    if (secDisplay) { title += (' | ' + secDisplay); }

    metaLink.innerText = title;

    if (link.classList.contains('ghostLink')) {
        metaLink.classList.add('ghostLink');
    }

    return metaLinkContainer;
}

function typePriority(linkEl) {
    const allLinks = [
        'types',
        'constructions',
        'structures',
        'properties',
        'examples',
        'generalizations',
        'sufficiencies',
        'proved_by',
        'corollaries',
        'justifications',
        'references'
    ];

    return allLinks.indexOf(linkEl.id.substring(2));
}
