var xFooterBottom_one = document.getElementById("xFooterBottom_one");
var xFooterBottom_two = document.getElementById("xFooterBottom_two");
xFooterBottom_one.onclick = function(){
	xFooterBottom_one.style.visibility = "hidden";
	xFooterBottom_two.style.display = "block";
}
xFooterBottom_two.onclick = function(){
	xFooterBottom_one.style.visibility = "visible";
	xFooterBottom_two.style.display = "none";
}
