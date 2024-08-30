import { contentEl, metaDataEl,
         getCurSideEl, setCurSideEl,
         getSideExpanded, resetSideEl } from '../single.js';
import { getCtrlKeyDown } from '../input.js';
import { formatSpace, removeExt } from '../stringUtils.js';

var previewContainer = document.getElementById('previewContainer');
var frameContent;

var previewReady = false;
var clicked = false;
var cleared = false;

const fadeInterrupt = new Event('fadeInterrupt');
const fadeAmount = 0.015;
const fadeStep = 1;

window.previewSide = previewSide;
window.clearPreviewSide = clearPreviewSide;
window.updateCurrentSide = updateCurrentSide;
window.resetSide = resetSide;

function previewSide(link, page) {
    link = removeExt(formatSpace(link));

    if (page == 'nopPage' || !getSideExpanded()) { return; }
    if (getCurSideEl().src != link && (!getPreview() || cleared)) {
        getPreview()?.remove();
        previewReady = false;
        clicked = false;
        cleared = false;

        var frame = newPreviewFrame(link);
        previewContainer.appendChild(frame);

        frame.addEventListener('load', function() {
            previewReady = true;
            if (!clicked && !cleared) {
                triggerFadeInterrupt(frame);
                fadeOut(getCurSideEl(), false);
                resetSideEl.style.opacity = '0';
                fadeIn(frame);
            }
        });
    }
}

export function clearPreviewSide(page) {
    if (getSideExpanded && page == 'nopPage') { return }

    var preview = getPreview();
    cleared = true;

    if (preview && previewReady) {
        triggerFadeInterrupt(preview);

        fadeIn(getCurSideEl());
        fadeIn(resetSideEl);
        fadeOut(preview, true);
    } else {
        preview?.remove();
    }
}

function updateCurrentSide(e, link, page) {
    link = removeExt(formatSpace(link));
    e.preventDefault();
    if (page == 'nopPage') { return; }

    if (!getSideExpanded()) {
        if (getCtrlKeyDown()) { window.open(link, '_blank'); }
        else { window.open(link, '_self'); return; }
    }

    if (!contentEl.classList.contains('openLinks') && !getCtrlKeyDown()) {
        var preview = getPreview();
        clicked = true;

        if (!preview && getCurSideEl().src == link) {
            window.open(getCurSideEl().src, '_self');
        } else if (!preview) {
            previewSide(link);
            updateCurrentSide(e, link);
        } else if (previewReady) {
            getActive()?.remove();
            setActiveFrame(preview, false);
        } else {
            fadeOut(getCurSideEl(), true);
            preview.addEventListener('load', function() {
                setActiveFrame(preview, true);
            });
        }
    } else { window.open(link, '_blank'); }

    document.activeElement.blur();
}

export function resetSide() {
    if (getActive()) {
        setCurSideEl(metaDataEl);
        fadeIn(getCurSideEl());

        fadeOut(getActive(), true);
        resetSideEl.style.opacity = '0';

        previewReady = false;
        clicked = false;
        cleared = false;
    }
}

function newPreviewFrame(link) {
    link = removeExt(formatSpace(link));

    var frame = document.createElement('iframe');
    frame.style.opacity = '0';
    frame.setAttribute('src', link);
    frame.setAttribute('id', 'previewFrame');
    frame.setAttribute('class', 'right frame');
    frame.setAttribute('title', 'Preview');

    frame.addEventListener('load', function() {
        var frameDoc = frame.contentDocument;
        frameDoc.getElementById('searchBox').classList.add('inPreview');

        var toHide = frameDoc.getElementsByClassName('inPreview');
        for (var i = 0; i < toHide.length; i++) {
            toHide[i].style.display = 'none';
        }

        frameContent = frameDoc.getElementById('content');
        frameContent.classList.add('openLinks', 'noToggleSide', 'noListenDark');
        frameContent.classList.remove('left');
        frameContent.style.position = 'static';
        frameContent.style.opacity = '0.6';
        frameContent.style.transition = 'none';
    });

    return frame;
}

function setActiveFrame(newFrame, makeVisible) {
    setCurSideEl(newFrame);
    getCurSideEl().setAttribute('id', 'activeFrame');
    frameContent.style.opacity = '1';
    resetSideEl.style.display = 'inline';

    if (makeVisible) { fadeIn(getCurSideEl()); }
    resetSideEl.dispatchEvent(fadeInterrupt);
    fadeIn(resetSideEl);
}

function fadeOut(element, remove) {
    if (!element) { return; }
    var i = Number(element.style.opacity);
    var timer = setInterval(function () {
        element.style.opacity = i;
        i -= fadeAmount;
        if (i <= 0) {
            if (remove && element != metaDataEl) {
                element.remove();
            } else {
                element.style.opacity = 0;
            }
            clearInterval(timer);
        }
    });

    element.addEventListener('fadeInterrupt', function() {
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

    element.addEventListener('fadeInterrupt', function() {
        interruptFade(timer, element, false);
    });
}

function triggerFadeInterrupt(previewEl) {
    getCurSideEl().dispatchEvent(fadeInterrupt);
    resetSideEl.dispatchEvent(fadeInterrupt);
    previewEl.dispatchEvent(fadeInterrupt);
}
function interruptFade(timer, element, remove) {
    if (remove && element != metaDataEl) { element.remove(); }
    clearInterval(timer);
}

function getPreview() {
    return document.getElementById('previewFrame');
}
function getActive() {
    return document.getElementById('activeFrame');
}
