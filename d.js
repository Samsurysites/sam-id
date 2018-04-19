var disqus_shortname="virlyzid";
var disqus_url = disqus_blogger_current_url;

(function () {
    "use strict";
    var get_comment_block = function () {
        var block = document.getElementById('comments');
        if (!block) {
            block = document.getElementById('disqus-blogger-comment-block');
        }
        return block;
    };
    var comment_block = get_comment_block();
    if (!!comment_block) {
        var disqus_div = document.createElement('div');
        disqus_div.id = 'disqus_thread';
        comment_block.innerHTML = '';
        comment_block.appendChild(disqus_div);
        comment_block.style.display = 'block';
        var dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
    }
})();
    var disqus_loaded = false;
    function load_disqus() {
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_index.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
    disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
    };
