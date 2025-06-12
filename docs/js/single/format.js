import { contentEl } from '../single.js';
import { removeLineBreak, firstUpper, getAbsUrl } from '../stringUtils.js';

const envEls = document.getElementsByClassName('env');

export function initFormat() {
    formatTODO();
    formatLinks();
    formatEnvironments();
    formatCitations();
    formatInternalLinks();
    formatPercentage();
}

function formatEnvironments() {
    formatEnvironment('definition');
    formatEnvironment('proposition');
    formatEnvironment('corollary');
    formatEnvironment('theorem');
    formatEnvironment('example');
    formatEnvironment('remark');
    formatEnvironment('lemma');
    formatEnvironment('proof');
    formatEnvironment('fact');

    numberEnvironments();
}

function numberEnvironments() {
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
            if (num) {
                modText = ' ' + index;
                env.setAttribute('data-envNum', index);

                index++;
            }
            mod.style.fontWeight = 'bold';
            mod.style.fontStyle = 'normal';
        } else {
            mod.style.fontStyle = 'italic';
        }

        if (name) { modText += ' ('+name+')'; }
        mod.innerHTML = modText + '. ';
    }
}

function formatEnvironment(type) {
    var paraEls = document.querySelectorAll('p');
    for (var i = 0; i < paraEls.length; i++) {
        var b = new RegExp(`\\\\begin{${type}`, 'g');
        var bMatches = paraEls[i].innerText.match(b);
        if (bMatches) {
            var noNum = paraEls[i].innerText.includes('*');
            var noBox = paraEls[i].innerText.includes('_}');
            var bIndex = i, eIndex = i;
            for (eIndex = i + 1; eIndex < paraEls.length; eIndex++) {
                var end = new RegExp(`\\\end{${type}`);
                var endMatches = paraEls[eIndex].innerText.match(end);
                if (endMatches) { i = eIndex - 1; break; }
            }

            formatEnv(type, paraEls[bIndex], paraEls[eIndex], noNum, noBox);
        }
    }
}

function formatEnv(type, bEl, eEl, noNum, noBox) {
    var typeUpper = firstUpper(type);

    var title = document.createElement('span');
    title.innerText = typeUpper;
    title.classList.add('envTitle');
    if (type != 'proof') {
        title.style.fontWeight = 'bold';
    } else {
        title.style.fontStyle = 'italic';
    }

    var paraWrapper = document.createElement('div');
    paraWrapper.classList.add('env');
    paraWrapper.classList.add('env' + typeUpper);
    if (noBox) { paraWrapper.classList.add('envNoBox'); }
    paraWrapper = $(bEl).nextUntil(eEl).wrapAll(paraWrapper)[0];

    var wrapper = paraWrapper.parentNode;
    wrapper.prepend(title);

    var name = bEl.innerHTML.match(/\[.*\]/);

    if (name) {
        name = name[0].replace(/\[/, '').replace(/]/, '');
        wrapper.setAttribute('data-envName', name);
    }

    var id = bEl.innerText.match(/\\label{.*?}/);
    if (id) {
        id = id[0].replace(/\\label{/, '').replace(/}/, '');
        wrapper.setAttribute('id', id);
    }

    if (noNum) { wrapper.setAttribute('data-envNoNum', 'true'); }

    bEl.remove();
    eEl.remove();
}

function formatCitations() {
    format(contentEl, /\\cite{.*?}/g, function (match) {
        var replaceEl = document.createElement('span');
        var label = match.replace(/\\cite{/, '').replace(/}/, '');
        var link = document.createElement('a');
        link.setAttribute('href', '#ref-' + label);
        link.innerText = label;

        replaceEl.appendChild(document.createTextNode('['));
        replaceEl.appendChild(link);
        replaceEl.appendChild(document.createTextNode(']'));

        return replaceEl;
    });
}

function formatPercentage() {
    format(contentEl, /{%}/g, function (match) {
        var replaceEl = document.createElement('span');
        replaceEl.innerText = '%';
        return replaceEl;
    });
}

function formatTODO() {
    format(contentEl, /\\TODO\[.*?\]/g, function (match) {
        var replaceEl = document.createElement('p');

        var todo = document.createElement('span');
        todo.innerText = 'TODO: ';
        todo.style.color = 'red';
        todo.style.fontWeight = 'bold';

        var note = document.createElement('span');
        note.innerText = match.replace(/\\TODO\[/, '').replace(/]/, '');
        note.style.color = 'red';

        replaceEl.appendChild(todo);
        replaceEl.appendChild(note);
        return replaceEl;
    });

    format(contentEl, /\\TODO/g, function (match) {
        var replaceEl = document.createElement('p');

        var todo = document.createElement('span');
        todo.style.fontWeight = 'bold';
        todo.style.color = 'red';
        todo.innerText = 'TODO';

        replaceEl.appendChild(todo);
        return replaceEl;
    });
}

function formatLinks() {
    format(contentEl, /\\ref\[.*?\]{.*?}/g, function (match) {
        var replaceEl = document.createElement('span');

        var display = match.replace(/\\ref\[/, '').replace(/]\{.*?}/, '');
        var ref = match.replace(/\\ref\[.*?]/, '')
                       .replace(/{/, '').replace(/}/, '');

        var link = document.createElement('a');
        link.setAttribute('href', getAbsUrl() + ref);
        link.innerText = display;

        replaceEl.appendChild(link);
        return replaceEl;
    });

    format(contentEl, /\\ref{.*?}/g, function (match) {
        var replaceEl = document.createElement('span');
        var ref = match.replace(/\\ref{/, '').replace(/}/, '');

        var link = document.createElement('a');
        link.setAttribute('href', getAbsUrl() + ref);

        var open = document.createElement('img');
        open.setAttribute('src', getAbsUrl() + 'css/fa/link.svg');
        open.style.height = '12px';
        link.appendChild(open);

        replaceEl.appendChild(link);
        return replaceEl;
    });
}

function formatInternalLinks() {
    format(contentEl, /\\iref{.*?}/g, function (match) {
        var replaceEl = document.createElement('span');

        var ref = match.replace(/\\iref\{/, '').replace(/}/, '');
        var refEl = document.getElementById(ref);
        var refNum = refEl.getAttribute('data-envNum');

        var link = document.createElement('a');
        link.setAttribute('href', '#' + ref);
        link.innerText = refNum;
        link.addEventListener('click', (e) => { e.preventDefault();
            document.getElementById(ref).scrollIntoView();
        });

        replaceEl.appendChild(link);
        return replaceEl;
    });
}

function format(el, input, convert) {
    if (el.childNodes.length) {
        el.childNodes.forEach( child => format(child, input, convert));
    } else {
        var cont = removeLineBreak(el.textContent);
        var matches = cont.match(input);
        if (matches) { formatHelper(el, cont, matches, convert); }
    }
};

function formatHelper(el, cont, matches, convert) {
    var newEl = document.createElement('span');

    for (var i = 0; i < matches.length; i++) {
        var matchIndex = cont.indexOf(matches[i]);
        var prevText = cont.substring(0, matchIndex);
        newEl.appendChild(document.createTextNode(prevText));
        newEl.appendChild(convert(matches[i]));

        cont = cont.substring(matchIndex + matches[i].length, cont.length);
    }

    newEl.appendChild(document.createTextNode(cont));

    el.replaceWith(newEl);
}
