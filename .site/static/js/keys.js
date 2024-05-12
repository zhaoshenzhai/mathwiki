import { searchInit, searchClear, searchActive } from "./search.js"
import { resetSide } from "./preview.js"

var metaKeyDown = false;

document.addEventListener('keydown', function(e) {
    if (e.key === "Meta") {
        metaKeyDown = true;
    } else if (e.key === "Escape") {
        searchActive ? searchClear() : resetSide();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "Meta") {
        metaKeyDown = false;
    }
});

document.addEventListener('keypress', function(e) {
    if (e.key === "Enter" && metaKeyDown && !searchActive) {
        searchInit();
    }
});
