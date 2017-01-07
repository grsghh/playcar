var ons = document.getElementsByClassName("xBtn1");
var offs = document.getElementsByClassName("xBtn2");
//关注
for(var i=0;i < ons.length;i++){
   (function(index){
   	ons[index].onclick = function(){
	ons[index].style.display = "none";
	offs[index].style.display = "block";
   }
   })(i)
}
//取消关注
for(var j=0;j < ons.length;j++){
   (function(index){
   	offs[index].onclick = function(){
	ons[index].style.display = "block";
	offs[index].style.display = "none";
   }
   })(j)
}

