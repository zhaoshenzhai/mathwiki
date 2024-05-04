var defaultSide;
var currentSide;

var frameContainer;

function preview(link) {
    // Clear current side
    defaultSide = document.getElementById("links");
    if (currentSide == null) { currentSide = defaultSide; }

    if (currentSide.src != link) {
        // Get frame container
        frameContainer = document.getElementById("preview");

        // Clear before processing
        frameContainer.style.opacity = "0";
        currentSide.style.opacity = "0";

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
}

function updateCurrent(e) {
    // Get all frames
    var preview = document.getElementById("previewFrame");
    var active = document.getElementById("activeFrame");

    // Check if hovered frame is active
    if (preview) {
        if (preview != active) { active?.remove(); }

        // Update current side
        currentSide = preview;
        currentSide.setAttribute("id", "activeFrame");
        currentSide.contentDocument.getElementById("content").style.opacity = "1";
    } else {
        // Open link
        console.log("double");
    }

    // Ignore link-behaviour in frames
    if (!document.getElementById("content").classList.contains("openLinks")) {
        e.preventDefault();
    }
}

function clearPreview() {
    // Remove preview frame
    document.getElementById("previewFrame")?.remove();

    // Restore current side
    currentSide.style.opacity = "1";
    if (currentSide.contentDocument?.getElementById("content")) {
        currentSide.contentDocument.getElementById("content").style.opacity = "1";
    }
}
