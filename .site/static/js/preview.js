var frameContainer;
var links;

function preview(link) {
    frameContainer = document.getElementById("preview");
    frameContainer.innerHTML="<iframe src=" + link + " id=previewFrame class=right scrolling=no title=Preview></iframe>"

    links = document.getElementById("links");
    links.style.display = "none";

    var frame = document.getElementById("previewFrame");
    frame.addEventListener("load", function() {
        var frameDoc = frame.contentDocument || frame.contentWindow.document;
        var frameContent = frameDoc.getElementById("content");

        frameContent.classList.remove("left");
        frameDoc.getElementById("links").style.display = "none";
    });
}

function remove() {
    frameContainer.innerHTML="";
    links.style.display = "inline";
}
