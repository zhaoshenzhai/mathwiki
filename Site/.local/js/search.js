var searchBox = document.getElementById("searchBox");
var searchBar = document.getElementById("searchBar");
var searchList = document.getElementById("searchList");

var allFiles, allFileTitles, allFilePaths;

var searchOptions = { includeScore: true, keys: ['title'] }
var searchLengthCap = 10;
var searchEngine;

var root = getComputedStyle(document.querySelector(':root'));

var curSearchItemActive = 0;
export var searchActive = false;

window.search = search;
window.searchInit = searchInit;
window.searchOpen = searchOpen;
window.searchClear = searchClear;
window.searchItemActive = searchItemActive;

// Extract from allFiles.json
fetch("/mathwiki/allFiles.json")
    .then(response => response.json())
    .then((data) => {
        allFiles = data;
        allFilePaths = allFiles.map((x) => x.relPath);
        allFileTitles = allFiles.map((x) => x.title);
        searchEngine = new Fuse(allFiles, searchOptions);
    });

function search(e) {
    if (validateInput(e)) {
        var input = getInput(e);

        if (input.length > 0) {
            var searchRes = searchEngine.search(input);
            var searchResTitles = searchRes.map((x) => x.item.title);
            var searchResPaths = searchRes.map((x) => x.item.relPath);
            updateSearchList(searchResTitles, searchResPaths);
        } else {
            updateSearchList(allFileTitles, allFilePaths);
        }
    }
}

function updateSearchList(newList, newListPaths) {
    var length = Math.min(newList.length, searchLengthCap);
    searchItemActive(0);

    for (let i = 0; i < searchLengthCap; i++) {
        var item = document.getElementById("searchItem" + i);
        if (i < length) {
            item.innerText = newList[i];
            item.setAttribute("href", newListPaths[i]);
            item.style.display = "block";
        } else {
            item.innerText = "";
            item.style.display = "none";
        }
    }

    searchBox.style.height = (55 + 40 * length) + "px";
}

function searchItemActive(newActiveNum) {
    var oldActive = document.getElementById("searchItem" + curSearchItemActive);
    oldActive.style.background = "";

    var newActive = document.getElementById("searchItem" + newActiveNum);
    var boxBG = root.getPropertyValue('--box-bg');
    newActive.style.background = boxBG;

    curSearchItemActive = newActiveNum;
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

export function searchOpen(newTab) {
    var element = document.getElementById("searchItem" + curSearchItemActive);
    var path = window.origin + "/mathwiki/" + element.getAttribute("href");

    searchClear();
    if (newTab) { window.open(path, "_blank"); }
    else { window.open(path, "_self"); }
}

function validateInput(e) {
    return !e || /^[a-zA-Z0-9]$/.test(e.key) || e.key === "Backspace";
}
function getInput(e) {
    var init = searchBar.value;

    if (e) {
        if (/^[a-zA-Z0-9]$/.test(e.key)) {
            init = searchBar.value + e.key;
        } else if (e.key === "Backspace") {
            init = init.substr(0, init.length - 1);
        }
    }

    return init;
}
