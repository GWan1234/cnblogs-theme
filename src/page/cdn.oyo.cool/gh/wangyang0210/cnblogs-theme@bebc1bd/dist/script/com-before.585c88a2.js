"use strict";
(self.webpackChunkcnblogs_theme = self.webpackChunkcnblogs_theme || []).push([[542], {
    759: function(s, e) {
        e.A = '<div class="container"> <div class="menu-wrap optiscroll" id="menuWrap" style="display:none"> <div class="close-button" id="close-button"> <i class="iconfont icon-close"></i> </div> <div class="sidebar-header"> <i class="iconfont icon-guangbo"></i> &nbsp;&nbsp; <span class="sidebar-title-msg"></span> </div> <div class="sidebar-profile"> <div class="user-pic" id="menuBlogAvatar"></div> <div class="sidebar-userinfo" id="introduce"></div> </div> <div class="sidebar-stats"></div> <div class="sidebar-search" style="display:none"> <div class="sidebar-search-div"> <div class="input-group"> <span id="sb-sidebarSearchBox"></span> <div class="input-group-append"> <span class="input-group-text"> <i class="iconfont icon-sousuo"></i> </span> </div> </div> </div> </div> <div class="customize-nav"></div> <div id="calendar-box"></div> <div class="sidebar-menu" id="customize-sidebar-menu"> <ul></ul> </div> <div class="sidebar-menu"> <ul> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-collection-fill"></i> <span class="sidebar-dropdown-title">积分排名</span> </a> <div class="sidebar-submenu" id="sb-sidebarScorerank"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-time-fill"></i> <span class="sidebar-dropdown-title">最新随笔</span> </a> <div class="sidebar-submenu" id="sb-sidebarRecentposts"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-label-fill"></i> <span class="sidebar-dropdown-title">我的标签</span> </a> <div class="sidebar-submenu" id="sb-toptags"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-fenleicur"></i> <span class="sidebar-dropdown-title">随笔分类</span> </a> <div class="sidebar-submenu" id="sb-classify"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-fenlei"></i> <span class="sidebar-dropdown-title">文章分类</span> </a> <div class="sidebar-submenu" id="sb-ArticleCategory"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-browse-fill"></i> <span class="sidebar-dropdown-title">阅读排行</span> </a> <div class="sidebar-submenu" id="sb-topview"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-like-fill"></i> <span class="sidebar-dropdown-title">推荐排行</span> </a> <div class="sidebar-submenu" id="sb-topDiggPosts"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-comments"></i> <span class="sidebar-dropdown-title">最新评论</span> </a> <div class="sidebar-submenu" id="sb-recentComments"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-task-fill"></i> <span class="sidebar-dropdown-title">随笔档案</span> </a> <div class="sidebar-submenu" id="sb-record"></div> </li> <li class="ng-star-inserted sidebar-dropdown"> <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box"> <i class="iconfont icon-document-fill"></i> <span class="sidebar-dropdown-title">文章档案</span> </a> <div class="sidebar-submenu" id="sb-articlearchive"></div> </li> </ul> </div> <div class="sidebar-footer"></div> <div class="morph-shape" id="morph-shape" style="display:none" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"> <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none"> <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/> </svg> </div> </div> <button class="menu-button" id="open-button"> MENU </button> <div class="content-wrap" id="content-wrap"></div> </div> '
    },
    10: function(s, e) {
        e.A = '<div class="dropdown"> <a href="https://www.cnblogs.com/##user##" target="_self"> <i class="iconfont icon-home-fill"></i>首页 </a> </div> <div class="dropdown"> <a href="https://msg.cnblogs.com/send/##user##" target="_blank"> <i class="iconfont icon-zhifeiji"></i>联系 </a> </div> <div class="dropdown"> <a href="javascript:void(0)" onclick=\'$("#blog_nav_rss").trigger("click")\' data-rss="https://www.cnblogs.com/##user##/rss/"> <i class="iconfont icon-keaide"></i>订阅 </a> </div> <div class="dropdown"> <a href="https://i.cnblogs.com/" target="_blank"> <i class="iconfont icon-shezhi-fill"></i>管理 </a> </div> '
    },
    942: function(s, e, i) {
        i.d(e, {
            A: function() {
                return t
            }
        });
        var n = '<div class="main-header" id="main-header"> <div id="nhBannerAnimation"> <ul class="circles"> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div> <div class="vertical"> <div class="main-header-content inner"> <h1 class="page-title" id="homeTopTitle"><span></span></h1> <h2 class="page-description" id="hitokoto"></h2> <h3 class="page-author" id="hitokotoAuthor"></h3> <h1 class="sb-title" id="sbTitle"> <span id="sbTitleText"></span> <span id="sbTitleConsole"></span> </h1> <p class="article-info" id="articleInfo"></p> </div> </div> <a class="scroll-down" href="javascript:void(0);" data-offset="-45"> <span class="hidden">Scroll Down</span> <i class="scroll-down-icon iconfont icon-fanhui"></i> </a> </div>';
        function t() {
            $("#sidebar_news").prepend(n),
            ( () => {
                let s, e, n, t = $("#main-header");
                "home" === $.__status.pageType ? s = $.__config.banner.home.background.length ? $.__config.banner.home.background : ["https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_220917053600_wallhaven-6k3oox.webp"] : (s = $.__config.banner.article.background.length ? $.__config.banner.article.background : ["https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_220917053937_wallhaven-j5mz95.webp"],
                n = "40vh",
                $("#homeTopTitle").hide(),
                $(".scroll-down").hide(),
                $("#home").css("margin-top", "40vh"),
                $("#cb_post_title_url").addClass("post-del-title")),
                n && t.css("height", n),
                $.__config.animate.bannerImages?.enable ? i.e(808).then(i.bind(i, 171)).then((e => {
                    (0,
                    e.default)("main-header", s, $.__config.animate.bannerImages.options.itemNum, $.__config.animate.bannerImages.options.time, $.__config.animate.bannerImages.options.sort, $.__config.animate.bannerImages.options.current < 0 ? $.__tools.randomNum(0, s.length - 1) : $.__config.animate.bannerImages.options.current)
                }
                )) : (e = s.length > 1 ? s[$.__tools.randomNum(0, s.length - 1)] : s[0] || "",
                t.css({
                    background: `#222 url("${encodeURI(e)}")  center center no-repeat`,
                    "background-size": "cover"
                })),
                $.__config.banner.text || $(".main-header-content.inner").addClass("textUnselect")
            }
            )(),
            $.__event.scroll.handle.push(( () => {
                const s = $("#open-button")
                  , {temScroll: e, docScroll: i, homeScroll: n} = $.__event.scroll
                  , t = e < i && n <= i
                  , a = e > i && n >= i
                  , o = s.hasClass("menu-button-scroll");
                (t && !o || a && o) && s.toggleClass("menu-button-scroll", t).text(t ? "" : "MENU")
            }
            ))
        }
    },
    561: function(s, e, i) {
        i.a(s, (async function(s, n) {
            try {
                i.r(e),
                i.d(e, {
                    default: function() {
                        return r
                    }
                });
                var t = i(810)
                  , a = i(942)
                  , o = i(902)
                  , l = s([t]);
                function r() {
                    i.e(287).then(i.bind(i, 765)),
                    i.e(999).then(i.bind(i, 269));
                    const s = $.__tools.getTodayDate();
                    ("12-13" == s || $.__config.memorialDays.includes(s)) && $("html").css("filter", "grayscale(100%)"),
                    setTimeout(( () => {
                        Object.values($.__timeIds).forEach((s => s && clearInterval(s)))
                    }
                    ), 3e4),
                    o.A.init(),
                    (0,
                    t.A)(),
                    (0,
                    a.A)(),
                    "" !== $.__config.fontIconExtend && $.__tools.dynamicLoadingCss($.__config.fontIconExtend, 1),
                    $.__loading.stop()
                }
                t = (l.then ? (await l)() : l)[0],
                await $.__tools.dynamicLoadingJs($.__config.default.jqueryrotate).catch((s => console.error("jqueryrotate.js", s))),
                n()
            } catch (c) {
                n(c)
            }
        }
        ), 1)
    },
    552: function(s, e, i) {
        function n() {
            function s(s) {
                return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
            }
            let e, i, n;
            function t(s, t) {
                (e(s, t) ? n : i)(s, t)
            }
            return "classList"in document.documentElement ? (e = function(s, e) {
                return s.classList.contains(e)
            }
            ,
            i = function(s, e) {
                s.classList.add(e)
            }
            ,
            n = function(s, e) {
                s.classList.remove(e)
            }
            ) : (e = function(e, i) {
                return s(i).test(e.className)
            }
            ,
            i = function(s, i) {
                e(s, i) || (s.className = s.className + " " + i)
            }
            ,
            n = function(e, i) {
                e.className = e.className.replace(s(i), " ")
            }
            ),
            {
                hasClass: e,
                addClass: i,
                removeClass: n,
                toggleClass: t,
                has: e,
                add: i,
                remove: n,
                toggle: t
            }
        }
        i.d(e, {
            A: function() {
                return n
            }
        })
    },
    533: function(s, e, i) {
        i.a(s, (async function(s, n) {
            try {
                i.d(e, {
                    A: function() {
                        return a
                    }
                });
                var t = i(552);
                function a() {
                    let s, e = document.body, i = document.querySelector(".content-wrap"), n = document.getElementById("open-button"), a = document.getElementById("close-button"), o = !1, l = (0,
                    t.A)(), r = document.getElementById("morph-shape"), c = Snap(r.querySelector("svg")).select("path"), d = c.attr("d"), p = !1;
                    function b() {
                        $(".menu-wrap").show(),
                        o ? ($(e).removeClass("show-menu"),
                        $("#content-wrap").fadeOut(300),
                        $(e).css("overflow", "auto"),
                        $("#mainContent").off("touchmove"),
                        c.attr("d", d),
                        p = !1) : (l.add(e, "show-menu"),
                        $("#content-wrap").show(),
                        $("body").css("overflow", "hidden"),
                        s.scrollTo(!1, "top")),
                        o = !o
                    }
                    return n.addEventListener("click", b),
                    a && a.addEventListener("click", b),
                    i.addEventListener("click", (function(s) {
                        let e = s.target;
                        o && e !== n && b()
                    }
                    )),
                    s = new Optiscroll(document.querySelector("#menuWrap"),{
                        preventParentScroll: !0,
                        forceScrollbars: !0
                    }),
                    {
                        myOptiscrollInstance: s
                    }
                }
                await $.__tools.dynamicLoadingJs($.__config.default.snapsvg).catch((s => console.error("snapsvg-cjs.js", s))),
                await $.__tools.dynamicLoadingJs($.__config.default.optiscroll).catch((s => console.log("optiscroll.js", s))),
                await $.__tools.dynamicLoadingCss($.__config.default.optiscrollcss),
                n()
            } catch (o) {
                n(o)
            }
        }
        ), 1)
    },
    810: function(s, e, i) {
        i.a(s, (async function(s, n) {
            try {
                i.d(e, {
                    A: function() {
                        return r
                    }
                });
                var t = i(759)
                  , a = i(10)
                  , o = i(533)
                  , l = s([o]);
                function r() {
                    let s;
                    $("#sidebar_news").prepend(t.A),
                    s = (0,
                    o.A)(),
                    $(".sidebar-footer").html($.__tools.tempReplacement(a.A, "user", $.__status.user)),
                    $("#menuBlogAvatar").append(`<img class='img-responsive' alt='用户头像' src='${$.__config.info.avatar || $.__config.default.avatar}'>`),
                    $(".sidebar-title-msg").text($.__config.sidebar.titleMsg),
                    $(".container .menu-wrap").css("background-image", `url('${$.__config.sidebar.infoBackground || $.__config.default.infoBackground}')`),
                    ( () => {
                        const s = 1e3;
                        $.__timeIds.introduceTId = window.setInterval(( () => {
                            let s = $("#profile_block").html()
                              , e = $("#introduce");
                            $("#profile_block img")[0] && (s = s.replace("<br>", "")),
                            "string" == typeof s && "" === e.html() && (e.html($.__tools.htmlFiltrationScript(s)),
                            $.__tools.clearIntervalTimeId($.__timeIds.introduceTId))
                        }
                        ), s),
                        $.__config.sidebar.blogStatus && ($.__timeIds.blogStatsTId = window.setInterval(( () => {
                            let s = $(".blogStats")
                              , e = $(".sidebar-stats");
                            s.length && (e.html($.__tools.htmlFiltrationScript(s.html())).show(),
                            s.html(""),
                            $.__tools.clearIntervalTimeId($.__timeIds.blogStatsTId))
                        }
                        ), s)),
                        $.__timeIds.calendarTId = window.setInterval(( () => {
                            let s = $("#blogCalendar")
                              , e = $("#blog-calendar")
                              , i = $("#calendar-box");
                            if (s.length && "" === i.html()) {
                                let s = `<div id="blog-calendar">${e.html()}</div>`;
                                e.remove(),
                                i.html(s).show(),
                                $("#blog-calendar").css("visibility", "visible"),
                                $.__tools.clearIntervalTimeId($.__timeIds.calendarTId)
                            }
                        }
                        ), s),
                        $.__timeIds.searchTId = window.setInterval(( () => {
                            let s = $("#sidebar_search_box")
                              , e = $("#sb-sidebarSearchBox");
                            s.length > 0 && "" === e.html() && (e.prepend('<div id="sb_widget_my_zzk" class="div_my_zzk"><input id="q" type="text"  autocomplete="off" placeholder="找找看..." onkeydown="return zzk_go_enter(event);" class="input_my_zzk form-control search-menu"></div>'),
                            $(".sidebar-search").show(),
                            $.__tools.clearIntervalTimeId($.__timeIds.searchTId))
                        }
                        ), s);
                        [{
                            selector: "#sidebar_scorerank ul li",
                            container: "#sb-sidebarScorerank"
                        }, {
                            selector: "#sidebar_recentposts ul li",
                            container: "#sb-sidebarRecentposts"
                        }, {
                            selector: "#sidebar_toptags ul li",
                            container: "#sb-toptags"
                        }, {
                            selector: "#sidebar_postcategory ul li",
                            container: "#sb-classify"
                        }, {
                            selector: "#sidebar_articlecategory ul li",
                            container: "#sb-ArticleCategory"
                        }, {
                            selector: "#sidebar_postarchive ul li",
                            container: "#sb-record"
                        }, {
                            selector: "#sidebar_articlearchive ul li",
                            container: "#sb-articlearchive"
                        }, {
                            selector: "#TopViewPostsBlock ul li",
                            container: "#sb-topview"
                        }, {
                            selector: "#TopDiggPostsBlock ul li",
                            container: "#sb-topDiggPosts"
                        }].forEach((e => {
                            const i = e.container.replace("#", "");
                            $.__timeIds[i] = window.setInterval(( () => {
                                !function(s, e, i) {
                                    s.length > 0 && "" === e.html() && (e.html(function(s) {
                                        let e = "<ul>"
                                          , i = /^[1-9]+\d*$/;
                                        return s.each((n => {
                                            let t = $(s[n])
                                              , a = t.text() === t.html() ? {} : $(t.html())
                                              , o = t.text().trim().split(".");
                                            i.test(o[0]) && o.splice(0, 1);
                                            let l = o.join(".").trim();
                                            a.length > 0 && a.html(l),
                                            l.length > 0 && (e += "<li>" + (a.length > 0 ? a.prop("outerHTML") : '<a href="javascript:void(0);">' + l + "</a>") + "</li>")
                                        }
                                        )),
                                        e += "</ul>",
                                        e
                                    }(s)),
                                    e.parent(".sidebar-dropdown").show(),
                                    $.__tools.clearIntervalTimeId(i))
                                }($(e.selector), $(e.container), $.__timeIds[i])
                            }
                            ), s)
                        }
                        )),
                        $.__timeIds.commentsTId = window.setInterval(( () => {
                            let s = $("#sidebar_recentcomments ul")
                              , e = $("#sb-recentComments");
                            s.length > 0 && "" === e.html() && (e.html((s => {
                                let e, i, n, t = "<ul>", a = /^[1-9]+\d*$/;
                                if (s.find("li").length > 2) {
                                    if (e = s.find("li.recent_comment_title"),
                                    i = s.find("li.recent_comment_body"),
                                    n = s.find("li.recent_comment_author"),
                                    e.length !== i.length || e.length !== n.length)
                                        return;
                                    e.each((s => {
                                        let o = $(e[s])
                                          , l = o.text() === o.html() ? {} : $(o.html())
                                          , r = o.text().trim().split(".");
                                        a.test(r[0]) && r.splice(0, 1);
                                        let c = r.join(".").trim();
                                        l.length > 0 && l.html(c),
                                        t += "<li>" + (l.length ? l.prop("outerHTML") : `<a href='javascript:void(0);'>${c}</a>`) + `<div class="sb-recent_comment_body">${$(i[s]).text()}</div>` + `<div class="sb-recent_comment_author">${$(n[s]).text()}</div></li>`
                                    }
                                    ))
                                }
                                return t += "</ul>",
                                t
                            }
                            )(s)),
                            e.parent(".sidebar-dropdown").show(),
                            $.__tools.clearIntervalTimeId($.__timeIds.commentsTId))
                        }
                        ), s);
                        const e = $.__config.sidebar.navList;
                        if (e.length) {
                            const s = e.map((s => {
                                const {name: e, url: i, icon: n="icon-dianzan"} = s;
                                return `<li><a href="${i}" class="sidebar-dropdown-box" target="_blank"><i class="iconfont  ${n}"></i> ${e} </a></li>`
                            }
                            )).join("");
                            $(".customize-nav").append(`<ul>${s}</ul>`).show()
                        }
                        const i = $.__config.sidebar.customList;
                        if (i.length) {
                            let s = "";
                            s += i.map((s => `<li class="ng-star-inserted sidebar-dropdown">\n                              <a href="javascript:void(0)" class="ng-star-inserted sidebar-dropdown-box">\n                                <i class="iconfont ${s.icon}"></i>\n                                <span class="sidebar-dropdown-title">${s.title}</span>\n                              </a>\n                              <div class="sidebar-submenu">\n                                <ul>\n                                  ${s.data.map(( ({name, url}) => `<li><a href="${url}" target="_blank">${name}</a></li>`)).join("")}\n                                </ul>\n                              </div>\n                            </li>`)).join(""),
                            $("#customize-sidebar-menu ul").append(s),
                            $("#customize-sidebar-menu").show(),
                            $("#customize-sidebar-menu .sidebar-dropdown").show()
                        }
                    }
                    )(),
                    $.__config.animate.avatar.enable && ($("#menuBlogAvatar").addClass("img-rounded"),
                    $(".author_avatar").addClass("img-rounded"),
                    $(".feedbackAvatar").addClass("img-rounded"));
                    const e = $.__config.sidebar.submenu
                      , i = {
                        pointsRank: "#sb-sidebarScorerank",
                        latestPosts: "#sb-sidebarRecentposts",
                        myTags: "#sb-toptags",
                        postsClassify: "#sb-classify",
                        articleClassify: "#sb-ArticleCategory",
                        readRank: "#sb-topview",
                        recommendRank: "#sb-topDiggPosts",
                        postsArchive: "#sb-record",
                        articleArchive: "#sb-articlearchive",
                        latestComment: "#sb-recentComments",
                        customList: "#customize-sidebar-menu .sidebar-submenu"
                    };
                    Object.keys(e).forEach((s => {
                        if (e[s]) {
                            const e = $(i[s]);
                            e.parent("li.sidebar-dropdown").addClass("active"),
                            e.show()
                        }
                    }
                    )),
                    $(".sidebar-menu a.sidebar-dropdown-box").on("click", (function() {
                        const e = $(this).parent("li.sidebar-dropdown")
                          , i = e.find(".sidebar-submenu");
                        i.length && (e.toggleClass("active"),
                        i.slideToggle(300, ( () => {
                            s?.myOptiscrollInstance && s.myOptiscrollInstance.update()
                        }
                        )))
                    }
                    )),
                    $.__event.resize.handle.push(( () => {
                        setTimeout(( () => {
                            $("body").hasClass("show-menu") && s?.myOptiscrollInstance && s.myOptiscrollInstance.update()
                        }
                        ), 300)
                    }
                    ))
                }
                o = (l.then ? (await l)() : l)[0],
                n()
            } catch (c) {
                n(c)
            }
        }
        ))
    }
}]);
