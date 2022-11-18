/**
 * UPDATES AND DOCS AT: https://github.com/wangyang0210
 * https://www.cnblogs.com/wangyang0210/
 * @author: WangYang, wangyang.0210@foxmail.com
 * @Date 2022-08-25 15:24
 * ----------------------------------------------
 * @describe: 侧边栏处理
 */
import cla from './classie';
import Snap from 'snapsvg-cjs';
import optiscroll from 'optiscroll/dist/optiscroll.min';
import 'optiscroll/dist/optiscroll.css'

export default function main() {

    let bodyEl = document.body,
        content = document.querySelector('.content-wrap'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false,
        classie = cla(),

        morphEl = document.getElementById('morph-shape'),
        s = Snap(morphEl.querySelector('svg')),
        path = s.select('path'),
        initialPath = path.attr('d'),
        isAnimating = false;

    let myOptiscrollInstance;

    function init() {

        initEvents();

        // 初始化滚动条
        myOptiscrollInstance = new optiscroll(document.querySelector('#menuWrap'), {
            preventParentScroll: true,
            forceScrollbars: true
        });
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        // close the menu element if the target it麓s not the menu element or one of its descendants..
        content.addEventListener('click', function (ev) {
            let target = ev.target;
            if (isOpen && target !== openbtn) toggleMenu();
        });
    }

    function toggleMenu() {
        $('.menu-wrap').show();

        if (isOpen) {

            $(bodyEl).removeClass('show-menu');

            $('#content-wrap').fadeOut(300);
            $(bodyEl).css('overflow', 'auto');
            $("#mainContent").off("touchmove");

            path.attr('d', initialPath);
            isAnimating = false;
        } else {
            classie.add(bodyEl, 'show-menu');

            $('#content-wrap').show();
            $('body').css('overflow', 'hidden');

            // 初始化滚动条到顶部位置
            myOptiscrollInstance.scrollTo(false, 'top');
        }
        isOpen = !isOpen;
    }

    init();

    return {
        myOptiscrollInstance: myOptiscrollInstance
    }
}
