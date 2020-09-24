window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 4000)
}

var x = document.getElementsByClassName("link_one");
var i;
for (i = 0; i < x.length; i++) {
	x[i].href = "../quiz/quiz.html";
}

var x = document.getElementsByClassName("link_two");
var i;
for (i = 0; i < x.length; i++) {
	x[i].href = "../index.html";
}

var x = document.getElementsByClassName("link_three");
var i;
for (i = 0; i < x.length; i++) {
	x[i].href = "../about/about.html";
}
