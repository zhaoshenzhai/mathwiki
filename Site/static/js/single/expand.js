import { headers, proofHeaderEls, getTextHeight } from '../single.js';

const rootC = getComputedStyle(document.querySelector(':root'));
const expandDuration = Number(rootC.getPropertyValue('--collapseTransition').replace(/s/, '')) * 1000;

const hideInterrupt = new Event('hideInterrupt');
const ancesterInterrupt = new Event('ancesterInterrupt');

document.addEventListener('DOMContentLoaded', (e) => {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        proofHeaderEls[i].addEventListener('click', function() {
            toggle(getCollapsible(this), false, false);
        });
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            h1El.childNodes[1].addEventListener('click', function() {
                toggle(getCollapsible(this.parentElement), null, false, false);
            });
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            h2List[h2Index].childNodes[1].addEventListener('click', function() {
                toggle(getCollapsible(this.parentElement), null, false, false);
            });
        }
    }
});

export function initCollapsibles() {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        toggle(getCollapsible(proofHeaderEls[i]), true, true);
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            toggle(getCollapsible(h1El), true, true);
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            toggle(getCollapsible(h2List[h2Index]), true, true);
        }
    }
}

function toggle([container, header, content, hintText], forceExpand, noTransition) {
    if (!container) { return; }

    var transitionEls = [container, header, content];
    if (hintText) { transitionEls.push(hintText); }

    if (noTransition) {
        transitionEls.forEach(el => {
            el.classList.add('noTransition');
        });
    }

    if (forceExpand || header.classList.contains('hidden')) {
        expand([container, header, content, hintText]);
    } else {
        collapse([container, header, content, hintText]);
    }

    if (noTransition) {
        transitionEls.forEach(el => {
            el.offsetHeight;
            el.classList.remove('noTransition');
        });
    }
}

function expand([container, header, content, hintText]) {
    header.classList.remove('hidden');

    container.style.maxHeight = container.scrollHeight + 'px';
    content.style.opacity = '1';
    content.style.visibility = 'visible';

    content.dispatchEvent(ancesterInterrupt);
    content.dispatchEvent(hideInterrupt);
    if (hintText) { hintText.style.opacity = '0'; }

    var ancestorContainer = closestAncester(container, 'collapsibleContainer');
    if (ancestorContainer) {
        ancestorContainer.style.maxHeight = '100000px';
        // console.log(ancestorContainer);
        // console.log(window.getComputedStyle(ancestorContainer).getPropertyValue('max-height'));
        var ancesterTimer = setTimeout(() => {
            ancestorContainer.style.maxHeight = window.getComputedStyle(ancestorContainer).getPropertyValue('max-height');
            // expand(getCollapsible(ancestorContainer));
        }, expandDuration);

        content.addEventListener('ancesterInterrupt', () => {
            clearInterval(ancesterTimer);
        }, {once: true});
    }
}

function collapse([container, header, content, hintText]) {
    header.classList.add('hidden');

    container.style.maxHeight = getTextHeight() + 'px';
    content.style.opacity = '0';

    if (hintText) { hintText.style.opacity = '0.6'; }

    var hideTimer = setTimeout(() => {
        if (header.classList.contains('hidden')) {
            content.style.visibility = 'hidden';
        }
    }, expandDuration);

    content.addEventListener('hideInterrupt', () => {
        clearInterval(hideTimer);
    }, {once: true});
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

function closestAncester(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}
