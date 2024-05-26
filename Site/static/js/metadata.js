var metaLinkTypes;
var metaLinkTypesDict = {};

window.expandMetaLinks = expandMetaLinks;
window.collapseMetaLinks = collapseMetaLinks;

const metaLinkReady = new Event("metaLinkReady");

// Copy links to metadata
document.addEventListener("DOMContentLoaded", (e) => {
    metaLinkTypes = document.getElementById("metaLinks");
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

        [...metaLinkTypes.children]
            .sort((a, b) => typePriority(a) > typePriority(b) ? 1 : -1)
            .forEach(node => metaLinkTypes.appendChild(node));
    }

    document.dispatchEvent(metaLinkReady);
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
    var newLinkButton = document.createElement("button");
    var newLinkList = document.createElement("ul");
    var newLinkDiv = document.createElement("div");

    newLinkButton.innerText = " " + firstUpper(linkType);
    newLinkButton.classList.add("metaLinkButton");
    newLinkButton.classList.add("listenDark");
    newLinkList.classList.add("metaLinkList");

    var icon = document.createElement("img");
    icon.setAttribute("src", "../css/fa/arrow-head.svg");
    icon.classList.add("icon");
    newLinkButton.prepend(icon);

    metaLinkTypesDict[linkType] = newLinkButton;
    metaLinkTypes.appendChild(newLinkDiv);

    newLinkDiv.setAttribute("id", "l-" + linkType);
    newLinkDiv.insertBefore(newLinkButton, newLinkList.nextSibling);
    newLinkDiv.appendChild(newLinkList);

    return metaLinkTypesDict[linkType];
}

function newMetaLink(link) {
    var metaLinkContainer = document.createElement("li");
    var metaLink = document.createElement("a");

    metaLinkContainer.appendChild(metaLink);
    metaLink.setAttribute("href", link.href);
    metaLink.onclick = function (e) {
        if (metaLink.classList.contains("ghostLink")) {
            e.preventDefault();
        }
    };

    var mathLink = link.getAttribute("mathLink");
    var title = link.getAttribute("title");
    if (!title) { title = link.href.replace(/.*\//, ""); }

    if (mathLink) {
        metaLink.innerText = link.getAttribute("mathLink");
    } else {
        metaLink.innerText = title;
    }

    if (link.classList.contains("ghostLink")) {
        metaLink.classList.add("ghostLink");
    }

    return metaLinkContainer;
}

function typePriority(linkEl) {
    const allLinks = [
        "types",
        "constructions",
        "structures",
        "properties",
        "examples",
        "generalizations",
        "justifications",
        "references"
    ];

    return allLinks.indexOf(linkEl.id.substring(2));
}

function firstUpper(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
