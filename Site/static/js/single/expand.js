import { headers, proofHeaderEls,
         getTextHeight } from '../single.js';

document.addEventListener('DOMContentLoaded', (e) => {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        proofHeaderEls[i].addEventListener('click', function() {
            var container = this.parentElement;
            var header = container.children[0];
            var hintText = this.nextElementSibling;
            var content = hintText.nextElementSibling;
            toggle(container, header, content, hintText, false);
        });
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            h1El.childNodes[1].addEventListener('click', function() {
                var container = this.parentElement.parentElement;
                var header = container.children[0];
                var content = this.parentElement.nextElementSibling;
                toggle(container, header, content, null, false);
            });
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            h2List[h2Index].childNodes[1].addEventListener('click', function() {
                var container = this.parentElement.parentElement;
                var header = container.children[0];
                var content = this.parentElement.nextElementSibling;
                toggle(container, header, content, null, false);
            });
        }
    }
});

export function expandCollapsibles() {

}

function toggle(container, header, content, hintText, forceExpand) {
    if (!container) { return; }
    if (forceExpand || header.classList.contains('hidden')) {
        container.style.maxHeight = container.scrollHeight + 'px';
        content.style.opacity = '1';
        content.style.visibility = 'visible';

        if (hintText) { hintText.style.opacity = '0'; }
        if (!forceExpand) { header.classList.remove('hidden'); }

        var ancestor = closestAncester(container, 'collapsibleContainer');
        if (ancestor) { ancestor.style.maxHeight = 100000000 + '%'; }
    } else {
        container.style.maxHeight = '50px';
        content.style.opacity = '0';

        if (hintText) { hintText.style.opacity = '0.6'; }
        header.classList.add('hidden');

        setTimeout(() => { content.style.visibility = 'hidden'; }, 200);
    }
}

function closestAncester(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}
