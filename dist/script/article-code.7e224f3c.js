"use strict";(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[139],{474:function(o,e,c){c.a(o,(async function(o,i){try{function t(){let o=$("#main pre");function e(){if(!$.__config.code.options.line)return!0;let o=$("code-box pre code");$.each(o,(function(e){let c=$(o[e]),i=c.html().replace(/\<br\>/g,"\n").split("\n"),t=[];$.each(i,(o=>{(i[o].trim()||o<i.length-1)&&"</code>"!==i[o]&&t.push('<code-line class="line-numbers-rows"></code-line>'+i[o])})),c.html(t.join("\n")),c.addClass("code-pre-line")}))}$.each(o,(function(e){let c=$(o[e]),i="code-"+$.__tools.randomString(6);c.wrap('<code-box id="'+i+'"></code-box>'),c.attr("boxid",i)})),(()=>{if($.__config.code.options.macStyle){let o=$("code-box");$.each(o,(function(e){$(o[e]).prepend('<div class="code-tools"></div>')}))}else o.css("border-radius","4px")})(),(()=>{let o=$("code-box");$.each(o,(function(e){let c=$(o[e]),i=c.attr("id"),t='<button boxid="'+i+'" type="button" class="clipboard code-copay-btn" data-clipboard-action="copy" data-clipboard-target="#'+i+' pre" aria-label="复制代码" ><i class="iconfont icon-fuzhi"></i></button>';c.prepend(t)})),$("code-box .code-copay-btn").click((function(){$(this).find("i").removeClass("icon-fuzhi").addClass("icon-right"),setTimeout("$('code-box button[boxid='"+$(this).attr("boxid")+"'] i').removeClass('icon-right').addClass('icon-fuzhi')",1500)})),o.on({mouseover:function(){$(this).find(".code-copay-btn").css({opacity:1,visibility:"visible"})},mouseout:function(){$(this).find(".code-copay-btn").css({opacity:0,visibility:"hidden"})}}),new ClipboardJS(".clipboard")})(),$.__config.code.options.maxHeight&&$("code-box pre").css("max-height",$.__config.code.options.maxHeight),"hljs"===$.__config.code.type.toLowerCase()?c.e(596).then(c.bind(c,564)).then((o=>{(0,o.default)(e)})):(o.css("background","#f5f5fa"),$("code-box .code-tools").css("background","#f5f5fa"),$("pre .hljs").css({background:"none",border:"0","border-radius":"0",padding:"0"}),e())}c.r(e),c.d(e,{default:function(){return t}}),await $.__tools.dynamicLoadingJs($.__config.default.clipboard).catch((o=>console.error("clipboard.js",o))),i()}catch(n){i(n)}}),1)}}]);