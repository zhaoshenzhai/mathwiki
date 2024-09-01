import { headers } from '../single.js';

export function preToggleHeader(el) {
    if (el.tagName == 'H1') {
        for (var [h1Index, [h1El, h2List]] of Object.entries(headers)) {
            if (el.id == h1El.id) {
                var curHeader = headers[h1Index][0];
                var nextHeader = headers[Number(h1Index) + 1];
                if (nextHeader) { nextHeader = nextHeader[0]; }

                console.log(curHeader);
                console.log(nextHeader);

                break;
            }
        }
        console.log("-----");
    }
}
