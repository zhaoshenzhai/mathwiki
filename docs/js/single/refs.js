import { toSmallCaps, toNumeral, getAbsUrl } from '../stringUtils.js';

const refsEl = document.getElementById('references');
const allText = document.documentElement.innerText;

export function initRefs() {
    var citeEls = allText.match(/\\cite{.*?}/g)
                         .filter((v,i,a)=>a.indexOf(v)==i);
    if (citeEls) {
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
        insertComma(mainRefEl);
        var title = document.createElement('span');
        title.innerText = ref.title;
        title.style.fontStyle = 'italic';
        mainRefEl.appendChild(title);
    }

    if (ref.edition) {
        insertComma(mainRefEl);
        var edition = document.createElement('span');
        edition.innerText = toNumeral(parseInt(ref.edition)) + ' ed.';
        mainRefEl.appendChild(edition);
    }

    if (ref.series) {
        insertComma(mainRefEl);
        var series = document.createElement('span');
        series.innerText = ref.series;
        mainRefEl.appendChild(series);
    }

    if (ref.volume) {
        insertComma(mainRefEl);
        var volume = document.createElement('span');
        volume.innerText = 'vol. ' + ref.volume;
        mainRefEl.appendChild(volume);
    }

    if (ref.publisher) {
        insertComma(mainRefEl);
        var publisher = document.createElement('span');
        publisher.innerText = ref.publisher;
        mainRefEl.appendChild(publisher);
    }

    if (ref.date) {
        insertComma(mainRefEl);
        var date = document.createElement('span');
        date.innerText = ref.date;
        mainRefEl.appendChild(date);
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

function insertComma(el) {
    var comma = document.createElement('span');
    comma.innerText = ', ';
    el.appendChild(comma);
}
