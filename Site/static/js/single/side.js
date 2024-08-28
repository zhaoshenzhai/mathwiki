import { contentEl, getCurSideEl, setFontSize, resetSideEl,
         getSideExpanded, setSideExpanded } from '../single.js';
import { styleHeaders } from './metaTOC.js';
import { clearPreviewSide } from './preview.js';

window.toggleSide = toggleSide;

export function toggleSide(noTransition) {
    var allListenSide = document.querySelectorAll('#content, .right');
    if (noTransition) {
        allListenSide.forEach(el => {
            el.classList.add('noTransition');
        });
    }

    if (getSideExpanded()) {
        contentEl.style.width = '80%';
        contentEl.style.paddingLeft = '10%';
        contentEl.style.paddingRight = '10%';
        contentEl.style.textAlign = 'justify';

        getCurSideEl().style.right = '-50%';
        resetSideEl.style.right = '-53%';

        setFontSize(26);
        setSideExpanded(false);
        styleHeaders(true);
        clearPreviewSide();

        localStorage['sideExpanded'] = 'false';
    } else {
        contentEl.style.width = '45%';
        contentEl.style.paddingLeft = '2.5%';
        contentEl.style.paddingRight = '2.5%';
        contentEl.style.textAlign = 'left';

        getCurSideEl().style.right = '0%';
        resetSideEl.style.right = '3%';

        setFontSize(23);
        setSideExpanded(true);
        styleHeaders(true);

        localStorage['sideExpanded'] = 'true';
    }

    if (noTransition) {
        allListenSide.forEach(el => {
            el.offsetHeight;
            el.classList.remove('noTransition');
        });
    }
}