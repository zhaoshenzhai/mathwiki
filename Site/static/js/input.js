import { resetSide } from './single/preview.js'
import { searchInit,
         searchOpen,
         searchClear,
         searchActive,
         searchScroll } from './search.js'

var metaKeyDown = false;
var ctrlKeyDown = false;

window.getMetaKeyDown = getMetaKeyDown;
window.getCtrlKeyDown = getCtrlKeyDown;

document.addEventListener('keydown', function(e) {
    if (e.key === 'Meta') {
        metaKeyDown = true;
    } else if (e.key === 'Control') {
        ctrlKeyDown = true;
    } else if (e.key === 'Escape') {
        searchActive ? searchClear() : resetSide();
    } else if (e.key === 'Enter') {
        if (metaKeyDown && !searchActive) { searchInit(); }
        else if (searchActive) { searchOpen(ctrlKeyDown); }
    } else if (searchActive && e.key === 'ArrowDown') {
        searchScroll(1);
    } else if (searchActive && e.key === 'ArrowUp') {
        searchScroll(-1);
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Meta') {
        metaKeyDown = false;
    } else if (e.key === 'Control') {
        ctrlKeyDown = false;
    }
});

document.getElementById('mainPage').addEventListener('click', function(e) {
    searchClear();
});

export function getMetaKeyDown() { return metaKeyDown; }
export function getCtrlKeyDown() { return ctrlKeyDown; }
