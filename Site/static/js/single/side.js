import { contentEl, getCurSideEl, setFontSize, resetSideEl,
         getSideExpanded, setSideExpanded } from '../single.js';
import { styleHeaders } from './metaTOC.js';

window.toggleSide = toggleSide;

export function toggleSide() {
    if (getSideExpanded()) {
        contentEl.style.width = '80%';
        contentEl.style.paddingLeft = '10%';
        contentEl.style.paddingRight = '10%';

        getCurSideEl().style.right = '-50%';
        resetSideEl.style.right = '-53%';

        setFontSize(25);
        setSideExpanded(false);
        styleHeaders(true);

        localStorage['sideExpanded'] = 'false';
    } else {
        contentEl.style.width = '45%';
        contentEl.style.paddingLeft = '2.5%';
        contentEl.style.paddingRight = '2.5%';

        getCurSideEl().style.right = '0%';
        resetSideEl.style.right = '3%';

        setFontSize(23);
        setSideExpanded(true);
        styleHeaders(true);

        localStorage['sideExpanded'] = 'true';
    }
}
