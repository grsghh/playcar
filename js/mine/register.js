var reg1 = /^((13)|(18)|(15)|(17))[0-9]{9}/g;
var reg2 = /[0-9a-zA-Z]{6,18}/g;
$(document).on("blur","input[type=text]",function(){
	if(!(reg1.test($("input[type=text]").val()))){
		alert("请输入正确的手机号")
	}
})

$(document).on("blur","input[type=password]",function(){
	if(!(reg2.test($("input[type=password]").val()))){
		alert("请要求输入密码(密码不能包括下划线,横线等特殊符号)")
	}
})
