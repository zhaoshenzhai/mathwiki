import { toSmallCaps, toNumeral, getAbsUrl } from '../stringUtils.js';

const refsEl = document.getElementById('references');
const allText = document.documentElement.innerText;

export function initRefs() {
    var citeEls = allText.match(/\\cite{.*?}/g);
    if (citeEls) {
        citeEls = citeEls.filter((v,i,a)=>a.indexOf(v)==i);
        initRefHeader();

        fetch('/mathwiki/references.json').then(response => response.json())
        .then((data) => {
            for (var i = 0; i < citeEls.length; i++) {
                var cite = citeEls[i].replace(/\\cite{/, '').replace(/}/, '');
                var citeJSON = data.find(option => cite in option);
                var refEl = formatReference(citeJSON[cite]);
                refsEl.appendChild(refEl);
            }
        });
    }
}

function initRefHeader() {
    var header = document.createElement('div');
    refsEl.appendChild(header);

    header.classList.add('center');
    header.classList.add('h1Title');
    header.style.display = 'block';
    header.appendChild(toSmallCaps('References'));

}

function formatReference(ref) {
    var el = document.createElement('div');

    if (ref.label) {
        var label = document.createElement('span');
        label.innerText = '[' + ref.label + ']';
        el.appendChild(label);
        el.setAttribute('id', 'ref-' + ref.label);
    }

    var mainRefEl = document.createElement('span');
    el.appendChild(mainRefEl);

    if (ref.author) {
        var length = ref.author.length;
        for (var i = 0; i < length; i++) {
            if (i != 0) {
                var comma = document.createElement('span');
                if (length > 2) {
                    if (i == length - 1) { comma.innerText = ', and '; }
                    else { comma.innerText = ', '; }
                } else { comma.innerText = ' and '; }
                el.appendChild(comma);
            }

            var author = document.createElement('span');
            author.innerText = ref.author[i];
            mainRefEl.appendChild(author);
        }
    }

    if (ref.title) {
        var dot = document.createElement('span');
        dot.innerText = '. ';
        mainRefEl.appendChild(dot);
        var title = document.createElement('span');
        title.innerText = ref.title;
        if (ref.type == 'article') {
            title.innerText = '“' + title.innerText + '”';
        } else {
            title.style.fontStyle = 'italic';
        }
        mainRefEl.appendChild(title);
    }

    if (ref.type == 'book' || ref.type == 'online') {
        if (ref.edition) { insertText(toNumeral(parseInt(ref.edition)) + ' ed.', ref, mainRefEl); }
        if (ref.series) { insertText(ref.series, ref, mainRefEl); }
        if (ref.volume) { insertText('vol. ' + ref.volume, ref, mainRefEl); }
        if (ref.publisher) { insertText(ref.publisher, ref, mainRefEl); }
        if (ref.date) { insertText(ref.date, ref, mainRefEl); }

    } else if (ref.type == 'article') {
        if (ref.journal) {
            insertComma(mainRefEl);
            var inText = document.createElement('span');
            inText.innerText = 'In: ';
            var journal = document.createElement('span');
            journal.innerText = ref.journal;
            journal.style.fontStyle = 'italic';
            mainRefEl.appendChild(inText);
            mainRefEl.appendChild(journal);
        }

        if (ref.volume) {
            var volume = document.createElement('span');
            volume.innerText = ' ' + ref.volume;
            volume.style.fontWeight = 'bold';
            mainRefEl.appendChild(volume);
        }

        if (ref.date) {
            var date = document.createElement('span');
            date.innerText = ' (' + ref.date + ')';
            mainRefEl.appendChild(date);
        }

        if (ref.pages) { insertText('pp. ' + ref.pages, ref, mainRefEl); }
    }

    if (ref.link) {
        insertComma(mainRefEl);
        var link = document.createElement('a');
        link.href = ref.link;
        mainRefEl.appendChild(link);

        var open = document.createElement('img');
        open.setAttribute('src', getAbsUrl() + 'css/fa/link.svg');
        open.style.height = '17px';
        link.appendChild(open);
    }


    var stop = document.createElement('span');
    stop.innerText = '.';
    mainRefEl.appendChild(stop);

    return el;
}

function insertComma(mainRefEl) {
    var comma = document.createElement('span');
    comma.innerText = ', ';
    mainRefEl.appendChild(comma);
}

function insertText(text, ref, mainRefEl) {
    insertComma(mainRefEl);
    var element = document.createElement('span');
    element.innerText = text;
    mainRefEl.appendChild(element);
}
