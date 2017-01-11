$("#xData").on("click",function(){
	$.ajax({
		type:"get",
		url:"http://localhost/playbar/php/data.php",
		async:true,
		dataType:"json",
		data:{
			phone:$("input[type=text]").val(),
			password:$("input[type=password]").val(),
			act:"login"
		},
		success:function(data){
			if(data.err ==0 ){
				
				localStorage.phone = $("input[type=text]").val();
				window.location.href = "../home/home.html";
				
//				changeName();
			}else{
			 alert(data.msg);
			}
		}
	});
});

$(document).on("touchstart",".xReg",function(){
	$.ajax({
		type:"get",
		url:"http://localhost/playbar/php/data.php",
		async:true,
		dataType:"json",
		data:{	
			act:"reg",
			phone:$("input[type=text]").val(),
			password:$("input[type=password]").val()
		},
		success:function(data){
			if(data.err == 0){
				alert("注册成功了");
				window.location.href = "register.html";
			}else{
				alert(data.msg);
			}
		}
		
	});
})
//封装登录成功后换名字
//function changeName(){
//	$(".xAccount").css({
//		display:"block"
//	})
//	$(".xAccount").text($("input[type=text]").val());
//	$(".xNone").css("display","none");
//}
