var random=Math.floor(Math.random() * 100 + 1);
document.querySelector("#click").addEventListener("click",function(){
	var text1=document.querySelector("#text");
var result=document.querySelector("#result");
var random=Math.floor(Math.random() * 100 + 1);
	if(text1.value==""){
		alert("Please type any name");
	}else{
		result.innerHTML="<b style='color:green;'>You Love your favourite person</b>"+" = "+random+"%";
	}
});
