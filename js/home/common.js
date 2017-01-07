
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
