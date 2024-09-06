import { resetSide } from './single/preview.js';
import { contentEl } from './single.js';
import { toggleSide } from './single/side.js';
import { toggleDark } from './darkMode.js';
import { searchInit,
         searchOpen,
         searchClear,
         searchActive,
         searchScroll } from './search.js';

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
    } else if (!searchActive && metaKeyDown && e.key === 'e') {
        if (!contentEl.classList.contains('noToggleSide')) {
            toggleSide(false);
        }
    } else if (!searchActive && metaKeyDown && e.key === 'd') {
        if (!contentEl.classList.contains('noListenDark')) {
            toggleDark(document, false, true, true);
        }
    } else if (!searchActive && e.key === 'j') {
        contentEl.style.setProperty('position', 'absolute');
        contentEl.scrollBy(0, 60);
        contentEl.style.setProperty('position', 'fixed');
    } else if (!searchActive && e.key === 'k') {
        contentEl.style.setProperty('position', 'absolute');
        contentEl.scrollBy(0, -60);
        contentEl.style.setProperty('position', 'fixed');
    } else if (!searchActive && e.key === 'g') {
        contentEl.style.setProperty('position', 'absolute');
        contentEl.scrollTo(0, 0);
        contentEl.style.setProperty('position', 'fixed');
    } else if (!searchActive && e.key === 'G') {
        contentEl.style.setProperty('position', 'absolute');
        contentEl.scrollBy(0, contentEl.scrollHeight);
        contentEl.style.setProperty('position', 'fixed');
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
