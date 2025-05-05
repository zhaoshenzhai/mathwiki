import { getAbsUrl } from '../stringUtils.js';

const envEls = document.getElementsByClassName('env');

export function initEnvs() {
    var index = 1;

    for (var i = 0; i < envEls.length; i++) {
        var env = envEls[i];
        var title = env.querySelector('.envTitle');

        var name = env.getAttribute('data-envName');
        var num = !env.getAttribute('data-envNoNum');

        var mod = document.createElement('span');
        title.parentNode.insertBefore(mod, title.nextSibling);

        var modText = '';

        if (!env.classList.contains('envProof')) {
            if (num) { modText = ' ' + index; index++; }
            mod.style.fontWeight = 'bold';
            mod.style.fontStyle = 'normal';
        } else {
            mod.style.fontStyle = 'italic';
        }

        if (name) { modText += ' ('+name+')'; }
        mod.innerHTML = modText + '. ';
    }
}
