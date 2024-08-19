import { getBasePath } from './stringUtils.js';

var searchBox = document.getElementById('searchBox');
var searchBar = document.getElementById('searchBar');
var searchList = document.getElementById('searchList');

var allFiles, allFileTitles, allFilePaths;

var searchOptions = { includeScore: true, keys: ['title'] }
var searchLengthCap = 10;
var searchEngine;

var root = getComputedStyle(document.querySelector(':root'));

var curSearchItemActive = 0;
var curSearchLength = searchLengthCap;
export var searchActive = false;

window.search = search;
window.searchInit = searchInit;
window.searchOpen = searchOpen;
window.searchClear = searchClear;
window.searchItemActive = searchItemActive;

// Fetch from localStorage; if DNE, fetch from allFiles
document.addEventListener('DOMContentLoaded', (e) => {
    var recentFiles = localStorage['recentFiles'];
    if (recentFiles) {
        var allFiles = JSON.parse(recentFiles);
        var curPath = getBasePath(window.location.pathname);
        var curFileIndex = allFiles.findIndex(x => x.relPath == curPath);

        allFiles.unshift(allFiles.splice(curFileIndex, 1)[0]);
        allFilePaths = allFiles.map((x) => x.relPath);
        allFileTitles = allFiles.map((x) => x.title);
        searchEngine = new Fuse(allFiles, searchOptions);

        localStorage.setItem('recentFiles', JSON.stringify(allFiles));
    } else {
        fetch('/mathwiki/allFiles.json').then(response => response.json())
        .then((data) => {
            localStorage.setItem('recentFiles', JSON.stringify(data));
        });
    }
});

export function searchInit() {
    if (!searchBox.classList.contains('inPreview')) {
        searchActive = true;
        searchBox.style.display = 'flex';
        searchBar.focus();
        search();
    }
}

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
    curSearchLength = Math.min(newList.length, searchLengthCap);
    searchItemActive(0);

    for (let i = 0; i < searchLengthCap; i++) {
        var item = document.getElementById('searchItem' + i);
        if (i < curSearchLength) {
            item.innerText = newList[i];
            item.setAttribute('href', newListPaths[i]);
            item.style.display = 'block';
        } else {
            item.innerText = '';
            item.style.display = 'none';
        }
    }

    searchBox.style.height = (55 + ((23 + 17) * curSearchLength)) + 'px';
}

function searchItemActive(newActiveNum) {
    var oldActive = document.getElementById('searchItem' + curSearchItemActive);
    oldActive.style.background = '';

    var newActive = document.getElementById('searchItem' + newActiveNum);
    var boxBG = root.getPropertyValue('--box-bg');
    newActive.style.background = boxBG;

    curSearchItemActive = newActiveNum;
}

export function searchScroll(amount) {
    var newActiveNum = curSearchItemActive + amount;
    if (newActiveNum < 0) {
        newActiveNum = curSearchLength - 1;
    } else if (newActiveNum >= curSearchLength) {
        newActiveNum = newActiveNum % curSearchLength;
    }

    if (curSearchLength > 0) { searchItemActive(newActiveNum); }
}

export function searchOpen(newTab) {
    var element = document.getElementById('searchItem' + curSearchItemActive);
    var path = window.origin + '/mathwiki/' + element.getAttribute('href');

    if (curSearchLength > 0) {
        searchClear();
        if (newTab) { window.open(path, '_blank'); }
        else { window.open(path, '_self'); }
    }
}

export function searchClear() {
    searchActive = false;
    searchBox.style.display = 'none';
    searchBar.value = '';
}

function validateInput(e) {
    return !e || /^[a-zA-Z0-9]$/.test(e.key) || e.key === 'Backspace';
}
function getInput(e) {
    var init = searchBar.value;

    if (e) {
        if (/^[a-zA-Z0-9]$/.test(e.key)) {
            init = searchBar.value + e.key;
        } else if (e.key === 'Backspace') {
            init = init.substr(0, init.length - 1);
        }
    }

    return init;
}
