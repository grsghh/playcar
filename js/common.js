//清除默认
var xSwitches = document.getElementById("xSwitches");
var xUser = document.getElementById("xUser");
var xBox = document.getElementById("xBox");
var bol = true;
xSwitches.onclick = function() {
	if(bol) {
		xBox.style.left = "80%";
		bol = false;
	} else {
		xBox.style.left = "0";
		bol = true;
	}
}
