// 全选
$('.checkAll').click(function(){
    if($(this).is(':checked')){
        $('.checkBox').each(function(){
            $(this).prop("checked",true);
        });
    }else{
        $('.checkBox').each(function(){
            $('.checkBox').removeAttr("checked",false);
        });
    }
});
//反选
var checkArr = [];
$(".checkBox").click(function() {
    if($(this).is(':checked')) {
        checkArr.push($(this))
        if($(".checkBox").length == checkArr.length){
            $('.checkAll').prop("checked",true);
        }else{
            $('.checkAll').removeAttr("checked",false);
        }
    }else{
        checkArr.splice($(this), 1);
        $('.checkAll').removeAttr("checked",false);
    }
})