$(function () {

    //导航下拉
    $(".xl").hover(function () {
        $(this).children("div").stop().slideDown();
    },function () {
        $(this).children("div").stop().slideUp();
    });

    //全选
    $("#qx").click(function () {
        if($("#qx").prop("checked")==true){
            $(".dx").prop("checked",true);
        }else {
            $(".dx").prop("checked",false);
        }
    });

    $(".dx").click(function () {
        if($(".dx:checked").length==$(".dx").length){
            $("#qx").prop("checked",true)
        }else {
            $("#qx").prop("checked",false);
        }
    });

    //        反选
    $("#fx").click(function () {
        $(".list_item :checkbox").each(function () {
            $(this).attr("checked",!$(this).attr("checked"));
        });
        // allchk()
    });
    // function allchk() {
    //     var chenum=$(".list_item :checkbox").length();
    //     var chk=0;
    //     $(".list_item :checkbox").each(function () {
    //         if($(this).attr("checked")==true){
    //             chk++;
    //         }
    //     });
    // }
    //选项卡切换
    function getTab(el1,el2,event) {
        $(el1)[event](function (ev) {
            ev.preventDefault();
            $(el1).removeClass("active");
            $(el2).removeClass("show");
            $(this).addClass("active");
            $(el2).eq($(this).index()).addClass("show");
        });
    }
   // 视频 综艺
    getTab(".sp>li",".tab_news>.div1","click");
//    猜你喜欢
//    教育
    getTab(".jy>li",".smList>ul","click");
//    视频直播
    getTab(".day>a",".bi>div","click");
//    体育
    getTab(".ty>li",".tabs_box>div","click");
//    汽车
    getTab(".com_b>li",".com_b-c>div","click");
    //娱乐
    getTab(".com_a>li",".com_a-1>div","click");
    //财经
    getTab(".com_c>li",".com_c-1>div","click");
//    读书
    getTab(".com_d>li",".com_d_1>div","click");
//    科技
    getTab(".com_e>li",".com_e-1>div","click");
    //游戏
    getTab(".con_f>span",".con_f-1>div","click");
    //手机
    getTab(".com_g>li",".com_g-1>div","click");
//    应用
    getTab(".con_h>span",".con_h-1>div","click");

});
