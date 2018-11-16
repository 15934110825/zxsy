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
                str += `<li>
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
       if($(this).hasClass("active")){
             $(this).removeClass("active");
           $(this)
       }else {
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

});