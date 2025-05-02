import { removeLineBreak, firstUpper } from '../stringUtils.js';

export async function initFormat() {
    formatCitations();

    await formatEnvironments('definition');
    return document.getElementsByClassName('env');
}

function formatEnvironments(type) {
    var paraEls = document.querySelectorAll('p');
    for (var i = 0; i < paraEls.length; i++) {
        var b = new RegExp(`\\\\begin{${type}`, 'g');
        var bMatches = paraEls[i].innerText.match(b);
        if (bMatches) {
            var noNum = paraEls[i].innerText.includes('*');
            var bIndex = i, eIndex = i;
            for (eIndex = i + 1; eIndex < paraEls.length; eIndex++) {
                var end = new RegExp(`\\\end{${type}`);
                var endMatches = paraEls[eIndex].innerText.match(end);
                if (endMatches) { i = eIndex - 1; break; }
            }

            formatEnv(type, paraEls[bIndex], paraEls[eIndex], noNum);
        }
    }
}

function formatEnv(type, bEl, eEl, noNum) {
    var typeUpper = firstUpper(type);

    var title = document.createElement('b');
    title.innerText = typeUpper;
    title.classList.add('envTitle');

    var paraWrapper = document.createElement('div');
    paraWrapper.classList.add('env');
    paraWrapper.classList.add('env' + typeUpper);
    paraWrapper = $(bEl).nextUntil(eEl).wrapAll(paraWrapper)[0];

    var wrapper = paraWrapper.parentNode;
    wrapper.prepend(title);

    var name = bEl.innerText.match(/\[.*?\]/);
    if (name) {
        name = name[0].replace(/\[/, '').replace(/]/, '');
        wrapper.setAttribute('data-envName', name);
    }

    var id = bEl.innerText.match(/\\label{.*?}/);
    if (id) {
        id = id[0].replace(/\\label{/, '').replace(/}/, '');
        wrapper.setAttribute('id', id);
    }

    var reference = bEl.innerText.match(/\\ref{.*?}/);
    if (reference) {
        var ref = reference[0].replace(/\\ref{/, '').replace(/:.*?}/, '');
        wrapper.setAttribute('data-envRef', ref);

        var refId = reference[0].replace(/.*?:/, '').replace(/}/, '');
        if (refId) { wrapper.setAttribute('data-envRefId', refId); }
    }

    if (noNum) { wrapper.setAttribute('data-envNoNum', 'true'); }

    bEl.remove();
    eEl.remove();
}

function formatCitations() {
    format(document.body, /\\cite{.*?}/g, function (match) {
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

    var firstIndex = cont.indexOf(matches[0]);
    var prevText = cont.substring(0, firstIndex);
    newEl.appendChild(document.createTextNode(prevText));

    for (var i = 0; i < matches.length; i++) {
        newEl.appendChild(convert(matches[i]));

        var curIndex = cont.indexOf(matches[i]);
        var nextIndex = cont.indexOf(matches[i + 1]);
        var startIndex = curIndex + matches[i].length;
        if (nextIndex != '-1') {
            var inText = cont.substring(startIndex, nextIndex);
            newEl.appendChild(document.createTextNode(inText));
        } else {
            var postText = cont.substring(startIndex, cont.length);
            newEl.appendChild(document.createTextNode(postText));
        }

    }

    el.replaceWith(newEl);
}
