var mainContent = document.getElementById("content");
var defaultSide = document.getElementById("metadata");
var resetButton = document.getElementById("resetSide");
var frameContainer = document.getElementById("preview");

var currentSide = defaultSide;
var frameContent;

var previewReady = false;
var clicked = false;

function previewSide(link) {
    if (currentSide.src != link) {
        getPreview()?.remove();
        clicked = false;
        previewReady = false;

        var frame = newPreviewFrame(link);
        frameContainer.appendChild(frame);

        fadeOut(currentSide, false);
        fadeOut(resetButton, false);

        frame.addEventListener("load", function() {
            if (!clicked) { fadeIn(frame); }
            previewReady = true;
        });
    }
}

function updateCurrentSide(e, link) {
    if (!mainContent.classList.contains("openLinks")) {
        clicked = true;
        var preview = getPreview();

        if (!preview && currentSide.src == link) {
            window.open(currentSide.src, "_blank").focus();
        } else if (!preview) {
            frameContainer.appendChild(newPreviewFrame(link));
            updateCurrentSide(e, link);
        } else if (previewReady) {
            getActive()?.remove();
            setActiveFrame(preview);
        } else {
            fadeOut(currentSide, true);
            preview.addEventListener("load", function() {
                setActiveFrame(preview);
            });
        }

        e.preventDefault();
    }
}

function clearPreviewSide() {
    fadeOut(getPreview(), true);
    fadeIn(resetButton);
    fadeIn(currentSide);

    previewReady = false;
    clicked = false;
}

function resetSide() {
    fadeOut(getActive(), true);
    fadeOut(resetButton, false);
    currentSide = defaultSide;
    fadeIn(currentSide);

    previewReady = false;
    clicked = false;
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

    fadeIn(currentSide);
    fadeIn(resetButton);
}

function fadeOut(element, remove) {
    if (element) {
        var i = 1;
        var timer = setInterval(function () {
            if (i <= 0.1){
                clearInterval(timer);
                if (remove && element != defaultSide) { element.remove(); }
            }
            if (element) { element.style.opacity = i - 0.1; }
            i -= i * 0.1;
        }, 10);
    }
}
function fadeIn(element) {
    if (element && element.style.opacity < 1) {
        var i = 0.1;
        var timer = setInterval(function () {
            if (i >= 1){ clearInterval(timer); }
            element.style.opacity = i;
            i += i * 0.1;
        }, 10);
    }
}

function getPreview() {
    return document.getElementById("previewFrame");
}
function getActive() {
    return document.getElementById("activeFrame");
}
