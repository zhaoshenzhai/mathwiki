import { contentEl } from './single.js';
import { toggleDark } from './darkMode.js';
import { toggleTOC } from './single/headers.js';
import { formatSpace, removeExt } from './stringUtils.js';
import { searchInit, searchOpen, searchClear,
         searchActive, searchScroll } from './search.js';

var ctrlKeyDown = false;
window.getCtrlKeyDown = getCtrlKeyDown;
window.onLinkClick = onLinkClick;

document.addEventListener('keydown', function(e) {
    if (e.key === 'Control') {
        ctrlKeyDown = true;
    } else if (e.key === 'Escape' && searchActive) {
        searchClear();
    } else if (e.key === 'Enter') {
        if (ctrlKeyDown && !searchActive) { searchInit(); }
        else if (searchActive) { searchOpen(ctrlKeyDown); }
    } else if (!searchActive && e.key === 'j') {
        window.scrollBy(0, 60);
    } else if (!searchActive && e.key === 'k') {
        window.scrollBy(0, -60);
    } else if (!searchActive && e.key === 'g') {
        window.scrollTo(0, 0);
    } else if (!searchActive && e.key === 'G') {
        window.scrollBy(0, contentEl.scrollHeight);
    } else if (searchActive && e.key === 'ArrowDown') {
        searchScroll(1);
    } else if (searchActive && e.key === 'ArrowUp') {
        searchScroll(-1);
    } else if (ctrlKeyDown && e.key === 'e') {
        toggleTOC();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Control') {
        ctrlKeyDown = false;
    }
});

export function onLinkClick(e, link, page){
    link = removeExt(formatSpace(link));
    e.preventDefault();
    if (page == 'nopPage') { return; }

    if (ctrlKeyDown) {
        window.open(link, '_blank');
    }
    else {
        window.open(link, '_self');
        return;
    }

    document.activeElement.blur();
}

document.getElementById('mainPage').addEventListener('click', function(e) {
    searchClear();
});

export function getCtrlKeyDown() { return ctrlKeyDown; }
