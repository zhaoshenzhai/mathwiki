window.MathJax = {
    tex: { inlineMath: [['$', '$']] },
    svg: { fontCache: 'global' },
    processEscapes: true,
    processEnvironments: true
};

(function() {
    fetch("/MathWiki/preamble.sty")
        .then(response => response.text())
        .then((data) => {
            var preamble = document.getElementById("preamble");
            if (preamble) { preamble.innerHTML = "$" + data + "$"; }

            var script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
            script.async = true;
            document.head.appendChild(script);
        });
})();
