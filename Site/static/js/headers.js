import { makeHeader } from "./stringUtils.js"

document.addEventListener("DOMContentLoaded", async (e) => {
    var headers = document.querySelectorAll("h1");

    var newTitle = await makeHeader(headers[0].innerText, 25, 30);
    newTitle.setAttribute("id", "title");
    newTitle.classList.add("center");
    headers[0].replaceWith(newTitle);

    for (var i = 1; i < headers.length; i++) {
        var text = headers[i].innerText;
        var newHeader = await makeHeader(text, 17, 24);
        newHeader.classList.add("center");

        var num = document.createElement("span");
        num.innerText = i + ". ";
        num.style.fontSize = "24px";
        newHeader.prepend(num);

        var skip = document.createElement("div");
        skip.style.height = "12px";
        newHeader.appendChild(skip);

        headers[i].replaceWith(newHeader);
    }
});
