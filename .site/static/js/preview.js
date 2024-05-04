var preserveFrame = false;
var defaultSide;

var frameContainer;
var frameContent;

function preview(link) {
    if (!preserveFrame) {
        // Initialize frame
        frameContainer = document.getElementById("preview");
        frameContainer.innerHTML="<iframe src=" + link + " id=previewFrame class=right title=Preview></iframe>"
        frameContainer.style.opacity = "0";

        // Clear default
        defaultSide = document.getElementById("links");
        defaultSide.style.display = "none";

        // Operations on frame
        var frame = document.getElementById("previewFrame");
        frame.addEventListener("load", function() {
            // Get frame document
            var frameDoc = frame.contentDocument || frame.contentWindow.document;

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

        frame.addEventListener("jaxReady", function() {
            console.log("READY");
        });
    }
}

function preserveSide(e) {
    if (!preserveFrame) {
        preserveFrame = true;
        frameContent.style.opacity = "1";
        if (!document.getElementById("content").classList.contains("openLinks")) {
            e.preventDefault();
        }
    }
}

function resetToDefault() {
    if (!preserveFrame) {
        frameContainer.innerHTML="";
        defaultSide.style.display = "inline";
    }
}
