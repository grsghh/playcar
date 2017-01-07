var bol = true;
$(document).on("touchstart","#footer button:nth-of-type(1)",function(){
//	if(bol){
//		$(this).removeClass().addClass("btn_two");
//	    $(this).html("取消关注");
//	    bol = false;
//	}else{
//		$(this).removeClass().addClass("btn_one");
//	    $(this).html("关注");
//	    bol = true;
//	}
  $(this).toggleClass("btn-two btn_one");
//if ($(".btn_one")) {
//	   $(this).text("关注")
//} else{
//	$(this).text("取消关注")
//}
	
})
