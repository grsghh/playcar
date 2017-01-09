//touch.on($(".xLiCon_top"),"swipeleft swiperight",function(even){
//	even.stopPropagation();
//	 even.preventDefault();
//	  switch(even.type){
//	  	 case "swipeleft":{
//	  	  $(this).css({
//		       right:"25%"
//	       });
//	  	 	break;
//	  	 }
//	  	 case "swiperight":{
//	  	 	 $(this).css({
//		      right:"0"
//	        });
//	  	 	break;
//	  	 }
//	  }
//})
$(".xLiCon_top").bind("swipeleft swiperight",function(even){
	 even.preventDefault();
	  switch(even.type){
	  	 case "swipeleft":{
	  	  $(this).css({
		       right:"25%"
	      });
	  	 	break;
	  	 }
	  	 case "swiperight":{
	  	 	 $(this).css({
		      right:"0"
	        });
	  	 	break;
	  	 }
	  }
})

$(document).on("touchstart",".delete",function(){
	 $(this).parent().remove();
})

//编辑画面交互
var flag = true;
var change;
$(document).on("touchstart",".xEdit",function(){
	if(flag){
		$(".xLiCon_top img").attr({
	 	src:"../img/mine/collect/gray.png"
	   })
	     $(".xEdit").text("取消编辑");
	     $("#xFooter").css("display","block");
	     flag = false;
	     change = 1;
	}else{
		$(".xLiCon_top img").attr({
	 	src:"../img/mine/collect/greenCircle.png"
	   })
	     $(".xEdit").text("编辑");
	     $("#xFooter").css("display","none");
	      flag = true;
	      change = 0;
	} 	
});
$(".xLiCon_top img").each(function(i,e){
	var bol = true;
$(this).on("touchstart",function(){
   if(change == 1){
	if (bol) {
		$(this).attr({
		src:"../img/mine/collect/red.png"
	      });
	     bol = false;
	} else{
		$(this).attr({
		src:"../img/mine/collect/gray.png"
	      });
	    bol = true;
	}
	}
})
})


$(document).on("touchstart",".xChecked",function(){
	$(".xChecked").attr({
		src:"../img/mine/collect/checked.png"
	});
	$(".xLiCon_top img").attr({
		src:"../img/mine/collect/red.png"
    });
})

$(document).on("touchstart",".xBtn1",function(){
	$(".xLiCon_top img").attr({
		src:"../img/mine/collect/gray.png"
	      });
	$(".xChecked").attr({
		src:"../img/mine/collect/check-two.png"
	});
})
$(document).on("touchstart",".xBtn2",function(){
	   $("img[src$='../img/mine/collect/red.png']").parent().parent().remove()
	   $(".xChecked").attr({
		src:"../img/mine/collect/check-two.png"
	});
})
