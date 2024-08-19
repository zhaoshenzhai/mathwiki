import { contentEl, metaDataEl,
         setFontSize,
         getSideExpanded, setSideExpanded } from '../single.js';

window.toggleSide = toggleSide;

function toggleSide() {
    if (getSideExpanded()) {
        contentEl.style.width = '80%';
        contentEl.style.left = '10%';
        contentEl.style.right = '10%';

        metaDataEl.style.opacity = '0';

        setFontSize(30);
        setSideExpanded(false);
    } else {
        contentEl.style.width = '45%';
        contentEl.style.left = '3%';
        contentEl.style.right = '0%';

        metaDataEl.style.opacity = '1';

        setFontSize(23);
        setSideExpanded(true);
    }
}
