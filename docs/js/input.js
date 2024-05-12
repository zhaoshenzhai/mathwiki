import { searchInit, searchOpen, searchClear, searchActive } from "./search.js"
import { resetSide } from "./preview.js"

var metaKeyDown = false;
var ctrlKeyDown = false;

window.getMetaKeyDown = getMetaKeyDown;
window.getCtrlKeyDown = getCtrlKeyDown;

document.addEventListener('keydown', function(e) {
    if (e.key === "Meta") {
        metaKeyDown = true;
    } else if (e.key === "Control") {
        ctrlKeyDown = true;
    } else if (e.key === "Escape") {
        searchActive ? searchClear() : resetSide();
    } else if (e.key === "Enter") {
        if (metaKeyDown && !searchActive) {
            searchInit();
        } else if (searchActive) {
            searchOpen(ctrlKeyDown);
        }
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "Meta") {
        metaKeyDown = false;
    } else if (e.key === "Control") {
        ctrlKeyDown = false;
    }
});

export function getMetaKeyDown() { return metaKeyDown; }
export function getCtrlKeyDown() { return ctrlKeyDown; }
