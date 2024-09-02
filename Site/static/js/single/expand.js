import { headers, proofHeaderEls, getTextHeight } from '../single.js';

document.addEventListener('DOMContentLoaded', (e) => {
    for (var i = 0; i < proofHeaderEls.length; i++) {
        proofHeaderEls[i].addEventListener('click', function() {
            var hintText = this.nextElementSibling;
            var container = hintText.nextElementSibling;
            toggle(this, container, hintText, false);
        });
    }

    for(var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
        if (h1El) {
            h1El.childNodes[1].addEventListener('click', function() {
                var header = this.parentElement;
                var container = header.parentElement;
                var content = header.nextElementSibling;

                toggle(container, header, content, null, false);
            });
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            h2List[h2Index].childNodes[1].addEventListener('click', function() {
                var header = this.parentElement;
                var container = header.parentElement;
                var content = header.nextElementSibling;
                toggle(container, header, content, null, false);
            });
        }
    }
});

export function expandCollapsibles() {

}

function toggle(container, header, content, hintText, forceExpand) {
    if (forceExpand || !header.classList.contains('expanded')) {
        container.style.maxHeight = container.scrollHeight + 'px';
        content.style.opacity = '1';

        if (hintText) { hintText.style.opacity = '0'; }
        if (!forceExpand) { header.classList.add('expanded'); }
    } else {
        container.style.maxHeight = null;
        // container.style.maxHeight = getTextHeight() + 'px';
        content.style.opacity = '0';

        if (hintText) { hintText.style.opacity = '0.6'; }
        header.classList.remove('expanded');
    }
}
