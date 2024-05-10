var outgoingLinks = document.getElementsByClassName("internalLink");

var metaLinkTypes = document.getElementById("metaLinks");
var metaLinkTypesDict = {};

// Copy links to metadata
for (var i = 0; i < outgoingLinks.length; i++) {
    var link = outgoingLinks[i];
    var linkType = link.classList[1];
    var metaLinkType = metaLinkTypesDict[linkType];

    if (!metaLinkType) { newMetaLinkType(linkType); }
    metaLinkType.nextElementSibling.appendChild(newMetaLink(link));
}

// Toggle metaLinks listener
for(var [key, val] of Object.entries(metaLinkTypesDict)) {
    val.addEventListener("click", function() { toggleMetaLink(this); });
} expandMetaLinks();
function expandMetaLinks() {
    for(var [key, val] of Object.entries(metaLinkTypesDict)) {
        expandMetaLink(val);
    }
}
function collapseMetaLinks() {
    for(var [key, val] of Object.entries(metaLinkTypesDict)) {
        collapseMetaLink(val);
    }
}

function toggleMetaLink(metaLink) {
    metaLink.classList.toggle("metaLinkActive");
    var links = metaLink.nextElementSibling;

    if (links.style.maxHeight) { links.style.maxHeight = null; }
    else { links.style.maxHeight = links.scrollHeight + "px"; }
}
function expandMetaLink(metaLink) {
    metaLink.classList.add("metaLinkActive");
    var links = metaLink.nextElementSibling;
    links.style.maxHeight = links.scrollHeight + "px";
}
function collapseMetaLink(metaLink) {
    metaLink.classList.remove("metaLinkActive");
    var links = metaLink.nextElementSibling;
    links.style.maxHeight = null;
}

function newMetaLinkType(linkType) {
    var newLinkType = document.createElement("button");
    var newLinkList = document.createElement("ul");

    newLinkType.setAttribute("id", "l-" + linkType);
    newLinkType.innerText = firstUpper(linkType);
    newLinkType.classList.add("metaLinkType");
    newLinkList.classList.add("metaLinkList");

    metaLinkTypesDict[linkType] = newLinkType;
    metaLinkTypes.insertBefore(newLinkType, newLinkList.nextSibling);
    metaLinkTypes.appendChild(newLinkList);   

    metaLinkType = metaLinkTypesDict[linkType];
}
function newMetaLink(link) {
    var metaLink = document.createElement("a");
    metaLink.setAttribute("href", link.href);
    metaLink.innerText = link.getAttribute("name");

    var metaLinkContainer = document.createElement("li");
    metaLinkContainer.appendChild(metaLink);

    return metaLinkContainer;
}

function firstUpper(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
