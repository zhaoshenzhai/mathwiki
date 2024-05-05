var mainContent = document.getElementById("content");
var defaultSide = document.getElementById("links");
var frameContainer = document.getElementById("preview");
var resetButton = document.getElementById("resetSide");

var currentSide = defaultSide;
var frameContent;

var previewReady = false;

function previewSide(link) {
    if (currentSide.src != link) {
        previewReady = false;

        var frame = newPreviewFrame(link);
        frameContainer.appendChild(frame);

        frame.addEventListener("load", function() {
            fadeOut(currentSide, false);
            fadeOut(resetButton, false);
            fadeIn(frame);

            previewReady = true;
        });
    }
}

function updateCurrentSide(e) {
    if (!mainContent.classList.contains("openLinks") && previewReady) {
        var preview = getPreview();

        if (!preview) {
            window.open(currentSide.src, "_blank").focus();
        } else {
            getActive()?.remove();
            setActiveFrame(preview);
        }

        e.preventDefault();
    } else if (!previewReady) { e.preventDefault(); }
}

function clearPreviewSide() {
    fadeOut(getPreview(), true);
    fadeIn(resetButton);
    fadeIn(currentSide);
}

function resetSide() {
    getActive()?.remove();
    resetButton.style.display = "none";
    currentSide = defaultSide;
    fadeIn(currentSide);
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

        frameContent = frameDoc.getElementById("content");
        frameContent.classList.add("openLinks");
        frameContent.classList.remove("left");
        frameContent.style.opacity = "0.6";
    });

    return frame;
}

function setActiveFrame(newFrame) {
    frameContent.style.opacity = "1";
    currentSide = newFrame;
    currentSide.setAttribute("id", "activeFrame");
    resetButton.style.display = "inline";
    resetButton.style.opacity = "1";
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
function fadeIn(element) {
    if (element && element.style.opacity < 1) {
        var i = 0.2;
        var timer = setInterval(function () {
            if (i >= 1){ clearInterval(timer); }
            element.style.opacity = i;
            i += i * 0.2;
        }, 10);
    }
}

function getPreview() {
    return document.getElementById("previewFrame");
}
function getActive() {
    return document.getElementById("activeFrame");
}
