$(function() {
	if(localStorage.phone) {
		changeName();
	}
	var bol = true;
	$(document).on("touchstart", "#xSwitches", function() {
		if(bol) {
			$("#xBox").css("left", "80%");
			bol = false;
		} else {
			$("#xBox").css("left", "0");
			bol = true;
		}
	})
	$(document).on("touchstart", "#xSpit-language", function() {
		window.location.href = "../home/tucao.html"
	});
	$(document).on("touchstart", "#xUser div button", function() {
		window.location.href = "../mine/register.html";
	});
	$(document).on("touchstart", "#xAddGame", function() {
		window.location.href = "../home/game-manage.html";
	});
	$("#xBox").bind("swipeleft swiperight", function(even) {
			even.preventDefault()
			switch(even.type) {
				case "swipeleft":
					{
						$(this).css("left", "0")
						break;
					}
				case "swiperight":
					{
						$(this).css("left", "80%")
						break;
					}
			}
		})
		//封装登录成功后换名字
	function changeName() {
		$(".xNone").css("display", "none");
		$(".xAccount").css({
			display: "block"
		})
		$(".xAccount").text(localStorage.phone);	
	}
})