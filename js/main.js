/**
 * Created by Administrator on 2018/11/6.
 */
$(function () {
    $("#head").load("header.html");
    $("#foot").load("footer.html");
    //新闻选项卡
    $(".section1 .news .news-tab li").on("hover", function () {
        $(this).addClass('on').siblings().removeClass('on');
        $(".section1 .news .news-list ul").removeClass('on').eq($(this).index()).addClass('on');
    });

    //banner 轮播
    var ba_index = 0;
    var ba_timer = 0;
    $(".section1 .ba-tab li").click(function () {
        ba_index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".section1 .ba-list li").eq(ba_index).fadeIn(500).siblings().fadeOut(500);
    });
    function ba_right() {
        ba_index++;
        if (ba_index > $(".section1 .ba-list li").length - 1) {
            ba_index = 0;
        }
        $(".section1 .ba-tab li").eq(ba_index).addClass("active").siblings().removeClass("active");
        $(".section1 .ba-list li").eq(ba_index).fadeIn(500).siblings().fadeOut(500);
    }

    ba_timer = setInterval(ba_right, 2500);
    $(".section1 .banner").hover(function () {
        clearInterval(ba_timer);
    }, function () {
        ba_timer = setInterval(ba_right, 2500);
    });

    //人物选项卡切换
    $(".section2 .rw-tab li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".section2 .rw-list li").eq($(this).index()).show().siblings().hide();
    });

    //背景图上移
    $(".section3 .top-box a").hover(function () {
            $(this).find(".bg").stop().animate({"top": 0}, 500);

        }, function () {
            $(this).find(".bg").stop().animate({"top": "152px"}, 500);
        }
    );

    //游戏攻略选项卡
    $(".section3 .game-tip .game-tab li").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(".section3 .game-tip .game-list ul").eq($(this).index()).addClass("on").siblings().removeClass("on");
    });

    //同人专区滑动选项卡
    $(".tore .zhqu-tab li").mouseover(function () {
        var r_height = $(".tore .zhqu-cont .box ul").height();
        var r_index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tore .zhqu-cont .box").animate({"top": -r_index * r_height}, 300);
    });
    //音画鉴赏滑动选项卡

    $(".yihu .zhqu-tab li").mouseover(function () {
        var r_height = $(".tore .zhqu-cont .box ul").height();
        var r_index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".yihu .zhqu-cont .box").animate({"top": -r_index * r_height}, 300);
    });
});