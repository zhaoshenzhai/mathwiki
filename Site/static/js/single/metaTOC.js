import { toSmallCaps, textOfNode } from "../stringUtils.js";
import { fontSize, scFontSize, headersEl, metaTOCEl } from "../single.js";

window.showMetaTOC = showMetaTOC;
window.hideMetaTOC = hideMetaTOC;

var headers = {};

export function initMetaTOC() {
    expandHeaders();
    styleHeaders();
    generateTOC();
}

function expandHeaders() {
    for (var i = 1; i < headersEl.length; i++) {
        var h2List = [];
        var h2Index = i + 1;
        while (headersEl[h2Index] && headersEl[h2Index].tagName == "H2") {
            h2List.push(headersEl[h2Index]);
            h2Index++;
        }

        headers[i] = h2List;
        i = h2Index - 1;
    }
}

function styleHeaders() {
    var newTitle = document.createElement("h1");
    var newTitleSize = headersEl[0].getAttribute("titleSize");
    if (!newTitleSize) { newTitleSize = 25; }

    var newTitleSC = toSmallCaps(
        headersEl[0].innerText,
        newTitleSize,
        Number(newTitleSize) + 5
    );

    newTitle.appendChild(newTitleSC);
    newTitle.setAttribute("id", "title");
    newTitle.classList.add("center");

    if (headersEl[0].nextElementSibling != headersEl[1]) {
        newTitle.classList.add("title_spacer");
    }

    headersEl[0].replaceWith(newTitle);

    var h1Counter = 1;
    for(var [h1Index, h2List] of Object.entries(headers)) {
        styleH1(headersEl[h1Index], h1Counter);

        for (var h2Counter = 0; h2Counter < h2List.length; h2Counter++) {
            styleH2(h2List[h2Counter], h1Counter, h2Counter + 1);
        }

        h1Counter++;
    }
}

function generateTOC() {
    var h1Headers = document.createElement("ol");
    h1Headers.classList.add("metaContentListH1");
    metaTOCEl.appendChild(h1Headers);

    if (Object.keys(headers).length == 0) {
        document.getElementById("toc").remove();
    }

    for(var [h1Index, h2List] of Object.entries(headers)) {
        var h1El = document.createElement("li");
        var h1Button = document.createElement("button");
        h1El.appendChild(h1Button);
        h1Headers.appendChild(h1El);

        h1Button.onclick = function () { goTo(this.getAttribute("text")) };
        h1Button.classList.add("metaContentButton");
        h1Button.classList.add("listenDark");
        h1Button.innerText = headersEl[h1Index].getAttribute("id");
        h1Button.setAttribute("text", h1Button.innerText);

        var h2Headers = document.createElement("ol");
        h2Headers.classList.add("metaContentListH2");
        h1El.appendChild(h2Headers);
        for (var h2Index = 0; h2Index < h2List.length; h2Index++) {
            var h2El = document.createElement("li");
            var h2Button = document.createElement("button");
            h2El.appendChild(h2Button);
            h2Headers.appendChild(h2El);

            h2Button.onclick = function () { goTo(this.getAttribute("text")) };
            h2Button.classList.add("metaContentButton");
            h2Button.classList.add("listenDark");
            h2Button.innerText = h2List[h2Index].innerText
                .replace(/\.$/, "").replace(/.*\.\ /, "");
            h2Button.setAttribute("text", h2Button.innerText);
        }
    }
}

export function showMetaTOC() {
    metaTOCEl.style.maxHeight = metaTOCEl.scrollHeight + "px";
}
function hideMetaTOC() {
    metaTOCEl.style.maxHeight = null;
}

function goTo(anchor) {
    var loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + anchor;
    return false;
}

function styleH1(el, counter) {
    el.setAttribute("id", el.innerText);
    el.classList.add("center");
    el.classList.add("h1Title");

    for (var i = 0; i < el.childNodes.length; i++) {
        if (!el.childNodes[i].innerText) {
            var text = textOfNode(el.childNodes[i]);
            var textSC = toSmallCaps(text, scFontSize, fontSize);

            el.childNodes[i].replaceWith(textSC);
        } else {
            var text = el.childNodes[i].innerText;
            var textSC = toSmallCaps(text, scFontSize, fontSize);

            el.childNodes[i].innerHTML = textSC.innerHTML;
        }
    }

    var num = document.createElement("span");
    num.innerText = counter + ". ";
    el.prepend(num);
}

function styleH2(el, parentCounter, counter) {
    var num = document.createElement("span");
    num.innerText = parentCounter + "." + counter + ". "
    num.style.fontWeight = "normal";

    el.setAttribute("id", el.innerText);
    el.style.fontSize = "25px";
    el.innerHTML += ".";
    el.prepend(num);
}
