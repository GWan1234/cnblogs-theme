/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:18
 * ----------------------------------------------
 * @describe: 文章信息处理
 */
import postMeta from "../../components/postMeta/postMeta"
import consoleText from "../../vendor/consoleText/consoleText"

export default function main(_) {

    /**
     * 设置文章标题
     */
    (() => {
        const sbTitle = $('#cb_post_title_url').text();
        if (_.__config.animate.articleTitle.enable) {
            consoleText([sbTitle], 'sbTitleText', 'sbTitleConsole', ['#fff'], false, _.__tools.setDomHomePosition);
        } else {
            $('#sbTitleText').text(sbTitle).css('color', '#fff');
        }
        $('.inner').css('max-width', '100vw');
        _.__tools.setDomHomePosition();
    })();

    /**
     * 设置文章信息
     */
    (() => {
        $('#articleInfo').append('<p class="article-info-text"></p>');
        _.__timeIds.postDescTid = window.setInterval( () => {
            if ($('#post_view_count').text() !== '...' && $('#post_comment_count').text() !== '...') {
                let postDescText = $('.postDesc').show().text();
                $('#articleInfo p.article-info-text').html(postMetaHtml(postDescText));
                _.__tools.setDomHomePosition();
                _.__tools.clearIntervalTimeId(_.__timeIds.postDescTid);
            }
        }, 1000 );

        function postMetaHtml(postDescText) {
            let info = postMeta(postDescText);
            let textNum = $('#cnblogs_post_body').text().length;

            return '<span class="postMeta"><i class="iconfont icon-schedule"></i>' + info.date.replace(/-/g,"/") + '' +
                '<i class="iconfont icon-browse"></i>' + info.vnum + '' +
                '<i class="iconfont icon-interactive"></i>' + info.cnum + '' +
                '<i class="iconfont icon-hot"></i>' + info.tnum + '' +
                '<br><i class="iconfont icon-article"></i>' + textNum + '' +
                '<i class="iconfont icon-kafei"></i>' + _.__tools.minToTime(textNum / 500) + ' ~ ' + _.__tools.minToTime(textNum / 300) +
                '</span>';
        }
    })();

    /**
     * 设置文章信息-分类
     */
    (() => {
        _.__timeIds.articleInfoClassTId = window.setInterval(() => {
            let obj = $('#BlogPostCategory').find('a');
            if (obj.length > 0) {
                _.__tools.articleInfo(obj, 1)
                _.__tools.setDomHomePosition();
                _.__tools.clearIntervalTimeId(_.__timeIds.articleInfoClassTId);
            }
        }, 1000);
    })();

    /**
     * 设置文章信息-标签
     */
    (() => {
        _.__timeIds.articleInfoTagTId = window.setInterval(() => {
            let obj = $('#EntryTag').find('a');
            if (obj.length > 0) {
                _.__tools.articleInfo(obj, 2)
                _.__tools.setDomHomePosition();
                _.__tools.clearIntervalTimeId(_.__timeIds.articleInfoTagTId);
            }
        }, 1000);
    })();

    /**
     * 设置文章信息-链接icon
     */
    (() => {
        if (_.__config.articleContent.link) {
            $('#cnblogs_post_body a').addClass('iconfont icon-fenxiang')
            $('.footnote-ref a').removeClass('iconfont icon-fenxiang')
            $('.footnotes-list a').removeClass('iconfont icon-fenxiang')
        }
    })();

    /**
     * 设置文章标题-iconfont
     */
    (() => {
        let titleInfo = $('#cnblogs_post_body').find(':header');
        if (_.__config.articleContent.iconfont && titleInfo.length > 0) {
            let iconfonts = [
                'hebaodan','bingtanghulu','kesong','qianceng','fengmi','feiyuguantou','shengjian','youtiao','yuzijiang',
                'zhutongfan','doujiang','sanmingzhi','paofu','shanbei','dangaojuan','futejia','huangyou','xiangchang',
                'banji','danta','qingning','lajiao','shizi','mojituo','pijiu','putaojiu','kouxiangtang','xiangcaobingqilin',
                'jiaozi','tilamisu','huoguo','hongshu','bingkuai','mianhuatang','paobing','meishikafei','mantou','qishui',
                'ganlan','jiroujuan','guodong','baozi','pingguo','chengzi','qingjiao','jidan','xihongshi','mangguo','baocai',
                'niunai','mianbao','huluobu','zhangyu','pangxie','longxia','yangcong','rou','jitui','huage','xianyu','mogu',
                'qiezi','xilanhua','ningmeng','liulian','banli','sanwenyu','tudou','xigua','nangua','huolongguo','fantuan',
                'zhusun','shuiluobu','shanzhu','lanmei','shiliu','yezi','tiangua','mihoutao','boluo','kaixinguo','hetao',
                'xiaweiyiguo','huasheng','bigenguo','kuihuazi','songzi','xiguazi','badanmu','yaoguo','danhuangsu','dangao',
                'binggan','buding','tangguo','qiaokeli','hongzao','candou','putaogan','manyuemei','taozi','xiangjiao','caomei',
                'niuyouguo','hamigua','chelizi','li','bale','kafei1','shutiao','zhenzhunaicha','xuegao','nailao','kele','tiantong',
                'hanbao','xiezishousi','baomihua','regou','makalong','tianfuluo','juzi','baixiangguo','putao','shaomai','yumi','pipa',
                'yangtao','youzi','lianwu','wuhuaguo','paomian','wandou','huanggua','suantou','tiantianquan','shupian','huafubing',
                'bangbangtang','shousi','lizhi','doufu','mocha','boluomi','zhouzi','bingsha','suannai','pisa','haixing','haizhe',
                'tongluoshao','nuomici','kuangquanshui','roujiamo','cha','zhangyuxiaowanzi','chengzhi','yuancaitou','baicai'
            ]
            titleInfo.html((i, c) => {
                let arr = []
                let num=Math.floor((Math.random()*(iconfonts.length-i))+i);
                if(arr.indexOf(num)==-1){
                    arr.push(num)
                    $('<svg class="icon"> <use xlink:href="#icon-'+ iconfonts[num] +'"></use></svg>').prependTo(titleInfo[i])
                }else{
                    i--;
                }
            })
        }
    })();

    /**
     * 设置文章引用 | 扩展markdown语法
     */
    (() => {
        $(".blogpost-body p").html((i,c) => {
            if (/^\?&gt;/.test(c)) return '<p class="tip">' + c.slice(5).trim() + "</p>";
            if (/^!&gt;/.test(c)) return '<p class="warn">' + c.slice(5).trim() + "</p>";
        })
    })();

}
