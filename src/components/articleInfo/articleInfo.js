/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章信息处理
 */
import postMeta from '../../components/postMeta/postMeta';
import consoleText from '../../vendor/consoleText/consoleText';

export default function main() {
    /**
     * 设置文章标题
     */
    (() => {
        const sbTitle = $('#cb_post_title_url').text().trim();
        if ($.__config.animate.articleTitle.enable) {
            consoleText([...sbTitle], 'sbTitleText', 'sbTitleConsole', false);
        } else {
            $('#sbTitleText').text(sbTitle).css('color', '#fff');
        }
        $('.inner').css('max-width', '100vw');
        $.__tools.setDomHomePosition();
    })();

    /**
     * 设置文章信息
     */
    (() => {
        $('#articleInfo').append('<p class="article-info-text"></p>');
        $.__timeIds.postDescTid = window.setInterval(() => {
            if ($('#post_view_count').text() !== '...' && $('#post_comment_count').text() !== '...') {
                let postDescText = $('.postDesc').show().text();
                $('#articleInfo p.article-info-text').html(postMetaHtml(postDescText));
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId($.__timeIds.postDescTid);
            }
        }, 1000);

        function postMetaHtml(postDescText) {
            let info = postMeta(postDescText);
            let textNum = $('#cnblogs_post_body').text().length;

            return (
                '<span class="postMeta"><i class="iconfont icon-schedule"></i>' +
                info.date.replace(/-/g, '/') +
                '' +
                '<i class="iconfont icon-browse"></i>' +
                info.vnum +
                '' +
                '<i class="iconfont icon-interactive"></i>' +
                info.cnum +
                '' +
                '<i class="iconfont icon-hot"></i>' +
                info.tnum +
                '' +
                '<br><i class="iconfont icon-article"></i>' +
                textNum +
                '' +
                '<i class="iconfont icon-kafei"></i>' +
                $.__tools.minToTime(textNum / 500) +
                ' ~ ' +
                $.__tools.minToTime(textNum / 300) +
                '</span>'
            );
        }
    })();

    /**
     * 设置文章信息-分类
     */
    (() => {
        $.__timeIds.articleInfoClassTId = window.setInterval(() => {
            let obj = $('#BlogPostCategory').find('a');
            if (obj.length > 0) {
                $.__tools.htmlReplace('#BlogPostCategory', /,/g, '');
                $.__tools.articleInfo(obj, 1);
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId($.__timeIds.articleInfoClassTId);
            }
        }, 1000);
    })();

    /**
     * 设置文章信息-标签
     */
    (() => {
        $.__timeIds.articleInfoTagTId = window.setInterval(() => {
            let obj = $('#EntryTag').find('a');
            if (obj.length > 0) {
                $.__tools.htmlReplace('#EntryTag', /,/g, '');
                $.__tools.articleInfo(obj, 2);
                $.__tools.setDomHomePosition();
                $.__tools.clearIntervalTimeId($.__timeIds.articleInfoTagTId);
            }
        }, 1000);
    })();

    /**
     * 设置文章信息-链接icon
     */
    (() => {
        if ($.__config.articleContent.link) {
            $('#cnblogs_post_body a').addClass('iconfont icon-fenxiang');
            $('.footnote-ref a').removeClass('iconfont icon-fenxiang');
            $('.footnotes-list a').removeClass('iconfont icon-fenxiang');
        }
    })();

    /**
     * 设置文章标题-iconfont
     */
    (() => {
        let titleInfo = $('#cnblogs_post_body').find(':header');
        if ($.__config.articleContent.iconfont && titleInfo.length > 0) {
            let iconfonts = $.__config.articleContent.iconfontArr;
            titleInfo.html((i, c) => {
                let arr = [];
                let num = Math.floor(Math.random() * (iconfonts.length - i) + i);
                if (arr.indexOf(num) == -1) {
                    arr.push(num);
                    $('<svg class="icon"> <use xlink:href="#icon-' + iconfonts[num] + '"></use></svg>').prependTo(
                        titleInfo[i]
                    );
                } else {
                    i--;
                }
            });
        }
    })();

    /**
     * 设置文章引用 | 扩展markdown语法
     */
    $('.blogpost-body p').html((i, c) => {
        if (/^\?&gt;/.test(c)) return `<p class="tip">${c.slice(5).trim()}</p>`;
        if (/^!&gt;/.test(c)) return `<p class="warn">${c.slice(5).trim()}</p>`;
    });

    // 设置注释样式
    const tokenMap = {
        '~bk': '<mbk>',
        'bk~': '</mbk>',
        '~b': '<mbox>',
        'b~': '</mbox>',
        '~c': '<mc>',
        'c~': '</mc>',
        '~u': '<mu>',
        'u~': '</mu>',
        '~h': '<mhl>',
        'h~': '</mhl>',
        '~s': '<mst>',
        's~': '</mst>',
        '~x': '<mco>',
        'x~': '</mco>',
    };

    const configMap = {
        mu: options.underline,
        mc: options.circle,
        mbox: options.box,
        mhl: options.highlight,
        mbk: options.bracket,
        mst: options.strikeThrough,
        mco: options.crossedOff,
    };

    function safeReplaceHtml(selector, replacement) {
        return replacement.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    const init = async () => {
        await $.__tools.dynamicLoadingJs($.__config.default.roughNotation);
        $('.blogpost-body p').html((i, c) => {
            let replacedText = c.replace(/~[a-z]{1,2}|[a-z]{1,2}~/g, (match) => {
                if (tokenMap.hasOwnProperty(match)) {
                    return safeReplaceHtml(match, tokenMap[match]);
                }
                console.warn(`No mapping found for token: ${match}`);
                return match;
            });
            return replacedText;
        });
        const needAnnotation = document.querySelectorAll(Object.keys(configMap).join(','));
        if (needAnnotation.length) {
            setTimeout(() => {
                annotateElements();
            }, 2000);
        }
    };

    if ($.__config.articleContent.roughNotation.enable) init();

    /**
     * 是否隐藏底部的编辑推荐和阅读排行
     */
    if ($.__config.articleContent.hide.recommendPosts) $('#under_post_card1').hide();
    if ($.__config.articleContent.hide.readingRanking) $('#under_post_card2').hide();
}
