var outgoingLinks = document.getElementsByClassName("internalLink");
for (var i = 0; i < outgoingLinks.length; i++) {
    var link = outgoingLinks[i];
    var metaLinkType = document.getElementById("l-" + link.classList[1]);

    if (metaLinkType) {
        var metaLink = document.createElement("a");
        metaLink.setAttribute("href", link.href);
        metaLink.innerText = link.getAttribute("name");

        metaLinkType.nextElementSibling.appendChild(metaLink);
    }
}

var metaLinkTypes = document.getElementsByClassName("metaLinkType");
for (var i = 0; i < metaLinkTypes.length; i++) {
    metaLinkTypes[i].addEventListener("click", function() {
        this.classList.toggle("metaLinkActive");
        var links = this.nextElementSibling;

        if (links.style.maxHeight) {
            links.style.maxHeight = null;
        } else {
            links.style.maxHeight = links.scrollHeight + "px";
        }
    });
}
