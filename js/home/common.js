
var bol = true;
$(document).on("touchstart","#xSwitches",function(){
	if(bol){
		$("#xBox").css("left","80%");
		bol = false;
	}else{
		$("#xBox").css("left","0");
		bol = true;
	}
})
$(document).on("touchstart","#xSpit-language",function(){
	  window.location.href = "../home/tucao.html"
})
$("#xBox").bind("swipeleft swiperight",function(even){
	even.preventDefault()
	switch(even.type){
		case  "swipeleft":{
			$(this).css("left","0")
			break;
		}
		case "swiperight":{
			$(this).css("left","80%")
			break;	
		}
	}
})