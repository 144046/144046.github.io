$(function(){

funciton size() {
	document.getElementById("1").style.fontSize = "900px";

}

function getRandomInt(min, max) {
		
		return Math.floor(Math.random() * (max - min + 1) + min);
	}




	setInterval(size(), 1000);
	});