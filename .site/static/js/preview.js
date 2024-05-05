var defaultSide;
var currentSide;
var currentSideContent;

var frameContainer;
var resetButton;

function previewSide(link) {
    // Update variables
    resetButton = document.getElementById("resetSide");
    defaultSide = document.getElementById("links");
    frameContainer = document.getElementById("preview");
    if (currentSide == null) { currentSide = defaultSide; }

    if (currentSide.src != link) {
        // Initialize frame
        var frame = newPreviewFrame(link);
        frameContainer.appendChild(frame);

        frame.addEventListener("load", function() {
            fadeOut(currentSide, false);
            fadeOut(resetButton, false);
            fadeIn(frame, 0);
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
            window.open(currentSide.src, "_blank").focus();
        } else {
            var active = document.getElementById("activeFrame");
            if (preview != active) { fadeOut(active, true); }

            // Update side
            currentSide = preview;
            currentSide.setAttribute("id", "activeFrame");
            fadeIn(currentSideContent, 0.6);
        }

        // Show reset button
        resetButton.style.display = "inline";
        fadeIn(resetButton, 0);

        e.preventDefault();
    }
}

function clearPreviewSide() {
    // Remove preview frame
    // console.log(document.getElementById("previewFrame"));
    fadeOut(document.getElementById("previewFrame"), true);

    // Restore current side
    fadeIn(resetButton, 0);
    fadeIn(currentSide, 0);
    fadeIn(currentSideContent, 0);
}

function resetSide() {
    document.getElementById("activeFrame")?.remove();
    resetButton.style.display = "none";
    fadeOut(resetButton, false);
    currentSide = defaultSide;
    // currentSide.style.opacity = "1";
    fadeIn(currentSide, 0);
}

function newPreviewFrame(link) {
    var frame = document.createElement("iframe");
    frame.style.opacity = "0";
    frame.setAttribute("src", link);
    frame.setAttribute("id", "previewFrame");
    frame.setAttribute("class", "right frame");
    frame.setAttribute("title", "Preview");

    frame.addEventListener("load", function() {
        var frameDoc = frame.contentDocument;
        frameDoc.getElementById("side").style.display = "none";
        frameDoc.documentElement.classList.add("noScroll");

        currentSideContent = frameDoc.getElementById("content");
        currentSideContent.classList.add("openLinks");
        currentSideContent.classList.remove("left");
        currentSideContent.style.opacity = "0.6";
    });

    return frame;
}

function fadeOut(element, remove) {
    if (element) {
        var i = 1;
        var timer = setInterval(function () {
            if (i <= 0.2){
                clearInterval(timer);
                if (remove) { element.remove(); }
            }
            if (element) { element.style.opacity = i - 0.2; }
            i -= i * 0.2;
        }, 10);
    }
}

function fadeIn(element, initial) {
    if (element && element.style.opacity < 1) {
        var i = initial + 0.2;
        var timer = setInterval(function () {
            if (i >= 1){ clearInterval(timer); }
            element.style.opacity = i;
            i += i * 0.2;
        }, 10);
    }
}
