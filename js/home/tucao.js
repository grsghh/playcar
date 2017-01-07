//吐槽字数统计
$("#tucaoContent").change(function(){
	$(".rTucao-text").text("("+$("#tucaoContent").val().length + "/200)");
})
//字数超限判断
$(document).on("touchstart",".rBtn",function(){
	if ($("#tucaoContent").val().length > 200 || $("#tucaoContent").val().length ==0) {
		$(".rMask").show();
		$(".rError").show();
	} else{
		$(".rTucao").hide();
		$(".rTucao-suc").show();
	}
})
$(document).on("touchstart",".rError-btn-btn",function(){
	$(".rError").hide();
	$(".rMask").hide()
})
$(document).on("touchstart",".rError-title img",function(){
	$(".rError").hide();
	$(".rMask").hide()
})