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
            h1El.childNodes[0].addEventListener('click', function() {
                var header = this.parentElement;
                console.log(header);
                var container = header.nextElementSibling;
                toggle(header, container, null, false);
            });
        }

        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            h2List[h2Index].childNodes[0].addEventListener('click', function() {
                var header = this.parentElement;
                var container = header.nextElementSibling;
                toggle(header, container, null, false);
            });
        }
    }
});

export function expandCollapsibles() {

}

function toggle(header, container, hintText, forceExpand) {
    console.log(header);
    console.log(container);
    console.log(container.scrollHeight);
    console.log(container.offsetHeight);

    if (forceExpand || !header.classList.contains('expanded')) {
        container.style.maxHeight = container.scrollHeight + 'px';
        // container.style.opacity = '1';
        // container.style.display = 'inline';
        if (hintText) { hintText.style.opacity = '0'; }
        if (!forceExpand) { header.classList.add('expanded'); }
    } else {
        container.style.maxHeight = null;
        // container.style.maxHeight = getTextHeight() + 'px';
        // container.style.opacity = '0';
        // container.style.display = 'none';
        if (hintText) { hintText.style.opacity = '0.6'; }

        header.classList.remove('expanded');
    }
}
