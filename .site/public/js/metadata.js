var metadata = document.getElementById("metadata");

var outgoingLinks = document.getElementsByClassName("internalLink");
for (var i = 0; i < outgoingLinks.length; i++) {
    if (outgoingLinks[i].classList.contains("definition")) {
        
    var link = document.createElement("a");
    link.innerText = outgoingLinks[i].innerText;
    link.setAttribute("href", outgoingLinks[i].href);
    link.setAttribute("target", "_blank");

    metadata.appendChild(link);
    }
}
