window.MathJax = {
    tex: {
        inlineMath: [['$', '$']],
        packages: {'[+]': ['mathtools']}
    },
    svg: { fontCache: 'global' },
    loader: {load: ['[tex]/mathtools']},
    processEscapes: true,
    processEnvironments: true
};

(function() {
    fetch('/mathwiki/preamble.sty')
        .then(response => response.text())
        .then((data) => {
            var preamble = document.getElementById('preamble');
            if (preamble) { preamble.innerHTML = '$' + data + '$'; }

            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
            script.async = true;
            document.head.appendChild(script);
        });
})();
