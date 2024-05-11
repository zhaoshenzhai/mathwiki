const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.js";
document.head.appendChild(script);

var allFiles;

fetch("/mathwiki/allFiles.json")
    .then(response => response.json())
    .then((data) => { allFiles = data; });

function search() {
    const options = { keys: ['title'] }
    const fuse = new Fuse(allFiles, options);

    const result = fuse.search('ryll')
    console.log(result);
}

// Key listeners
var metaKeyDown = false;
document.addEventListener('keydown', function(event) {
    if (event.key == "Meta") { metaKeyDown = true; }
});

document.addEventListener('keyup', function(event) {
    if (event.key == "Meta") { metaKeyDown = false; }
});

document.addEventListener('keypress', function(event) {
    if (event.key == "Enter" && metaKeyDown) { search(); }
});
