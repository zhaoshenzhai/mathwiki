var metaLinkTypes = document.getElementById("metaLinks");
var metaLinkTypesDict = {};

window.expandMetaLinks = expandMetaLinks;
window.collapseMetaLinks = collapseMetaLinks;

// Copy links to metadata
document.addEventListener("DOMContentLoaded", (e) => {
    var outgoingLinks = document.getElementsByClassName("internalLink");
    if (outgoingLinks.length == 0) {
        var links = document.getElementById("links")
        if (links) { links.innerHTML = "Links: None" }
    } else {
        var metaLinkTracker = [];
        for (var i = 0; i < outgoingLinks.length; i++) {
            var link = outgoingLinks[i];
            var linkType = link.classList[1];

            if (!metaLinkTracker.includes(linkType + link.href)) {
                var metaLinkType = metaLinkTypesDict[linkType];
                if (!metaLinkType) { metaLinkType = newMetaLinkType(linkType); }

                metaLinkTracker.push(linkType + link.href);
                metaLinkType.nextElementSibling.appendChild(newMetaLink(link));
            }
        }

        for(var [key, val] of Object.entries(metaLinkTypesDict)) {
            val.addEventListener("click", function() { toggleMetaLink(this); });
        }
    }
});

export function expandMetaLinks() {
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
    var icon = metaLink.firstChild;

    if (links.style.maxHeight) {
        links.style.maxHeight = null;
        icon.style.rotate = "-90deg";
    }
    else {
        links.style.maxHeight = links.scrollHeight + "px";
        icon.style.rotate = "0deg";
    }
}
function expandMetaLink(metaLink) {
    metaLink.classList.add("metaLinkActive");
    var links = metaLink.nextElementSibling;
    var icon = metaLink.firstChild;
    links.style.maxHeight = links.scrollHeight + "px";
    icon.style.rotate = "0deg";
}
function collapseMetaLink(metaLink) {
    metaLink.classList.remove("metaLinkActive");
    var links = metaLink.nextElementSibling;
    var icon = metaLink.firstChild;
    links.style.maxHeight = null;
    icon.style.rotate = "-90deg";
}

function newMetaLinkType(linkType) {
    var newLinkType = document.createElement("button");
    var newLinkList = document.createElement("ul");

    newLinkType.setAttribute("id", "l-" + linkType);
    newLinkType.innerText = " " + firstUpper(linkType);
    newLinkType.classList.add("metaLinkType");
    newLinkList.classList.add("metaLinkList");

    var icon = document.createElement("img");
    icon.setAttribute("src", "../css/fa/arrow-head.svg");
    icon.classList.add("icon");
    newLinkType.prepend(icon);

    metaLinkTypesDict[linkType] = newLinkType;
    metaLinkTypes.insertBefore(newLinkType, newLinkList.nextSibling);
    metaLinkTypes.appendChild(newLinkList);   

    return metaLinkTypesDict[linkType];
}
function newMetaLink(link) {
    var metaLink = document.createElement("a");
    metaLink.setAttribute("href", link.href);

    var mathLink = link.getAttribute("mathLink");
    if (mathLink) {
        metaLink.innerText = link.getAttribute("mathLink");
    } else {
        metaLink.innerText = link.getAttribute("title");
    }

    var metaLinkContainer = document.createElement("li");
    metaLinkContainer.appendChild(metaLink);

    return metaLinkContainer;
}

function firstUpper(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
