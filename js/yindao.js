/**
 * Created by Administrator on 2018/11/8.
 */
$(function () {
    //顶部
    $("#head").load("header.html");
    //底部
    $("#foot").load("footer.html");
    //下载 移入效果
    $(".banner a.down").hover(function () {
        $(".banner .code2d").show();
    }, function () {
        $(".banner .code2d").hide();
    });
    // 人物选项卡    点击效果
    $(".rwjs .r-tab li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".rwjs .r-list li").eq($(this).index()).addClass("active").siblings().removeClass("active");

    });
    //游戏界面
    $(".yxjm .title li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".yxjm .cont li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });
    //玩转诛仙
    $(".wzzx .wz-title li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".wzzx .wz-cont>li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    //我要变强
    $(".wzzx .strong .left li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".wzzx .strong .right li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    //我要变美
    $(".wzzx .beauty .left li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".wzzx .beauty .right li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    //游戏特色 轮播图
    $(".yxts .content ul").find("li:first-of-type").clone().appendTo(".yxts .content ul");
    var index = 0;
    var pic = 0;
    var timer = null;
    timer = setInterval(right, 2000);
    var imgwidth = $(".yxts .content ul li").width();
    $(".yxts .yx-banner").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(right, 2000);
    });
    $(".yxts .yx-banner ol li").click(function () {
        index = pic = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".yxts .content ul").animate({"left": -(index * imgwidth)});
    });
    function right() {
        if (index == $(".yxts .content ul li").length - 1) {
            index = 0;
            $(".yxts .content ul").css("left", "0");
        }
        index++;
        $(".yxts .content ul").animate({"left": -(index * imgwidth)});
        if (pic < $(".yxts .content ol li").length - 1) {//还没到最后
            pic++;//计算出下一个应该亮起的按钮的索引
        } else {
            pic = 0;
        }
        $(".yxts .yx-banner ol li").removeClass("active").eq(pic).addClass("active");
    }

    //页面进入效果
    $(document).on("scroll", function () {
        var wh = $(window).height();
        var s1 = $('.banner').offset().top - wh / 2;
        var s2 = $('.yxfl').offset().top - wh / 2;
        var s3 = $('.rwjs').offset().top - wh / 2;
        var s4 = $('.yxjm').offset().top - wh / 2;
        var s5 = $('.wzzx').offset().top - wh / 2;
        var s6 = $('.yxts').offset().top - wh / 2;
        var jl = $(document).scrollTop();
        if (jl > s1) {
            $('.banner').addClass('on');
            $(".fix-nav1 .content li").eq(0).addClass("active").siblings().removeClass("active");
        }
        if (jl > s2) {
            $('.yxfl').addClass('on');
            $(".fix-nav1 .content li").eq(1).addClass("active").siblings().removeClass("active");
        }
        if (jl > s3) {
            $('.rwjs').addClass('on');
            $(".fix-nav1 .content li").eq(2).addClass("active").siblings().removeClass("active");
        }
        if (jl > s4) {
            $('.yxjm').addClass('on');
            $(".fix-nav1 .content li").eq(3).addClass("active").siblings().removeClass("active");
        }
        if (jl > s5) {
            $('.wzzx').addClass('on');
            $(".fix-nav1 .content li").eq(4).addClass("active").siblings().removeClass("active");
        }
        if (jl > s6) {
            $('.yxts').addClass('on');
            $(".fix-nav1 .content li").eq(5).addClass("active").siblings().removeClass("active");
        }
    });
    //边侧导航栏
    //显示
    $(".fix-nav2").click(
        function () {
            $(this).animate({"right": "-88px"});
            $(".fix-nav1").delay(400).animate({"right": "0"}).find(".fanhui");
            $(".fix-nav1 .fanhui").delay(600).animate({"opacity": "1"});
        }
    );
    //隐藏
    $(".fix-nav1 .fanhui").click(
        function () {
            $(this).delay(400).animate({"opacity": 0});
            $(".fix-nav2").stop().delay(400).animate({"right": "0"});
            $(".fix-nav1").stop().animate({"right": "-147px"});
        }
    );
    $(".fix-nav1 .content li").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("body,html").animate({"scrollTop": $("article section").eq(index).offset().top}, 600);
    });
    //返回顶部


});