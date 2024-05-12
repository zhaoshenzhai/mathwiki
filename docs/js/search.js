var searchBox = document.getElementById("searchBox");
var searchBar = document.getElementById("searchBar");
var searchList = document.getElementById("searchList");

window.searchInit = searchInit;
window.searchClear = searchClear;
window.search = search;

export var searchActive = false;

var options = { includeScore: true }
var searchLengthCap = 8;
var engine;

// Extract from allFiles.json
var allFiles;
var allFileTitles;
fetch("/mathwiki/allFiles.json")
    .then(response => response.json())
    .then((data) => {
        allFiles = data;
        allFileTitles = allFiles.map((x) => x.title);
        engine = new Fuse(allFileTitles, options);
    });

function search(e) {
    var input = getInput(e);

    if (input.length > 0) {
        var searchRes = engine.search(input).map((x) => x.item);
        updateSearchList(searchRes);
    } else {
        updateSearchList(allFileTitles);
    }
}

function updateSearchList(newList) {
    var length = Math.min(newList.length, searchLengthCap);
    for (let i = 0; i < searchLengthCap; i++) {
        var item = document.getElementById("searchListItem" + i)
        if (i < length) {
            item.innerText = newList[i];
            item.style.display = "block";
        } else {
            item.innerText = "";
            item.style.display = "none";
        }
    }

    searchBox.style.height = (55 + 40 * length) + "px";
}

export function searchInit() {
    searchActive = true;
    searchBox.style.display = "flex";
    searchBar.focus();

    search();
}

export function searchClear() {
    searchActive = false;
    searchBox.style.display = "none";
    searchBar.value = "";
}

function getInput(e) {
    var init = searchBar.value;

    if (e) {
        if (/^[a-zA-Z0-9]$/.test(e.key)) {
            init = searchBar.value + e.key;
        } else if (e.key == "Backspace") {
            init = init.substr(0, init.length - 1);
        }
    }

    return init;
}
