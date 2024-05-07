var mainContent = document.getElementById("content");
var defaultSide = document.getElementById("metadata");
var resetButton = document.getElementById("resetSide");
var frameContainer = document.getElementById("preview");

var currentSide = defaultSide;
var frameContent;

var previewReady = false;
var clicked = false;
var cleared = false;

const fadeInterrupt = new Event("fadeInterrupt");

function previewSide(link) {
    if (currentSide.src != link) {
        getPreview()?.remove();
        previewReady = false;
        clicked = false;
        cleared = false;

        var frame = newPreviewFrame(link);
        frameContainer.appendChild(frame);

        frame.addEventListener("load", function() {
            if (!clicked && !cleared) {
                triggerFadeInterrupt(frame);
                fadeOut(currentSide, false);
                fadeOut(resetButton, false);
                fadeIn(frame);
            }

            previewReady = true;
        });
    }
}

function updateCurrentSide(e, link) {
    if (!mainContent.classList.contains("openLinks")) {
        clicked = true;
        var preview = getPreview();

        if (!preview && currentSide.src == link) {
            window.open(currentSide.src, "_self");
        } else if (!preview) {
            previewSide(link);
            updateCurrentSide(e, link);
        } else if (previewReady) {
            getActive()?.remove();
            setActiveFrame(preview, false);
        } else {
            fadeOut(currentSide, true);
            preview.addEventListener("load", function() {
                setActiveFrame(preview, true);
            });
        }

        e.preventDefault();
    }
}

function clearPreviewSide() {
    var preview = getPreview();
    cleared = true;

    if (preview && previewReady) {
        triggerFadeInterrupt(preview);

        fadeIn(currentSide);
        fadeIn(resetButton);
        fadeOut(preview, true);
    }
}

function resetSide() {
    fadeOut(getActive(), true);
    fadeOut(resetButton, false);
    currentSide = defaultSide;
    fadeIn(currentSide);

    previewReady = false;
    clicked = false;
    cleared = false;
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

function setActiveFrame(newFrame, makeVisible) {
    currentSide = newFrame;
    currentSide.setAttribute("id", "activeFrame");
    frameContent.style.opacity = "1";
    resetButton.style.display = "inline";

    if (makeVisible) { fadeIn(currentSide); }
    fadeIn(resetButton);
}

function fadeOut(element, remove) {
    if (element) {
        var i = 1;
        var timer = setInterval(function () {
            if (i <= 0.1){ interruptFade(timer, element, remove); }
            if (element) { element.style.opacity = i - 0.1; }
            i -= i * 0.1;
        }, 10);

        element.addEventListener("fadeInterrupt", function() {
            interruptFade(timer, element, remove);
        });
    }
}
function fadeIn(element) {
    if (element) {
        var i = 0.1;
        var timer = setInterval(function () {
            if (i >= 1){ interruptFade(timer, element, false); }
            element.style.opacity = i;
            i += i * 0.1;
        }, 10);

        element.addEventListener("fadeInterrupt", function() {
            interruptFade(timer, element, false);
        });
    }
}

function triggerFadeInterrupt(previewElem) {
    currentSide.dispatchEvent(fadeInterrupt);
    resetButton.dispatchEvent(fadeInterrupt);
    previewElem.dispatchEvent(fadeInterrupt);
}
function interruptFade(timer, element, remove) {
    if (remove && element != defaultSide) { element.remove(); }
    clearInterval(timer);
}

function getPreview() {
    return document.getElementById("previewFrame");
}
function getActive() {
    return document.getElementById("activeFrame");
}
