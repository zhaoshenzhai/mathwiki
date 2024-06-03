export function firstUpper(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function toSpace(s) {
    return s.replace('_', " ");
}

export function textOfNode(n) {
    return n.textContent.replace(/(\r\n|\n|\r)/gm, "");
}

export function toSmallCaps(s, small, big) {
    var newEl = document.createElement("span");

    var splitMath = s.split("$");
    for (var i = 0; i < splitMath.length; i++) {
        if (i % 2 == 0) {
            var splitText = splitMath[i].match(/[A-Z]+[^A-Z\&]*|[^A-Z]+/g);
            if (splitText) {
                for (var j = 0; j < splitText.length; j++) {
                    var capital = document.createElement("span");
                    capital.innerText = splitText[j].charAt(0).toUpperCase();
                    capital.style.fontSize = big + "px";

                    var tail = document.createElement("span");
                    tail.innerText = splitText[j].slice(1).toUpperCase();
                    tail.style.fontSize = small + "px";

                    newEl.appendChild(capital);
                    newEl.appendChild(tail);
                }
            }
        } else {
            var mathEl = document.createElement("span");
            mathEl.innerText = "$" + splitMath[i] + "$";
            mathEl.style.fontSize = big + "px";

            newEl.appendChild(mathEl);
        }
    }

    return newEl;
}
