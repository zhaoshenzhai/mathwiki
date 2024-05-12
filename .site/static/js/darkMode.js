var darkMode = false;

const root = document.querySelector(':root');
const rootC = getComputedStyle(root);

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
    "nav-button-bg":       "rgba(0,0,0,0.5)",
    "nav-button-hover-bg": "rgba(55,55,55,0.5)",
    "box-bg":              "rgba(255,255,255,0.05)",
    "quote":               "rgba(255,255,255,0.25)"
};

window.toggleDark = toggleDark;

export function toggleDark() {
    if (darkMode) {
        for(var [key, val] of Object.entries(lightVals)) {
            root.style.setProperty('--' + key, val);
        }
    } else {
        for(var [key, val] of Object.entries(darkVals)) {
            root.style.setProperty('--' + key, val);
        }
    }

    darkMode = !darkMode;
}
