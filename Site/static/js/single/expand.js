import { headers, proofHeaderEls,
         getTextHeight, contentEl } from '../single.js';

const rootC = getComputedStyle(document.querySelector(':root'));
const expandDuration = Number(rootC.getPropertyValue('--collapseTransition').replace(/s/, '')) * 1000;

const hideInterrupt = new Event('hideInterrupt');

export function initCollapsibles() {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        initCollapsible(proofHeaderEls[i], proofHeaderEls[i], true);
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            initCollapsible(h1El, h1El.childNodes[1], false);
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            var h2El = h2List[h2Index];
            initCollapsible(h2El, h2El.childNodes[1], true);
        }
    }

    initHintTextCorrections();
}

function initCollapsible(el, button, expandAncestorClick) {
    var collapsible = getCollapsible(el);
    var container = toggle(collapsible, true, true, false);
    container.setAttribute('maxExpandedHeight', container.style.maxHeight);

    button.addEventListener('click', function() {
        toggle(collapsible, false, false, expandAncestorClick);
    });
}

function toggle([container, header, content, hintText],
                forceExpand, noTransition, expandAncestor) {
    if (!container) { return; }

    var transitionEls = [container, header, content];
    if (hintText) { transitionEls.push(hintText); }

    if (noTransition) {
        transitionEls.forEach(el => {
            el.classList.add('noTransition');
        });
    }

    if (forceExpand || header.classList.contains('hidden')) {
        expand([container, header, content, hintText], expandAncestor);
    } else {
        collapse([container, header, content, hintText], expandAncestor);
    }

    if (noTransition) {
        transitionEls.forEach(el => {
            el.offsetHeight;
            el.classList.remove('noTransition');
        });
    }

    return container;
}

function expand([container, header, content, hintText], expandAncestor) {
    header.classList.remove('hidden');

    container.style.maxHeight = container.scrollHeight + 'px';
    content.style.opacity = '1';
    content.style.visibility = 'visible';
    if (hintText) { hintText.style.opacity = '0'; }

    content.dispatchEvent(hideInterrupt);
    if (expandAncestor) { updateAncestor(container); }
}

function collapse([container, header, content, hintText], expandAncestor) {
    header.classList.add('hidden');

    container.style.maxHeight = getTextHeight() + 'px';
    content.style.opacity = '0';
    if (hintText) { hintText.style.opacity = '0.6'; }

    content.dispatchEvent(hideInterrupt);
    if (expandAncestor) { updateAncestor(container); }
    hideWhenCollapse(content);
}

function getCollapsible(el) {
    if (!el) { return; }

    var container, header, content, hintText = null;

    if (el.classList.contains('collapsibleContainer')) {
        container = el;
    } else {
        container = el.parentElement;
    }

    for (var i = 0; i < container.childNodes.length; i++) {
        var childEl = container.childNodes[i];

        var childElClasses = childEl.classList;
        if (childElClasses) {
            if (childEl.classList.contains('collapsibleHeader')) {
                header = childEl;
            } else if (childEl.classList.contains('collapsibleContent')) {
                content = childEl;
            } else if (childEl.classList.contains('collapsibleHintText')) {
                hintText = childEl;
            }
        }
    }

    return [container, header, content, hintText];
}

function hideWhenCollapse(content) {
    var hideTimer = setTimeout(() => {
        content.style.visibility = 'hidden';
    }, expandDuration);

    content.addEventListener('hideInterrupt', () => {
        clearInterval(hideTimer);
    }, {once: true});
}

function updateAncestor(container) {
    var ancestorContainer =
        closestAncestor(container, 'collapsibleContainer');
    if (ancestorContainer) {
        ancestorContainer.style.maxHeight =
            ancestorContainer.getAttribute('maxExpandedHeight');
        updateAncestor(ancestorContainer);
    }
}

function closestAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

export function initHintTextCorrections() {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        initHintTextCorrection(getCollapsible(proofHeaderEls[i]));
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            initHintTextCorrection(getCollapsible(h1El));
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            initHintTextCorrection(getCollapsible(h2List[h2Index]));
        }
    }
}

function initHintTextCorrection([container, header, content, hintText]) {
    if (!hintText) { return; }
    hintText.style.position = 'relative';

    var initialAlign = contentEl.style.textAlign;
    contentEl.style.textAlign = 'left';

    var hintTextWidth = hintText.getBoundingClientRect().width;
    content.style.marginLeft = '-' + hintTextWidth + 'px';

    contentEl.style.textAlign = initialAlign;
}

export function resetHintTextCorrections() {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        resetHintTextCorrection(getCollapsible(proofHeaderEls[i]));
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            resetHintTextCorrection(getCollapsible(h1El));
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            resetHintTextCorrection(getCollapsible(h2List[h2Index]));
        }
    }
}

function resetHintTextCorrection([container, header, content, hintText]) {
    if (!hintText) { return; }

    hintText.style.position = 'absolute';
    content.style.marginLeft = '0px';
}
