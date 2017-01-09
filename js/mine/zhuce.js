var reg1 = /^((13)|(18)|(15)|(17))[0-9]{9}/g;
var reg2 = /[0-9a-zA-Z]{6,18}/g;
$(document).on("blur","input[name=phone]",function(){
	if(!(reg1.test($("input[name=phone]").val()))){
		  alert("请输入正确的手机号")
	}
})
$(document).on("blur","input[name=passOne]",function(){
	if(!(reg2.test($("input[name=passOne]").val()))){
		alert("请要求输入密码(密码不能包括下划线,横线等特殊符号)")
	}
})
$(document).on("blur","input[name=passTwo]",function(){
	if($("input[name=passOne]").val() != $("input[name=passTwo]").val()){
		alert("两次输入的密码不一样,请重新输入")
	}
})
