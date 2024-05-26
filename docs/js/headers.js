import { toSmallCaps } from "./stringUtils.js"

// Style Headers
document.addEventListener("DOMContentLoaded", (e) => {
    var headerList = document.querySelectorAll("h1, h2");
    var headers = expandHeaders(headerList);

    var newTitle = toSmallCaps(headerList[0].innerText, 25, 30);
    newTitle.setAttribute("id", "title");
    newTitle.classList.add("center");
    headerList[0].replaceWith(newTitle);

    var h1Counter = 1;
    for(var [h1Index, h2List] of Object.entries(headers)) {
        styleH1(headerList[h1Index], h1Counter);

        for (var h2Counter = 0; h2Counter < h2List.length; h2Counter++) {
            styleH2(h2List[h2Counter], h1Counter, h2Counter + 1);
        }

        h1Counter++;
    }
});

function expandHeaders(list) {
    var headers = {};
    for (var i = 1; i < list.length; i++) {
        var h2List = [];
        var h2Index = i + 1;
        while (list[h2Index] && list[h2Index].tagName == "H2") {
            h2List.push(list[h2Index]);
            h2Index++;
        }

        headers[i] = h2List;
        i = h2Index - 1;
    }

    return headers;
}

function styleH1(el, counter) {
    var text = el.innerText;
    var newH1 = toSmallCaps(text, 17, 24);
    newH1.setAttribute("id", text);
    newH1.classList.add("center");

    var num = document.createElement("span");
    num.innerText = counter + ". ";
    num.style.fontSize = "24px";
    newH1.prepend(num);

    var skip = document.createElement("div");
    skip.style.height = "10px";
    newH1.appendChild(skip);

    el.replaceWith(newH1);
}

function styleH2(el, parentCounter, counter) {
    var num = document.createElement("span");
    num.innerText = parentCounter + "." + counter + ". "
    num.style.fontWeight = "normal";

    el.innerText += ".";
    el.prepend(num);
}
