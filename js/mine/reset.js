//与cookie中存入的密码进行匹配

//二次密码验证
$(document).on("blur",".rePass",function(){
	if ($(".newPass").val() != $(".rePass").val()) {
		$(".reWrong").show();
	}else{
		$(".reWrong").hide();
		$(".submit").removeAttr("disabled");
	}
})
$(".submit").click(function(){
	//提交数据到数据库
	alert(1)
})