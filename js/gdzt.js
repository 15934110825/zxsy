/**
 * Created by Administrator on 2018/11/12.
 */
$(function () {
    //开屏动画
    var num = 0;
    setInterval(function () {
        num++;
        if (num > 100) {
            num = 100;
        }
        $(".loading_num").html(num + "%");
        $(".loading_icon").css("width", num + "%");
    }, 10);
    $(".nr").hide();
    setTimeout(function(){
        $(".loading_box").hide();
        $(".nr").show();
    },1200);


    //全屏滚动
    var scrollW = $(window).width();
    var scrollH = $(window).height();
    var page = 0;
    //设置宽高
    $(".box").css({
        "width": scrollW,
        "height": scrollH
    });
    $("article").css({"width": scrollW * $("article section").length});
    $("article").css({"height": scrollH});
    $("article section").css({
        "width": scrollW,
        "height": scrollH
    });
    //页面改变时  重置宽高
    $(window).on("resize", function () {
        //重新获取宽高
        var scrollW = $(window).width();
        var scrollH = $(window).height();
        $(".box").css({
            "width": scrollW,
            "height": scrollH
        });
        $("article").css({"width": scrollW * $("article section").length});
        $("article").css({"height": scrollH});
        $("article section").css({
            "width": scrollW,
            "height": scrollH
        });

    });
    var isRunning = false;
    //鼠标向上滚动
    function scrollup() {
        if (!isRunning) {
            isRunning = true;
            setTimeout(function () {
                isRunning = false;
            }, 1000);
            if (page > 0) {
                page--;
                $("article").animate({"left": -(page * scrollW)});
                $(".nav li").removeClass("active").eq(page).addClass("active");
                $("article section").eq(page).addClass("on");
            }
        }
    }

    //鼠标向下滚动
    function scrolldown() {
        if (!isRunning) {
            isRunning = true;
            setTimeout(function () {
                isRunning = false;
            }, 1000);
            if (page < $("article section").length - 1) {
                page++;
                $("article").animate({"left": -(page * scrollW)});
                $(".nav li").removeClass("active").eq(page).addClass("active");
                $("article section").eq(page).addClass("on");
            }
        }
    }

    //判断鼠标上下滚动  所实现的效果
    $(".box").on("mousewheel", function (ev, i) {
        if (i > 0) {
            scrollup();
            return false;
        } else if (i < 0) {
            scrolldown();
            return false;
        }
    });
    //点击到每一栏
    $(".nav li").on("click", function () {
        page = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("article").animate({"left": -( page * scrollW)});
        $("article section").eq(page).addClass("on");
        return false;
    });
    //scroll1里点击按钮下滑
    $("article .se1 .enter-btn ").on("click", function () {
        page = 1;
        $("article").animate({"left": -(page * scrollW)});
        $("article section").eq(page).addClass("on");
        return false;
    });
    //第二屏
    $(".se2 .r-con .r-tab a").click(
        function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".se2 .r-con .r-per .per").eq($(this).index()).addClass("active").siblings().removeClass("active");
            return false;
        }
    );

    //第三屏

    $(".se3 .r-con .r3-tab a").click(
        function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".se3 .r-con .r3-per .shu").eq($(this).index()).addClass("active").siblings().removeClass("active");
            return false;
        }
    );


    //第四屏
    $(".se4 .r-con .video-tab a").click(function () {
        var index=$(this).index();
        var arr = [1,2,3,4,5,6];
        var bg=$(".se4 .r-con .content .video-bg");
        bg.css("background","url(img-g/video_info0"+arr[index]+".png)");
        $(this).addClass("active").siblings().removeClass("active");
        $(".se4 .r-con .video-list .vide").eq(index).addClass("active").siblings().removeClass("active");
        return false;
    });


});










































