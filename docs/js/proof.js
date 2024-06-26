const lineHeight = "30px";
var proofHeaders = document.getElementsByClassName("proofHeader");
window.expandProofHeaders = expandProofHeaders;

// Expand on load
document.addEventListener("DOMContentLoaded", (e) => {
    for (var i = 0; i < proofHeaders.length; i++) {
        proofHeaders[i].addEventListener("click", function() {
            toggleProofHeader(this);
        });
    }
});

export function expandProofHeaders() {
    for (var i = 0; i < proofHeaders.length; i++) {
        var proof = proofHeaders[i];
        var container = proof.parentElement;
        if (container.classList.contains("hide")) {
            container.style.maxHeight = lineHeight;

            var expand = proof.nextElementSibling;
            var content = expand.nextElementSibling;
            content.style.opacity = "0";
            expand.style.opacity = "0.6";           
        } else {
            toggleProofHeader(proof);
        }
    }
}

function toggleProofHeader(proof) {
    var container = proof.parentElement;
    var expand = proof.nextElementSibling;
    var content = expand.nextElementSibling;

    if (!proof.classList.contains("proofExpanded")) {
        container.style.maxHeight = container.scrollHeight + "px";
        content.style.opacity = "1";
        expand.style.opacity = "0";
        proof.classList.add("proofExpanded");
    } else {
        container.style.maxHeight = lineHeight;
        content.style.opacity = "0";
        expand.style.opacity = "0.6";
        proof.classList.remove("proofExpanded");
    }
}
