/**
 * Created by Administrator on 2018/11/13.
 */
$(function () {
    $("#head").load("header.html");
    $("#foot").load("footer.html");
    $(".left .tab li.dj").click(function () {
        var index = $(this).index();
        window.location.href = "xqy.html?list=" + index;
        return false;
    });
    var title = getParams("list");
    if (title) {
        $(".left .tab li").removeClass("active").eq(title).addClass("active");
        $(".right li").removeClass("active").eq(title - 1).addClass("active");
    }
});
//获取地址栏的数值
function getParams(type) {
    var reg = new RegExp("(^|&)" + type + "=([^|&]*)(&|$)");
    //substring   substr
    var value = window.location.search.substring(1).match(reg);
    //test  match  exec
    if (value == null) {
        return null
    } else {
        return value[2]
    }
}