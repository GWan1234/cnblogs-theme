!function(){var e,t,n,o,a,r,i,s,l,c,u,f,d={434:function(e,t){"use strict";t.Z={init(){$.__event.scroll={},$.__event.scroll.handle=[],$.__event.scroll.temScroll=0,$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,$(window).scroll((()=>{$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,this.handle.scroll(),$.__event.scroll.temScroll=$.__event.scroll.docScroll})),$.__event.resize={},$.__event.resize.handle=[],$(window).resize((()=>{this.handle.resize()}))},handle:{scroll:()=>{for(let e=0;e<$.__event.scroll.handle.length;e++)$.__event.scroll.handle[e]()},resize:()=>{for(let e=0;e<$.__event.resize.handle.length;e++)$.__event.resize.handle[e]();$.__tools.setDomHomePosition()}}}},258:function(e,t,n){var o={"./article":[330,148,269],"./article.js":[330,148,269],"./books":[898,148,463],"./books.js":[898,148,463],"./common/com-article":[515,148],"./common/com-article.js":[515,148],"./home":[565,628],"./home.js":[565,628],"./links":[480,148,583],"./links.js":[480,148,583]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=258,e.exports=a},299:function(e,t,n){"use strict";async function o(e="",t="GET",n={}){let o={method:t,mode:"cors",redirect:"follow",referrerPolicy:"no-referrer"};Object.keys(n).length&&(o.body=JSON.stringify(n));return(await fetch(e,o)).json()}n.d(t,{W:function(){return o}})}},m={};function p(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={exports:{}};return d[e](n,n.exports,p),n.exports}p.m=d,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(e){e&&!e.d&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},p.a=function(a,r,i){var s;i&&((s=[]).d=1),s&&(s.moduleId=a.id);var l,c,u,f=new Set,d=a.exports,m=new Promise((function(e,t){u=t,c=e}));m[t]=d,m[e]=function(e){s&&e(s),f.forEach(e),m.catch((function(){}))},m.moduleId=a.id,a.exports=m,r((function(a){var r;l=function(a){return a.map((function(a){if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var r=[];r.d=0,a.then((function(e){i[t]=e,o(r)}),(function(e){i[n]=e,o(r)}));var i={};return i[e]=function(e){e(r)},i}}var s={};return s[e]=function(){},s[t]=a,s}))}(a);var i=function(){return l.map((function(e){if(e[n])throw e[n];return e[t]}))},c=new Promise((function(t){(r=function(){t(i)}).r=0;var n=function(e){e!==s&&!f.has(e)&&(f.add(e),e&&!e.d&&(r.r++,e.push(r)))};l.map((function(t){t[e](n)}))}));return r.r?c:i()}),(function(e){e?u(m[n]=e):c(d),o(s)})),s&&(s.d=0)},a=[],p.O=function(e,t,n,o){if(!t){var r=1/0;for(c=0;c<a.length;c++){t=a[c][0],n=a[c][1],o=a[c][2];for(var i=!0,s=0;s<t.length;s++)(!1&o||r>=o)&&Object.keys(p.O).every((function(e){return p.O[e](t[s])}))?t.splice(s--,1):(i=!1,o<r&&(r=o));if(i){a.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[t,n,o]},p.F={},p.E=function(e){Object.keys(p.F).map((function(t){p.F[t](e)}))},p.H={},p.G=function(e){Object.keys(p.H).map((function(t){p.H[t](e)}))},i=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},p.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);p.r(n);var o={};r=r||[null,i({}),i([]),i(i)];for(var a=2&t&&e;"object"==typeof a&&!~r.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},p.d(n,o),n},p.d=function(e,t){for(var n in t)p.o(t,n)&&!p.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce((function(t,n){return p.f[n](e,t),t}),[]))},p.u=function(e){return"script/"+{14:"iconfont",18:"nh-banner-animation",77:"background-season",86:"circle-magic",87:"mouse-click",148:"page-common-com-article",170:"mouse-mo",191:"article-code",269:"page-article",289:"com-after",290:"background-particles",297:"gf-blink",315:"banner-images",379:"mouse-mouse",463:"page-books",545:"mouse-bubble",583:"page-links",586:"code-hljs",628:"page-home",663:"background-ribbons",732:"google-fonts",910:"com-before",984:"day-night"}[e]+"."+{14:"0d126d72",18:"f59691bc",77:"ade35c77",86:"14311b4d",87:"c16a07fd",148:"e9e89aa1",170:"f274edda",191:"cc1e9170",269:"16556483",289:"50d07915",290:"6bfa8039",297:"7c597813",315:"221aa353",379:"f0dce7e6",463:"c377cdff",545:"aacf8b6d",583:"dc34f858",586:"a6fa0fa1",628:"a9776c02",663:"dc953919",732:"eaa8b3a3",910:"408d89b2",984:"666b8fa8"}[e]+".js"},p.miniCssF=function(e){return"style/"+{14:"iconfont",18:"nh-banner-animation",148:"page-common-com-article",290:"background-particles",297:"gf-blink",379:"mouse-mouse",463:"page-books",583:"page-links",732:"google-fonts",910:"com-before",984:"day-night"}[e]+"."+{14:"c3455916",18:"7ff7a955",148:"f6daeb86",290:"457e1a14",297:"0cc7f6e2",379:"6f5882cf",463:"544fc434",583:"09bcd29b",732:"66c39700",910:"c9da3625",984:"f9a1dfc8"}[e]+".css"},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s={},l="cnblogs-theme:",p.l=function(e,t,n,o){if(s[e])s[e].push(t);else{var a,r;if(void 0!==n)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var u=i[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==l+n){a=u;break}}a||(r=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,p.nc&&a.setAttribute("nonce",p.nc),a.setAttribute("data-webpack",l+n),a.src=e),s[e]=[t];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=s[e];if(delete s[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),r&&document.head.appendChild(a)}},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;p.g.importScripts&&(e=p.g.location+"");var t=p.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e}(),c=function(e){return new Promise((function(t,n){var o=p.miniCssF(e),a=p.p+o;if(function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=(i=n[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){var i;if((a=(i=r[o]).getAttribute("data-href"))===e||a===t)return i}}(o,a))return t();!function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),o(l)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},u={179:0},p.f.miniCss=function(e,t){u[e]?t.push(u[e]):0!==u[e]&&{14:1,18:1,148:1,290:1,297:1,379:1,463:1,583:1,732:1,910:1,984:1}[e]&&t.push(u[e]=c(e).then((function(){u[e]=0}),(function(t){throw delete u[e],t})))},function(){var e={179:0};p.f.j=function(t,n){var o=p.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,a){o=e[t]=[n,a]}));n.push(o[2]=a);var r=p.p+p.u(t),i=new Error;p.l(r,(function(n){if(p.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,o[1](i)}}),"chunk-"+t,t)}},p.F.j=function(t){if(!p.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");p.nc&&n.setAttribute("nonce",p.nc),n.rel="prefetch",n.as="script",n.href=p.p+p.u(t),document.head.appendChild(n)}},p.H.j=function(t){if(!p.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");n.charset="utf-8",p.nc&&n.setAttribute("nonce",p.nc),n.rel="preload",n.as="script",n.href=p.p+p.u(t),document.head.appendChild(n)}},p.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],i=n[1],s=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)p.o(i,o)&&(p.m[o]=i[o]);if(s)var c=s(p)}for(t&&t(n);l<r.length;l++)a=r[l],p.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return p.O(c)},n=self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),f={148:[18],191:[586],269:[191,18],289:[290,984,379,663,77,545,87,170],463:[297,18],583:[297,18],628:[86],910:[315]},p.f.prefetch=function(e,t){Promise.all(t).then((function(){var t=f[e];Array.isArray(t)&&t.map(p.E)}))},function(){var e={910:[732,14]};p.f.preload=function(t){var n=e[t];Array.isArray(n)&&n.map(p.G)}}(),p.O(0,[179],(function(){[910,289,148,269,463,628,583].map(p.E)}),5);var h={};!function(){"use strict";var e=JSON.parse('{"info":{"name":"","startDate":"2021-01-01","avatar":"","blogIcon":""},"sidebar":{"navList":[],"customList":{},"infoBackground":"","titleMsg":"欢迎访问本博客~","blogStatus":true,"submenu":{"pointsRank":false,"latestPosts":false,"latestComment":false,"myTags":false,"postsClassify":false,"articleClassify":false,"readRank":false,"recommendRank":false,"postsArchive":false,"articleArchive":false,"customList":false}},"banner":{"text":false,"home":{"background":[],"title":[],"titleSource":"jinrishici"},"article":{"background":[]}},"loading":{"rebound":{"tension":16,"friction":5},"spinner":{"id":"spinner","radius":90,"sides":3,"depth":4,"colors":{"background":"#f0f0f0","stroke":"#272633","base":null,"child":"#272633"},"alwaysForward":true,"restAt":0.5,"renderBase":false}},"fontIconExtend":"","progressBar":{"id":"top-progress-bar","color":"#77b6ff","height":"2px","duration":0.2},"title":{"onblur":"(oﾟvﾟ)ノ Hi","onblurTime":500,"focus":"(*´∇｀*) 欢迎回来！","focusTime":1000},"footer":{"text":{"left":"","right":"","iconFont":{"icon":"icon-xinlv","color":"red","fontSize":"16px"}},"style":2,"aplayer":{"enable":false,"options":{"id":"3778678","server":"netease","type":"playlist","auto":"netease","fixed":"true","mini":"true","autoplay":"false","theme":"#2980b9","loop":"all","order":"random","preload":"auto","volume":"0.7","mutex":"true","lrcType":"0","listFolded":"true","listMaxHeight":"340px","storageHame":"metingjs"}}},"links":{"footer":[],"page":[]},"umami":{"url":"","shareId":""},"rtMenu":{"qrCode":"","reward":{"alipay":"","wechatpay":""},"downScrollDom":""},"switchDayNight":{"enable":true,"nightMode":false,"auto":{"enable":false,"dayHour":5,"nightHour":19}},"animate":{"bannerImages":{"enable":false,"options":{"itemNum":5,"current":0,"sort":1,"time":30000}},"homeBanner":{"enable":false,"options":{"radius":15,"density":0.2,"color":"rgba(255,255,255, .2)","clearOffset":0.3}},"articleTitle":{"enable":true},"articleBanner":{"enable":false},"background":{"ribbons":{"enable":false,"options":{"colorSaturation":"60%","colorBrightness":"50%","colorAlpha":0.5,"colorCycleSpeed":5,"verticalPosition":"random","horizontalSpeed":200,"ribbonCount":3,"strokeSize":0,"parallaxAmount":-0.2,"animateSections":true}},"particles":{"enable":false,"options":{}},"season":{"enable":false,"options":{"img":"","size":40}}},"mouse":{"bubble":{"enable":false,"options":{"live":30,"colors":["149, 197, 252","224, 199, 252"],"quantity":15,"size":5}},"mouse":{"enable":false,"options":{"size":8,"sizeF":36}},"mo":{"enable":false,"options":{"radius":{"0":100},"count":5,"children":{"shape":"polygon","fill":{"cyan":"yellow"},"radius":20,"rotate":{"360":0},"duration":2000}}},"click":{"enable":false,"options":{}}},"infoName":{"enable":false},"avatar":{"enable":false}},"code":{"type":"","options":{"hljs":{"theme":"atom-one-dark-reasonable","languages":[]},"maxHeight":"","line":false,"macStyle":true}},"articleSuffix":{"imgUrl":"","aboutHtml":"","copyrightHtml":"","supportHtml":"","copyText":{"enable":false,"length":100,"copyright":""}},"articleDirectory":{"position":"right","minBodyWeight":900,"autoWidthScroll":false},"consoleList":[],"bookList":[],"memorialDays":["12-13"],"articleContent":{"link":false,"iconfont":false,"iconfontArr":["hebaodan","bingtanghulu","kesong","qianceng","fengmi","feiyuguantou","shengjian","youtiao","yuzijiang","zhutongfan","doujiang","sanmingzhi","paofu","shanbei","dangaojuan","futejia","huangyou","xiangchang","banji","danta","qingning","lajiao","shizi","mojituo","pijiu","putaojiu","kouxiangtang","xiangcaobingqilin","jiaozi","tilamisu","huoguo","hongshu","bingkuai","mianhuatang","paobing","meishikafei","mantou","qishui","ganlan","jiroujuan","guodong","baozi","pingguo","chengzi","qingjiao","jidan","xihongshi","mangguo","baocai","niunai","mianbao","huluobu","zhangyu","pangxie","longxia","yangcong","rou","jitui","huage","xianyu","mogu","qiezi","xilanhua","ningmeng","liulian","banli","sanwenyu","tudou","xigua","nangua","huolongguo","fantuan","zhusun","shuiluobu","shanzhu","lanmei","shiliu","yezi","tiangua","mihoutao","boluo","kaixinguo","hetao","xiaweiyiguo","huasheng","bigenguo","kuihuazi","songzi","xiguazi","badanmu","yaoguo","danhuangsu","dangao","binggan","buding","tangguo","qiaokeli","hongzao","candou","putaogan","manyuemei","taozi","xiangjiao","caomei","niuyouguo","hamigua","chelizi","li","bale","kafei1","shutiao","zhenzhunaicha","xuegao","nailao","kele","tiantong","hanbao","xiezishousi","baomihua","regou","makalong","tianfuluo","juzi","baixiangguo","putao","shaomai","yumi","pipa","yangtao","youzi","lianwu","wuhuaguo","paomian","wandou","huanggua","suantou","tiantianquan","shupian","huafubing","bangbangtang","shousi","lizhi","doufu","mocha","boluomi","zhouzi","bingsha","suannai","pisa","haixing","haizhe","tongluoshao","nuomici","kuangquanshui","roujiamo","cha","zhangyuxiaowanzi","chengzhi","yuancaitou","baicai"]},"hooks":{},"default":{"version":"v2.2.5","iconfont":"https://at.alicdn.com/t/c/font_3628204_br29bzmhrps.js","avatar":"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp","mojs":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/mo-js/0.288.2/mo.min.js","moment":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/moment.js/2.29.1/moment.min.js","gsap":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gsap/3.9.1/gsap.min.js","highlight":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/highlight.js/11.4.0/highlight.min.js","hljscss":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/highlight.js/11.4.0/styles/","fancybox":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/fancybox/3.5.7/jquery.fancybox.min.js","fancyboxcss":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/fancybox/3.5.7/jquery.fancybox.min.css","bootstrap":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/bootstrap/5.0.0-beta3/js/bootstrap.min.js","clipboard":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/clipboard.js/2.0.10/clipboard.min.js","optiscroll":"https://npm.elemecdn.com/optiscroll@3.2.1/dist/optiscroll.min.js","optiscrollcss":"https://npm.elemecdn.com/optiscroll@3.2.1/dist/optiscroll.css","snapsvg":"https://npm.elemecdn.com/snapsvg-cjs@0.0.6/dist/snap.svg.js","toprogress":"https://npm.elemecdn.com/toprogress@0.1.3/ToProgress.min.js","jqueryrotate":"https://cdn.jsdelivr.net/gh/wilq32-pwitkowski/jqueryrotate@master/jQueryRotateCompressed.js","aplayer":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.js","aplayercss":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.css","meting":"https://cdn.staticfile.org/meting/2.0.1/Meting.min.js"}}');let t={url:"",user:"",pageType:"",articleId:""};t.url=window.location.href;let n=t.url.split("/");t.user=n[3],t.homeUrl=[n[0],n[1],n[2],n[3]].join("/");let o=$("#topics").length;t.pageType=o?$("#bookListFlg").length?"books":$("#linkListFlg").length?"links":"article":"home",o&&(t.articleId=n[n.length-1].split(".")[0]);var a=t,r=p(299),i={getTodayStart:()=>moment().startOf("day").format("x"),getTodayEnd:()=>moment().endOf("day").format("x"),getYesterdayStart:()=>moment().subtract(1,"days").startOf("day").format("x"),getYesterdayEnd:()=>moment().subtract(1,"days").endOf("day").format("x"),getTodayDate:()=>moment().format("MM-DD"),articleInfo:(e,t)=>{let n=1===t?"icon-marketing_fill":"icon-label-fill",o=1===t?"article-tag-class-color":"article-tag-color";$.each(e,(t=>{let a=$(e[t]);a.prepend('<span class="iconfont '+n+'"></span>'),$("#articleInfo").append('<a href="'+a.attr("href")+'" target="_blank"><span class="article-info-tag '+o+'">'+a.text()+"</span></a>")}))},tempReplacement:(e,t,n)=>{let o=new RegExp("##"+t+"##","g");return e.replace(o,n)},batchTempReplacement:(e,t)=>{let n=e;return $.each(t,(function(e){let o=t[e],a=new RegExp("##"+o[0]+"##","g");n=n.replace(a,o[1])})),n},dynamicLoadingCss:e=>{$("head").append("<link>");$("head").children(":last").attr({rel:"stylesheet",type:"text/css",href:e})},dynamicLoadingJs:e=>new Promise(((t,n)=>{$.ajax({type:"GET",dataType:"script",cache:!0,url:e,success:function(e){t(e)},error:function(e){n(e)}})})),htmlFiltrationScript:e=>{let t=new RegExp("<script.*<\/script>","ig");return e.replace(t,"")},clearIntervalTimeId:e=>{null!=e&&window.clearInterval(e)},actScroll:(e,t)=>{$("html,body").stop().animate({scrollTop:e},t)},getScrollPercent:()=>($(window).scrollTop()/($(document).height()-$(window).height())*100).toFixed(0),randomNum:function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1);case 2:return parseInt(Math.random()*(t-e+1)+e);default:return 0}},setDomHomePosition:()=>{$("#home").css("margin-top",$(".main-header").outerHeight()+"px")},getRunDate:e=>{let t=e.split("-"),n=new Date;n.setUTCFullYear(t[0],t[1]-1,t[2]),n.setUTCHours(0,0,0,0);let o=n,a=((new Date).getTime()-o.getTime())/864e5,r=Math.floor(a),i=-24*(r-a),s=Math.floor(i),l=-60*(s-i),c=Math.floor(-60*(s-i));return{daysold:r,hrsold:s,minsold:c,seconds:Math.floor(-60*(c-l)).toString()}},setCookie:(e,t,n)=>{let o=new Date;o.setTime(o.getTime()+1e3*n),document.cookie=e+"="+escape(t)+"; expires="+o.toGMTString()+"; path=/"},getCookie:e=>{let t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return t=document.cookie.match(n),t?unescape(t[2]):null},randomString:e=>{e=e||32;let t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length,o="";for(let a=0;a<e;a++)o+=t.charAt(Math.floor(Math.random()*n));return o},minToTime:e=>{let t=parseInt(e),n=parseInt(60*(e-t));return n=1===(""+n).length?"0"+n:n,`${t}:${n}`},compareVersion:(e,t)=>{const n=e.split("."),o=t.split(".");let a=0;for(;a<n.length||a<o.length;){let e=0,t=0;if(a<n.length&&(e=parseInt(n[a])),a<o.length&&(t=parseInt(o[a])),e>t)return 1;if(e<t)return-1;a++}return 0},getVersion:()=>{let e=localStorage.getItem("version");if(e)return(void 0).compareVersion(e,$.__config.default.version);(0,r.W)("https://api.github.com/repos/wangyang0210/cnblogs-theme/releases/latest").then((e=>{localStorage.setItem("localVersion",e.tag_name),localStorage.setItem("repoUrl",e.html_url)}))}},s=p(434);$(document).ready((function(){$.__config=$.extend(!0,e,window?.cnblogsConfig||{}),$.__status=a,$.__tools=i,$.__timeIds={},$.__event={},$.__config.info.name||=$.__status.user,$.__tools.dynamicLoadingJs($.__config.default.moment).then((e=>{p(258)(`./${$.__status.pageType}`).then((e=>{const t=e.default;p.e(910).then(p.bind(p,361)).then((e=>{(0,e.default)(),t(),p.e(289).then(p.bind(p,987)).then((e=>{(0,e.default)(),$.__tools.setDomHomePosition(),s.Z.handle.scroll(),s.Z.handle.resize()}))}))}))})).catch((e=>console.error("moment.js",e)))}))}(),h=p.O(h)}();