import { contentEl, getCurSideEl, setFontSize, resetSideEl,
         getSideExpanded, setSideExpanded } from '../single.js';
import { styleHeaders } from './metaTOC.js';

window.toggleSide = toggleSide;

function toggleSide() {
    if (getSideExpanded()) {
        contentEl.style.width = '80%';
        contentEl.style.paddingLeft = '10%';
        contentEl.style.paddingRight = '10%';

        getCurSideEl().style.opacity = '0';
        resetSideEl.style.opacity = '0';

        setFontSize(25);
        setSideExpanded(false);
        styleHeaders(true);
    } else {
        contentEl.style.width = '45%';
        contentEl.style.paddingLeft = '2.5%';
        contentEl.style.paddingRight = '2.5%';

        getCurSideEl().style.opacity = '1';
        resetSideEl.style.opacity = '1';

        setFontSize(23);
        setSideExpanded(true);
        styleHeaders(true);
    }
}
