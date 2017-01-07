var bol = true;
$(document).on("touchmove",".xLiCon_top",function(){
	if (bol) {
		$(this).css({
		right:"25%"
	       });
		bol = false;
	} else{
		$(this).css({
		right:"0"
	       });
	       bol = true;
	}
})
