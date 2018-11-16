/**
 * Created by Administrator on 2018/11/14.
 */
$(function () {
    $("#head").load("header.html");
    $("#foot").load("footer.html");
    //人物ajax
    var yx_nav = 0;

    function yxgl_ajax() {
        var str = ``;
        $.ajax({
            "url": "js/yxgl.json",
            "type": "get",
            "data": {},
            "async": false,
            "dataType": "json"
        }).done(function aaa(result) {
            var cons = result.data[yx_nav].list;
            for (var i = 0; i < cons.length; i++) {
                str += `<li data-id="${cons[i].sid}">
                                <div class="check"></div>
                                <img src=${cons[i].images}>
                                <p>${cons[i].name}</p>
                            </li>`;
            }
            $(".gl-cont .con-list ul").html(str);
        });
    }

    yxgl_ajax();
    //选中法阵
    $(".gl-cont .con-list ul").delegate("li", "click", function () {
        console.log($(this).attr("data-id"));
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            var ssid=$(this).attr("data-id");
            $(".fz-box ul li").filter("[data-id="+ssid+"]").remove();
        } else {
            if($(".fz-box ul li").size()<6){
                $(this).addClass("active");
                $(this).clone().appendTo($(".gl-cont .con-bottom .fz-box ul"));
            }else {
                alert("最多只能选择六个阵灵参与搭配。");
            }
        }
    });
    //人物选项卡
    $(".gl-cont .con-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        yx_nav = $(this).index();
        yxgl_ajax();
    });
    //分享
    $(".to-fx").click(function () {
        $(".fx-list").toggle();  //toggle   控制元素进行隐藏和显示之间的切换
        return false;
    });
    //出现返回顶部
    $(window).scroll( function () {
        if($(window).scrollTop()>200){
            $(".to-top").stop().animate({"height":"66px"},50);
            //返回顶部
            $(".to-top").click(function () {
                $("body,html").animate({"scrollTop": "0px"},50);
            });
        }else {
            $(".to-top").stop().animate({"height":0},100);
        }
    });
});