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