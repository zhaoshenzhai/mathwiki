var frameContainer;

function preview(link) {
    frameContainer = document.getElementById("preview");
    frameContainer.innerHTML="<iframe src=" + link + " id=previewFrame scrolling=no title=Preview></iframe>"

    var frame = document.getElementById("previewFrame");
    frame.addEventListener("load", function() {
        var frameDoc = frame.contentDocument || frame.contentWindow.document;
        var frameContent = frameDoc.getElementById("content");
        frameContent.classList.remove("left");
    });
}

function remove(link) {
    // frameContainer.innerHTML="";
}
