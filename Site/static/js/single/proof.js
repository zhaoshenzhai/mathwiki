import { getTextHeight } from '../single.js';

var proofHeaders = document.getElementsByClassName('proofHeader');
window.initProofHeaders = initProofHeaders;

// Toggle on click
document.addEventListener('DOMContentLoaded', (e) => {
    for (var i = 0; i < proofHeaders.length; i++) {
        proofHeaders[i].addEventListener('click', function() {
            toggleProofHeader(this, false);
        });
    }
});

export function initProofHeaders() {
    for (var i = 0; i < proofHeaders.length; i++) {
        var proof = proofHeaders[i];
        console.log(proof);
        var container = proof.parentElement;
        if (container.classList.contains('hide')) {
            container.style.maxHeight = getTextHeight() + 'px';

            var expand = proof.nextElementSibling;
            var content = expand.nextElementSibling;
            content.style.opacity = '0';
            expand.style.opacity = '0.6';
        } else {
            toggleProofHeader(proof, false);
        }
    }
}

function toggleProofHeader(proof, forceExpand) {
    var container = proof.parentElement;
    var expand = proof.nextElementSibling;
    var content = expand.nextElementSibling;

    if (forceExpand || !proof.classList.contains('proofExpanded')) {
        container.style.maxHeight = container.scrollHeight + 'px';
        content.style.opacity = '1';
        expand.style.opacity = '0';
        if (!forceExpand) { proof.classList.add('proofExpanded'); }
    } else {
        container.style.maxHeight = getTextHeight() + 'px';
        content.style.opacity = '0';
        expand.style.opacity = '0.6';
        proof.classList.remove('proofExpanded');
    }
}
