var defaultSide;
var currentSide;
var currentSideContent;
var frameContainer;

function previewSide(link) {
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
            currentSideContent = frameDoc.getElementById("content");
            currentSideContent.classList.add("openLinks");
            currentSideContent.classList.remove("left");
            currentSideContent.style.opacity = "0.6";

            // Make frame visible
            frameContainer.style.opacity = "1";
        });
    }
}

function updateCurrentSide(e) {
    // Ignore link-behaviour in frames
    if (!document.getElementById("content").classList.contains("openLinks")) {
        // Get all frames
        var preview = document.getElementById("previewFrame");

        // Check if hovered frame is active
        if (!preview) {
            // Open link
            window.open(currentSide.src, '_blank').focus();
        } else {
            var active = document.getElementById("activeFrame");
            if (preview != active) { active?.remove(); }

            // Update current side
            currentSide = preview;
            currentSide.setAttribute("id", "activeFrame");
            currentSideContent.style.opacity = "1";
        }

        // Show reset button
        document.getElementById("resetSide").style.display = "inline";

        e.preventDefault();
    }
}

function clearPreviewSide() {
    // Remove preview frame
    document.getElementById("previewFrame")?.remove();

    // Restore current side
    currentSide.style.opacity = "1";
    if (currentSideContent) {
        currentSideContent.style.opacity = "1";
    }
}

function resetSide() {
    document.getElementById("activeFrame")?.remove();
    document.getElementById("resetSide").style.display = "none";
    currentSide = defaultSide;
    currentSide.style.opacity = "1";
}
