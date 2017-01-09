
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
$(document).("touchstart","#xSpit-language",function(){
	  window.location.href = "tucao.html"
})
//touch.on("#xBox","swipeLeft swipeRight",function(even){
//	switch(even.type){
//		case  "swipeLeft":
//			$(this).css("left","80%")
//			 alert(1)
//			break;
//		case "swipeRight":
//			$(this).css("left","0")
//			break;		
//	}
//})
$("#xWrap").bind("swipeLeft swipeRight",function(even){
	switch(even.type){
		case  "swipeLeft":{
			$(this).css("left","80%")
			 alert(1)
			break;
		}
		case "swipeRight":{
			$(this).css("left","0")
			break;	
		}
	}
})