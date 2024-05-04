var frameContainer;
var preserveFrame = false;
var defaultSide;

function preview(link) {
    frameContainer = document.getElementById("preview");

    frameContainer.innerHTML="<iframe src=" + link + " id=previewFrame class=right scrolling=no title=Preview></iframe>"
    frameContainer.style.display = "none";

    defaultSide = document.getElementById("links");
    defaultSide.style.display = "none";

    var frame = document.getElementById("previewFrame");
    frame.addEventListener("load", function() {
        var frameDoc = frame.contentDocument || frame.contentWindow.document;
        var frameContent = frameDoc.getElementById("content");

        frameContent.classList.remove("left");
        frameDoc.getElementById("links").style.display = "none";

        frameContainer.style.display = "inline";
    });
}

function preserveSide(e) {
    preserveFrame = true;
    e.preventDefault();
}

function resetToDefault() {
    if (!preserveFrame) {
        frameContainer.innerHTML="";
        defaultSide.style.display = "inline";
    }
}
