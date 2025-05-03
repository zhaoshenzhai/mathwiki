var toggle = document.getElementById('toggleDark');
var toggleIcon = document.getElementById('toggleDarkIcon');
var darkMode = false;

window.toggleDark = toggleDark;

const rootC = getComputedStyle(document.querySelector(':root'));

const lightVals = {
    'bg':                   rootC.getPropertyValue('--bg'),
    'fg':                   rootC.getPropertyValue('--fg'),
    'link':                 rootC.getPropertyValue('--link'),
    'link-hover':           rootC.getPropertyValue('--link-hover'),
    'link-ghost':           rootC.getPropertyValue('--link-ghost'),
    'link-ghost-hover':     rootC.getPropertyValue('--link-ghost-hover'),
    'ctrl-button-bg':       rootC.getPropertyValue('--ctrl-button-bg'),
    'ctrl-button-hover-bg': rootC.getPropertyValue('--ctrl-button-hover-bg'),
    'box-bg':               rootC.getPropertyValue('--box-bg'),
    'quote':                rootC.getPropertyValue('--quote'),
    'mask-bg-1':            rootC.getPropertyValue('--mask-bg-1'),
    'mask-bg-2':            rootC.getPropertyValue('--mask-bg-2')
};

const darkVals = {
    'bg':                   'rgb(30,33,39)',
    'fg':                   'rgb(220,220,220)',
    'link':                 'rgb(86,182,194)',
    'link-ghost':           'rgba(86,182,194,0.6)',
    'link-hover':           'rgb(99,210,224)',
    'link-ghost-hover':     'rgba(99,210,224,0.6)',
    'ctrl-button-bg':       'rgb(200,200,200,0.2)',
    'ctrl-button-hover-bg': 'rgb(150,150,150,0.2)',
    'box-bg':               'rgba(255,255,255,0.05)',
    'quote':                'rgba(255,255,255,0.25)',
    'mask-bg-1':            'rgba(30,33,39,0.2)',
    'mask-bg-2':            'rgba(30,33,39,1)'
};

export function toggleDark(doc, noTransition, update, frame) {
    var allListenDarkEl = doc.querySelectorAll('.listenDark, p, h1, a');
    var icons = doc.getElementsByClassName('icon');
    var images = doc.getElementsByClassName('tikz');
    var ctrlButtons = doc.getElementsByClassName('ctrlButton');

    var curRoot = doc.querySelector(':root');

    if (noTransition) {
        allListenDarkEl.forEach(el => {
            el.classList.add('noTransition');
        });
    }

    if (darkMode) {
        for(var [key, val] of Object.entries(lightVals)) {
            curRoot.style.setProperty('--' + key, val);
        }
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.filter = '';
        }
        for (var i = 0; i < images.length; i++) {
            images[i].style.filter = '';
        }
        for (var i = 0; i < ctrlButtons.length; i++) {
            ctrlButtons[i].style.filter = '';
        }

        toggleIcon.src = toggleIcon.src.replace(/sun\.svg$/, 'moon.svg');
        if (update) { localStorage['darkMode'] = 'light'; }
    } else {
        for(var [key, val] of Object.entries(darkVals)) {
            curRoot.style.setProperty('--' + key, val);
        }
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.filter = 'invert(100%)';
        }
        for (var i = 0; i < images.length; i++) {
            images[i].style.filter = 'invert(86%)';
        }
        for (var i = 0; i < ctrlButtons.length; i++) {
            ctrlButtons[i].style.filter = 'invert(100%)';
        }

        toggleIcon.src = toggleIcon.src.replace(/moon\.svg$/, 'sun.svg');
        if (update) { localStorage['darkMode'] = 'dark'; }
    }

    if (frame) {
        var frames = doc.getElementsByClassName('frame');
        for (var i = 0; i < frames.length; i++) {
            var frameDoc = frames[i].contentDocument;
            toggleDark(frameDoc, false, false, false);
        }

        darkMode = !darkMode;
    }

    if (noTransition) {
        allListenDarkEl.forEach(el => {
            el.offsetHeight;
            el.classList.remove('noTransition');
        });
    }
}
