import { headers, proofHeaderEls, getTextHeight } from '../single.js';

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
        console.log(getCollapsible(proofHeaderEls[i]));
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

    var transitionEls = [container, content];
    if (hintText) { transitionEls.push(hintText); }

    if (noTransition) {
        transitionEls.forEach(el => {
            el.classList.add('noTransition');
        });
    }

    if (forceExpand || header.classList.contains('hidden')) {
        container.style.maxHeight = container.scrollHeight + 'px';
        content.style.opacity = '1';
        content.style.visibility = 'visible';

        if (hintText) { hintText.style.opacity = '0'; }
        if (!forceExpand) { header.classList.remove('hidden'); }

        var ancestorContainer = closestAncester(container, 'collapsibleContainer');
        if (ancestorContainer) {
            setTimeout(() => {
                toggle(getCollapsible(ancestorContainer), true, true);
            }, 200);
        }
    } else {
        container.style.maxHeight = '50px';
        content.style.opacity = '0';

        if (hintText) { hintText.style.opacity = '0.6'; }
        header.classList.add('hidden');

        setTimeout(() => {
            if (header.classList.contains('hidden')) {
                content.style.visibility = 'hidden';
            }
        }, 200);
    }

    if (noTransition) {
        transitionEls.forEach(el => {
            el.offsetHeight;
            el.classList.remove('noTransition');
        });
    }
}

function getCollapsible(el) {
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
