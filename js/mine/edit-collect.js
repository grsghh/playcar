var bol = true;
$(document).on("touchstart",".xLiCon_top img",function(){
	if (bol) {
		$(this).attr({
		src:"../img/mine/edit-collect/red.png"
	      });
	     bol = false;
	} else{
		$(this).attr({
		src:"../img/mine/edit-collect/gray.png"
	      });
	    bol = true;
	}
})

$(document).on("touchstart","input[type=checkbox]",function(){
	$("#xFooter img").css({
		display:"block"
	});
	$(".xLiCon_top img").attr({
		src:"../img/mine/edit-collect/red.png"
    });
})

$(document).on("touchstart","#xFooter button:eq(0)",function(){
	$(".xLiCon_top img").attr({
		src:"../img/mine/edit-collect/gray.png"
	      });
	$("#xFooter img").css({
		display:"none"
	});
})
$(document).on("touchstart","#xFooter button:eq(1)",function(){
	 $("ul").css({
	 	display:"none"
	 })
})