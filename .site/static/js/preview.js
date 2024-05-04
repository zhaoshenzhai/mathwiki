var defaultSide;
var currentSide;

var frameContainer;

function preview(link) {
    // Clear current side
    defaultSide = document.getElementById("links");
    if (currentSide == null) { currentSide = defaultSide; }
    currentSide.style.opacity = "0";

    // Get frame container
    frameContainer = document.getElementById("preview");
    frameContainer.style.opacity = "0";

    // Initialize frame
    var iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", link);
    iFrame.setAttribute("id", "previewFrame");
    iFrame.setAttribute("class", "right frame");
    iFrame.setAttribute("title", "Preview");
    frameContainer.appendChild(iFrame);

    // Operations on frame
    iFrame.addEventListener("load", function() {
        // Get frame document
        var frameDoc = iFrame.contentDocument;

        // Set to preview mode
        frameDoc.getElementById("side").style.display = "none";
        frameDoc.documentElement.classList.add("noScroll");
        frameContent = frameDoc.getElementById("content");
        frameContent.classList.add("openLinks");
        frameContent.classList.remove("left");
        frameContent.style.opacity = "0.6";

        // Make frame visible
        frameContainer.style.opacity = "1";
    });
}

function updateCurrent(e) {
    currentSide = document.getElementById("previewFrame");
    currentSide.removeAttribute("id");
    currentSide.contentDocument.getElementById("content").style.opacity = "1";
    if (!document.getElementById("content").classList.contains("openLinks")) {
        e.preventDefault();
    }
}

function clearPreview() {
    document.getElementById("previewFrame")?.remove();

    currentSide.style.opacity = "1";
    if (currentSide != defaultSide) {
        currentSide.contentDocument.getElementById("content").style.opacity = "1";
    }
}
