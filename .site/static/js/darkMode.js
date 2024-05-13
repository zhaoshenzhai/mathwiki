var darkMode = false;

const root = document.querySelector(':root');
const rootC = getComputedStyle(root);

window.toggleDark = toggleDark;
window.isDark = isDark;

const lightVals = {
    "bg":                  rootC.getPropertyValue("--bg"),
    "fg":                  rootC.getPropertyValue("--fg"),
    "link":                rootC.getPropertyValue("--link"),
    "link-hover":          rootC.getPropertyValue("--link-hover"),
    "nav-button-bg":       rootC.getPropertyValue("--nav-button-bg"),
    "nav-button-hover-bg": rootC.getPropertyValue("--nav-button-hover-bg"),
    "box-bg":              rootC.getPropertyValue("--box-bg"),
    "quote":               rootC.getPropertyValue("--quote")
};

const darkVals = {
    "bg":                  "rgb(30,33,39)",
    "fg":                  "rgb(240,240,240)",
    "link":                "rgb(86,182,194)",
    "link-hover":          "rgb(99,210,224)",
    "nav-button-bg":       "rgb(200,200,200,0.2)",
    "nav-button-hover-bg": "rgb(150,150,150,0.2)",
    "box-bg":              "rgba(255,255,255,0.05)",
    "quote":               "rgba(255,255,255,0.25)"
};

export function toggleDark() {
    var icons = document.getElementsByClassName("icon");
    var navButtons = document.getElementsByClassName("navButton");
    var frames = document.getElementsByClassName("frame");

    if (darkMode) {
        for(var [key, val] of Object.entries(lightVals)) {
            root.style.setProperty('--' + key, val);
        }
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.filter = "";
        }
        for (var i = 0; i < navButtons.length; i++) {
            navButtons[i].style.filter = "";
        }
    } else {
        for(var [key, val] of Object.entries(darkVals)) {
            root.style.setProperty('--' + key, val);
        }
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.filter = "invert(100%)";
        }
        for (var i = 0; i < navButtons.length; i++) {
            navButtons[i].style.filter = "invert(100%)";
        }
    }

    for (var i = 0; i < frames.length; i++) {
        var frameDoc = frames[i].contentDocument;
        frameDoc.body.style.transition = "";
        frameDoc.getElementById("toggleDark").click();
    }

    darkMode = !darkMode;
}

export function isDark() { return darkMode; }
