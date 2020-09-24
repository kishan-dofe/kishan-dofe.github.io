var questions = [
	"Enter Questions Here", 
	"Separate New questions with commas"
];

var correct = [
	"Correct answers to the questions go here", 
	"correct.length must equal questions.length"
] 

var dummy = [
	"incorrect answers go here",
	"dummy.length must equal questions.length"
]
/* IMPORTANT - REMEMBER TO LINK TO THIS JS FILE FROM THE HTML 
	WITH THE SCRIPT TAG AT THE BOTTOM 	*/
	
function results(points) {

	$("#x").css("display", "none");
	$("#y").css("display", "none");
	$("#p").css("display", "none");
	$("#q").css("display", "none");
	
	if (points == questions.length) {
		question.innerHTML = "Full Marks!";
		z.innerHTML = "Congratulations!";
	}
	if (points == 1) {
		question.innerHTML = "Better luck next time!";
		z.innerHTML = "You scored 1 point";
	}
	if (points == 0) {
		question.innerHTML = "Better luck next time!";
		z.innerHTML = "You scored 0 points";
	}
	else {
		question.innerHTML = "Almost There!";
		z.innerHTML = "You scored " + points + " points!";
	}
	u.style.flexDirection = "row";
	z.style.padding = "5vh";
	z.style.fontSize = "3vh";
}

//  CODE that wont need changing //
var x = document.getElementById("back");
x.href = "../quiz.html"

var points = "0";
var question_number_int = 1;
var correct_button = "0";

function init() {
	question_number.innerHTML = "Question " + question_number_int + "/" + questions.length;
	question.innerHTML = questions[0];
	if (Math.random() >= 0.5) {
		correct_button = "0";
		yes.innerHTML = correct[0];
		no.innerHTML = dummy[0];
	}
	else {
		correct_button = "1";
		yes.innerHTML = dummy[0];
		no.innerHTML = correct[0];
	}
}

function zero() {
	if (question_number_int < questions.length+1) {
		if (correct_button == "0") {
			points ++;
		}
		question_number_int ++;
		question_number.innerHTML = "Question " + question_number_int + "/" + questions.length;
		question.innerHTML = questions[question_number_int -1];
		if (Math.random() >= 0.5) {
			correct_button = "0";
			yes.innerHTML = correct[question_number_int -1];
			no.innerHTML = dummy[question_number_int -1];
		}
		else {
			correct_button = "1";
			yes.innerHTML = dummy[question_number_int -1];
			no.innerHTML = correct[question_number_int -1];
		}
		if (question_number_int == questions.length+1) {
			question_number.innerHTML = "Results!";
			results(points);
		}
	}
}

function one() {
	if (question_number_int < questions.length+1) {
		if (correct_button == "1") {
			points ++;
		}
		question_number_int ++;
		question_number.innerHTML = "Question " + question_number_int + "/" + questions.length;
		question.innerHTML = questions[question_number_int -1];
		if (Math.random() >= 0.5) {
			correct_button = "0";
			yes.innerHTML = correct[question_number_int -1];
			no.innerHTML = dummy[question_number_int -1];
		}
		else {
			correct_button = "1";
			yes.innerHTML = dummy[question_number_int -1];
			no.innerHTML = correct[question_number_int -1];
		}
		if (question_number_int == questions.length+1) {
			question_number.innerHTML = "Results!";
			results(points);
		}
	}
}
