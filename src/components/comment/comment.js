/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, i@oyo.cool
 * @Date 2022-08-25 15:20
 * ----------------------------------------------
 * @describe: 评论处理
 */

export default function main() {
    // 评论框打字特效
    if ($.__config.articleContent.commentTyping.enable) {
        const POWERMODE = require('./commentTyping/commentTyping');
        POWERMODE.colorful = $.__config.articleContent.commentTyping.options.colorful;
        POWERMODE.shake = $.__config.articleContent.commentTyping.options.shake;
        document.body.addEventListener('input', POWERMODE);
    }

    let setComment = () => {
        let feedbackItem = $('.feedbackItem');
        if (feedbackItem.length) {
            $.each(feedbackItem, (i) => {
                let obj = $(feedbackItem[i]),
                    feedbackCon = obj.find('.feedbackCon'),
                    feedbackListSubtitle = obj.find('.feedbackListSubtitle'),
                    commentBody = feedbackCon.length ? feedbackCon.find('.blog_comment_body') : [],
                    avatarHtml = '',
                    idInfo = commentBody.length ? commentBody.attr('id').split('_') : undefined;

                if (idInfo && idInfo.length) {
                    let id = idInfo[idInfo.length - 1],
                        idTmp = id.toString().match(/\d/g);

                    if ($.isArray(idTmp)) id = idTmp.join('');
                    let op = $(`#comment_${id}_avatar`),
                        patch = op.length ? op.text().trim() : $.__config.default.avatar;

                    let ac = $(`#a_comment_author_${id}`),
                        ah = ac.length ? ac.attr('href') : 'javascropt:void(0);';

                    avatarHtml = `<div class="feedbackAvatar"><a href="${ah}" target="_blank"><img src="${patch}"/></a></div>`;
                    obj.prepend(avatarHtml);
                }

                feedbackListSubtitle.length && feedbackListSubtitle.find('.louzhu').length && feedbackListSubtitle.addClass('feedbackListSubtitle-louzhu');
            });
            $(feedbackItem[0]).css('padding-top', '0');
            $(feedbackItem[feedbackItem.length - 1]).css('padding-bottom', '0');
        }
    };

    let addComment = () => {
        let userBlogAddress = $('.comment_my_posted a').attr('href'),
            userName = $('.comment_my_posted a').text(),
            commentInfo = $('.bq_post_comment').text();

        let comment = `<div class="feedbackItem" style="padding-bottom: 0px;">
                        <div class="feedbackAvatar">
                            <a href="${userBlogAddress}" target="_blank">
                                <img src="${$.__config.default.avatar}">
                            </a>
                        </div>
                        <div class="feedbackListSubtitle ${window.isBlogOwner && 'feedbackListSubtitle-louzhu'}">
                            ${window.isBlogOwner && `[<span class="louzhu">楼主</span>]`}
                            <span class="comment_date">${new Date().toLocaleString().replace(/\//g, '-')}</span>
                            <a id="a_comment_author_5168811" href="${userBlogAddress}" target="_blank">${userName}</a>
                        </div>
                        <div class="feedbackCon">
                            <div id="comment_body_5168811" data-format-type="Markdown" class="blog_comment_body cnblogs-markdown">
                                <p>${commentInfo}</p>
                            </div>
                        </div>
                    </div>`;

        $('#blog-comments-placeholder').append(comment);
        $('.comment_my_posted').remove();
    };

    $.__timeIds.commentTId = window.setInterval(() => {
        if ($('.feedbackItem').length) {
            setComment();
            $.__tools.clearIntervalTimeId($.__timeIds.commentTId);
        }
    }, 1000);

    $(document).ajaxSuccess(function (event, xhr, settings) {
        // 评论重新排序
        if (settings.url.includes('GetComments.aspx')) {
            $.__tools.clearIntervalTimeId($.__timeIds.commentTId);
            setComment();
        }

        // 新增评论
        if (settings.url.includes('PostComment/Add.aspx')) addComment();

        // 删除评论
        if (settings.url.includes('comment/DeleteComment.aspx')) {
            let commentId = JSON.parse(settings?.data)?.commentId;
            $(`#comment_body_${commentId}`).parent().parent().remove();
            $('.feedbackItem:last').css('padding-bottom', '0');
        }
    });
}
