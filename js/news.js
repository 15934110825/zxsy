/**
 * Created by Administrator on 2018/11/14.
 */
$(function () {
    $("#head").load("header.html");
    $("#foot").load("footer.html");
    var t_nav = 0;
    var page = 0;

    function new_ajax() {
        var str = ``;
        $.ajax({
            "url": "js/new.json",
            "type": "get",
            "data": {},
            "async": false,
            "dataType": "json"
        }).done(function aaa(result) {
            var con = result["pages" + page].data[t_nav].list;
            for (var i = 0; i < con.length; i++) {
                str += `<li>
                            <a href="">${con[i].title}
                                <span>${con[i].time}</span>
                            </a>
                        </li>`;
            }
            $(".new-list ul").html(str);
        });
    }

    new_ajax();
    ////点击回到顶部
    $(".to-top a").click(function () {
        $("body,html").animate({"scrollTop": "0px"});
        return false;
    });
    //点击切换选项卡
    $(".new-tab .tab-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        t_nav = $(this).attr("option");
        page = 0;
        new_ajax();
        $(".new-page span").removeClass("active").eq(0).addClass("active");
    });
    //点击切换页数
    $(".new-page span").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        page = $(this).attr("page");
        new_ajax();
    });
    //点击上一页
    //$(".new-page .prev").hide();
    $(".new-page .prev").click(function () {
        if (page > 0) {
            page--;
            console.log(page);
            new_ajax();
        }else {
            return false;
        }
        //if (page == 0) {
        //    $(this).hide();
        //}
        if(page<3){
            $(".new-page .next").show();
        }
        $(".new-page span").removeClass("active").eq(page).addClass("active");
        return false;
    });
    //点击下一页
    $(".new-page .next").click(function () {
        if (page < 3) {
            page++;
            console.log(page);
            new_ajax();
        }else {
            return false;
        }
        //if (page == 3) {
        //    $(this).hide();
        //}
        if(page>0){
            $(".new-page .prev").show();
        }
        $(".new-page span").removeClass("active").eq(page).addClass("active");
        return false;
    });
});