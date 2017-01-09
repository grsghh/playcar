//编辑画面交互
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

$(document).on("touchstart",".xBtn1",function(){
	$(".xLiCon_top img").attr({
		src:"../img/mine/edit-collect/gray.png"
	      });
	$("#xFooter img").css({
		display:"none"
	}); 
})
$(document).on("touchstart",".xBtn2",function(){
	   $("img[src$='../img/mine/edit-collect/red.png']").parent().parent().remove()
	   $("#xFooter img").css({
		display:"none"
	   });
})