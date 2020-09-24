function refreshPage(){
    window.location.reload();
} 
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 4000)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


var header_text = document.getElementById("header_say");
header_text.style.opacity = 1;
$(document).ready(function(){
	$("#hexagon").animate({marginTop: "5vh"}, 4000, 'swing');
});
	
var call_time = 0;

var startTime = new Date().getTime();

var node_one = document.getElementById("trap_l");
var node_two = document.getElementById("trap_r");
var node_three = document.getElementById("trap_bl");
var node_four = document.getElementById("trap_br");

var one_start = 15;
var two_start = -15;
var three_start = 25;
var four_start = -25;

var a = 1;
var b = -1;
var f = 0;
var spin = function () {
	
	var header_text = document.getElementById("header_say");
	if (header_text.innerHTML === "Hello World" && header_text.style.opacity > 0) {
		header_text.style.opacity -= 0.01;
	}
	if (header_text.style.opacity == 0) {
		header_text.innerHTML = "Enter";
	}
	if (header_text.innerHTML === "Enter" && header_text.style.opacity < 1.01) {
		f++;
		header_text.style.opacity = f * 0.01;
	}
	if (call_time === 0) {
		startTime = new Date().getTime();
		call_time = 1;
		if (Math.round(Math.random()) === 0 )
		{
			a = 1;
			b = -1;
		} else {
			a = -1;
			b = 1;
		}
	}
	
	var currTime = new Date().getTime();
	var seconds = (currTime - startTime)/ 1000;
	
	
	new_rotation_l = (one_start - seconds * a* 27 * Math.sqrt(seconds));
	new_rotation_r = (two_start - seconds * b* 27 * Math.sqrt(seconds));
	new_rotation_bl = (three_start - seconds * a* 36 * Math.sqrt(seconds));
	new_rotation_br = (four_start - seconds * b* 36 * Math.sqrt(seconds));
	
	node_one.style.transform = "skew("+new_rotation_l+"deg)";
	node_two.style.transform = "skew("+new_rotation_r+"deg)";
	node_three.style.transform = "skew("+new_rotation_bl+"deg)";
	node_four.style.transform = "skew("+new_rotation_br+"deg)";
	
	if (seconds < 7) {
		window.requestAnimationFrame(spin);
	} else {
		call_time = 0;
		one_start = new_rotation_l;
		two_start = new_rotation_r;
		three_start = new_rotation_bl;
		four_start = new_rotation_br;
	}	
	
	
	
	
}
