var metadata = document.getElementById("metadata");

var outgoingLinks = document.getElementsByClassName("internalLink");
for (var i = 0; i < outgoingLinks.length; i++) {
    var curLink = outgoingLinks[i];
    if (curLink.classList.contains("definition")) {
        var link = document.createElement("a");
        link.innerText = curLink.innerText;
        link.setAttribute("href", curLink.href);
        link.setAttribute("target", "_blank");

        metadata.appendChild(link);
    }
}
