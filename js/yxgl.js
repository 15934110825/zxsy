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
            $(this).addClass("active");
            $(this).clone().appendTo($(".gl-cont .con-bottom .fz-box ul"));
        }
    });
    //人物选项卡
    $(".gl-cont .con-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        yx_nav = $(this).index();
        yxgl_ajax();
    });
    //分享
    $(".to-fx").hover(function () {
        $(".fx-list").show();
    }, function () {
        $(".fx-list").hide();
    });
    //出现返回顶部
    $(window).scroll( function () {
        if($(window).scrollTop()>0){
            //$(".to-top").css("display","block");
            $(".to-top").animate({"height":"66px"},0);
        }else {
            $(".to-top").animate({"height":0},0);
        }
        //返回顶部
        $(".to-top").click(function () {
            $("body,html").animate({"scrollTop": "0px"});
            return false;
        });
    });
});