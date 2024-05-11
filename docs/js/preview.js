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
const fadeAmount = 0.015;
const fadeStep = 1;

function previewSide(link) {
    if (currentSide.src != link && (!getPreview() || cleared)) {
        previewReady = false;
        clicked = false;
        cleared = false;

        var frame = newPreviewFrame(link);
        frameContainer.appendChild(frame);

        frame.addEventListener("load", function() {
            previewReady = true;
            if (!clicked && !cleared) {
                triggerFadeInterrupt(frame);
                fadeOut(currentSide, false);
                fadeOut(resetButton, false);
                fadeIn(frame);
            }
        });
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

        previewReady = false;
        clicked = false;
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

        cleared = false;
        previewReady = false;
    } else { window.open(link, "_blank"); }

    e.preventDefault();
}

function resetSide() {
    currentSide = defaultSide;
    fadeIn(currentSide);

    fadeOut(getActive(), true);

    fadeOut(resetButton, false);
    resetButton.style.display = "none";

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
    if (!element) { return; }
    var i = Number(element.style.opacity);
    var timer = setInterval(function () {
        element.style.opacity = i;
        i -= fadeAmount;
        if (i <= 0) {
            if (remove && element != defaultSide) {
                element.remove();
            } else {
                element.style.opacity = 0;
            }
            clearInterval(timer);
        }
    });

    element.addEventListener("fadeInterrupt", function() {
        interruptFade(timer, element, remove);
    });
}
function fadeIn(element) {
    if (!element) { return; }
    var i = Number(element.style.opacity);
    var timer = setInterval(function () {
        element.style.opacity = i;
        i += fadeAmount;
        if (i >= 1){
            element.style.opacity = 1;
            clearInterval(timer);
        }
    }, fadeStep);

    element.addEventListener("fadeInterrupt", function() {
        interruptFade(timer, element, false);
    });
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
