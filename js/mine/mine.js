//关于我们的关闭按钮
$(".rAboutUs-title img").on("touchstart",function(){
	$(".rAboutUs").hide();
	$(".rMask").hide();
});
$(".aboutUs").on("touchstart",function(){
	$(".rAboutUs").show();
	$(".rMask").show();
})
//我的礼包跳转
$(document).on("touchstart",".myGifts",function(){
	window.location.href = "myGift.html";
})
//我的订单跳转
$(document).on("touchstart",".myOrders",function(){
	window.location.href = "myGift.html";
})
//我的收藏
$(document).on("touchstart",".myCollections",function(){
	window.location.href = "collect.html";
})
//登录跳转
$(document).on("touchstart",".userLogin",function(){
	window.location.href = "register.html";
})

//判断登录后改变登录后的状态
if(localStorage.phone){
	$("#userName").text(localStorage.phone)
	$(".userLogin").hide();
	$("#loginOut").show();
}
$("#loginOut").on("touchstart",function(){
	localStorage.clear();
	$(".userLogin").show();
	$("#loginOut").hide();
	$("#userName").text("游客");
})