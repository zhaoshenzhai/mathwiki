var metadata = document.getElementById("metadata");
var links = document.getElementById("links");

var outgoingLinks = document.getElementsByClassName("internalLink");
for (var i = 0; i < outgoingLinks.length; i++) {
    var curLink = outgoingLinks[i];
        var link = document.createElement("a");
        link.innerText = curLink.innerText;
        link.setAttribute("href", curLink.href);

        links.appendChild(link);
}
