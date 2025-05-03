import { getAbsUrl } from '../stringUtils.js';

const envEls = document.getElementsByClassName('env');

export function initEnvs() {
    var index = 1;

    for (var i = 0; i < envEls.length; i++) {
        var env = envEls[i];
        var title = env.querySelector('.envTitle');

        var name = env.getAttribute('data-envName');
        var num = !env.getAttribute('data-envNoNum');
        var ref = env.getAttribute('data-envRef');
        var refId = env.getAttribute('data-envRefId');

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

        if (ref) {
            var refEnv = document.createElement('a');
            env.insertBefore(refEnv, title);

            refEnv.appendChild(title);
            refEnv.appendChild(mod);
            refEnv.href = getAbsUrl() + ref;

            if (refId) { refEnv.href += '#' + refId; }
        }
    }
}
