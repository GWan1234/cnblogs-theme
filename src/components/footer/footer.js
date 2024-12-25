/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:22
 * ----------------------------------------------
 * @describe: footer底部信息
 */
import footerTemp from '../../template/footer.html';
import { request } from '../../utils/request';

export default function main() {
    const footer = $('#footer');
    const footerText = footer.text();

    let footerHtml = footerTemp;
    let config = $.__config.footer;

    footerHtml = $.__tools.tempReplacement(footerHtml, 'footerText', footerText);

    // 设置音乐播放器
    if (config.aplayer.enable) {
        Promise.all([$.__tools.dynamicLoadingJs($.__config.default.aplayer), $.__tools.dynamicLoadingJs($.__config.default.meting)])
            .then((r) => {
                $.__tools.dynamicLoadingCss($.__config.default.aplayercss);
                $('#footer').append(`
               <meting-js
                  id="${config.aplayer.options.id}"
                  api="${config.aplayer.options.api}"
                  server="${config.aplayer.options.server}"
                  type="${config.aplayer.options.type}"
                  auto="${config.aplayer.options.auto}"
                  fixed="${config.aplayer.options.fixed}"
                  mini="${config.aplayer.options.mini}"
                  autoplay="${config.aplayer.options.autoplay}"
                  theme="${config.aplayer.options.theme}"
                  loop="${config.aplayer.options.loop}"
                  order="${config.aplayer.options.order}"
                  preload="${config.aplayer.options.preload}"
                  volume="${config.aplayer.options.volume}"
                  mutex="${config.aplayer.options.mutex}"
                  ${Number(config.aplayer.options.lrcType) ? `lrcType` : `lrc-type`}="${config.aplayer.options.lrcType}"
                  listFolded="${config.aplayer.options.listFolded}"
                  listMaxHeight="${config.aplayer.options.listMaxHeight}"
                  storageName="${config.aplayer.options.storageName}"
               >
              </meting-js>`);
            })
            .catch((e) => console.error('aplayer|meting', e));
    }

    // 设置标语
    const re = [
        ['textLeft', config.text.left],
        ['iconFont', config.text.iconFont.icon],
        ['iconColor', config.text.iconFont.color],
        ['iconSize', config.text.iconFont.fontSize],
        ['textRight', config.text.right],
    ];

    if (config.text.left || config.text.right) {
        re.push(['textShow', 'block']);
    } else {
        re.push(['textShow', 'none']);
    }

    footerHtml = $.__tools.batchTempReplacement(footerHtml, re);

    // 设置友情链接
    const footerLinksData = $.__config.links.footer;
    if (footerLinksData.length) {
        const linksHtml = footerLinksData
          .map(({ text, link }, index) => {
                return `<a href="${link}" target="_blank">${text}</a>${index < footerLinksData.length - 1 ? '<span style="margin: 0 3px;">/</span>' : ''}`;
            })
            .join('');

        footerHtml = $.__tools.batchTempReplacement(footerHtml, [
            ['linksHtml', `友情链接：${linksHtml}`],
            ['linkShow', 'block'],
        ]);
    } else {
        footerHtml = $.__tools.tempReplacement(footerHtml, 'linkShow', 'none');
    }

    // 添加页脚
    footer.html(footerHtml);

    // 页脚样式
    switch (parseInt(config.style)) {
        case 1:
            $('#footer').addClass('footer-t1').find('#footerStyle1').show().css('background', 'url(//images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114131838_footer.webp)  no-repeat 50%');
            break;
        case 2:
        default:
            $('#footer .footer-text').css({ 'padding-bottom': '0', 'border-bottom': 'none', 'margin-bottom': '0' });
            const footerStyle2 = $('#footerStyle2');
            footerStyle2.show().find('.clouds').css('background', 'url(//images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114132857_clouds.webp)  repeat-x');
            footerStyle2.find('.background').css('background', 'url(//images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114134558_background.webp)  repeat-x');
            footerStyle2.find('.foreground').css('background', 'url(//images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114132230_foreground.webp)  repeat-x');
            break;
    }

    // 设置运行时间
    window.setInterval(() => {
        let runDate = $.__tools.getRunDate(($.__config.info.startDate ||= '2021-01-01'));
        $('#blogRunTimeSpan').text(`This blog has running : ${runDate.daysold}  d ${runDate.hrsold} h ${runDate.minsold} m ${runDate.seconds} s`);
    }, 500);

    // 定时网站统计
    if ($.__config.umami?.url && $.__config.umami?.shareId) {
        const baseUrl = $.__config.umami.url;
        $.__timeIds.umamiTId = window.setInterval(() => {
            request(`${baseUrl}/api/share/${$.__config.umami.shareId}`).then((r) => {
                Promise.all([
                    request(`${baseUrl}/api/websites/${r.id}/stats?start_at=${$.__tools.getTodayStart()}&end_at=${$.__tools.getTodayEnd()}`, 'GET', {}, { 'x-umami-share-token': r.token }),
                    request(`${baseUrl}/api/websites/${r.id}/stats?start_at=${$.__tools.getYesterdayStart()}&end_at=${$.__tools.getYesterdayEnd()}`, 'GET', {}, { 'x-umami-share-token': r.token }),
                    request(`${baseUrl}/api/websites/${r.id}/active`, 'GET', {}, { 'x-umami-share-token': r.token }),
                ]).then((results) => {
                    const todayState = results[0];
                    const yesterdayState = results[1];
                    const online = results[2];
                    $('#cnzzInfo')
                        .text(
                            `Online: ${online[0].x} | Today: ${todayState.pageviews.value} / ${todayState.uniques.value} / ${todayState.totaltime.value} | Yesterday: ${yesterdayState.pageviews.value} / ${yesterdayState.uniques.value} / ${yesterdayState.totaltime.value}`
                        )
                        .show();
                });
            });
            $.__tools.clearIntervalTimeId($.__timeIds.umamiTId);
        }, 1000);
    }
}
