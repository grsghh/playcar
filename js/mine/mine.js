//关于我们的关闭按钮
$(".rAboutUs-title img").on("touchstart",function(){
	$(".rAboutUs").hide();
	$(".rMask").hide();
});
$(".aboutUs").on("touchstart",function(){
	$(".rAboutUs").show();
	$(".rMask").show();
})