var disqus_shortname="samsuryid";
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
function readURL(input) {
if (input &amp;&amp; input[0]) {
var reader = new FileReader();
reader.onload = function (e) {
$(&quot;#result .base64&quot;).val( e.target.result )
$(&quot;#result&quot;).slideDown();
}
reader.readAsDataURL(input[0]);
}
}
var I = document.getElementById(&quot;I&quot;);
var B = document.getElementById(&quot;B&quot;);
var O = document.getElementById(&quot;O&quot;);
B.addEventListener(&quot;click&quot;, function() {
var Output = minifyCSS(I.value);
O.value = Output;
}, false);
function HTMLcompressor(){
 var allHTML = document.getElementById(&quot;oldCode&quot;).value;
 var headHTML = &quot;&quot;;
 var removeThis = &quot;&quot;;
 var headstatus = document.getElementById(&quot;headstatus&quot;).checked;
 if(headstatus != true){
  //Compress all the things!
  allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm,&quot;&quot;);
  allHTML = allHTML.replace(/\s+/g,&quot; &quot;);
 }else{
  //Don&#39;t compress the head
  allHTML = allHTML.replace(new RegExp(&quot;&lt;/HEAD&quot;,&quot;gi&quot;),&#39;&lt;/head&#39;);
  allHTML = allHTML.replace(new RegExp(&quot;&lt;/head &quot;,&quot;gi&quot;),&#39;&lt;/head&#39;);
  
  var bodySplit = &quot;&lt;/head&gt;&quot;; 
  var i = allHTML.indexOf(bodySplit) != -1;
  if(i == true){
   var bodySplit = &quot;&lt;/head&gt;&quot;; 
   tempo = allHTML.split(new RegExp(bodySplit,&#39;i&#39;));
   headHTML = tempo[0];
   allHTML = tempo[1];
  }else{
   bodySplit = &quot;&quot;; 
  }
  allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm,&quot;&quot;);
  allHTML = allHTML.replace(/\s+/g,&quot; &quot;);
  allHTML = headHTML + bodySplit + &#39;\n&#39; + allHTML;
 }
 document.getElementById(&quot;newCode&quot;).value = allHTML;
}
