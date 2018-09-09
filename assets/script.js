/* loaded */
document.documentElement.className += ' loaded';

/* hljs */
(function () {
    var codes = document.querySelectorAll('pre > code');
    for (var i = 0, len = codes.length; i < len; i++) {
        var block = codes[i];
        hljs.highlightBlock(block);
    }
})();
