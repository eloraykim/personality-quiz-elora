//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

var result = document.getElementById("result");

var keithScore = 0;
var nedScore = 0;
var zachScore = 0;
var eugeneScore = 0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");





//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", keith);
q1a2.addEventListener("click", ned);
q1a3.addEventListener("click", zach);
q1a4.addEventListener("click", eugene);

q2a1.addEventListener("click", eugene);
q2a2.addEventListener("click", zach);
q2a3.addEventListener("click", ned);
q2a4.addEventListener("click", keith);

q3a1.addEventListener("click", zach);
q3a2.addEventListener("click", ned);
q3a3.addEventListener("click", keith);
q3a4.addEventListener("click", eugene);

q4a1.addEventListener("click", ned);
q4a2.addEventListener("click", eugene);
q4a3.addEventListener("click", zach);
q4a4.addEventListener("click", keith);

q5a1.addEventListener("click", zach);
q5a2.addEventListener("click", keith);
q5a3.addEventListener("click", ned);
q5a4.addEventListener("click", eugene);

q6a1.addEventListener("click", eugene);
q6a2.addEventListener("click", keith);
q6a3.addEventListener("click", zach);
q6a4.addEventListener("click", ned);

q7a1.addEventListener("click", ned);
q7a2.addEventListener("click", zach);
q7a3.addEventListener("click", eugene);
q7a4.addEventListener("click", keith);




//#TODO: Define quiz functions here
function keith() {
  keithScore += 1;
  questionCount += 1;
  //alert("One Point to Keith!");
  if (questionCount >= 7){
      updateResult();
  }
}

function ned() {
  nedScore += 1;
  questionCount += 1;
  //alert("One Point to Ned!");
  if (questionCount >= 7){
      updateResult();
  }
}

function zach() {
  zachScore += 1;
  questionCount += 1;
  //alert("One Point to Zach!");
  if (questionCount >= 7){
      updateResult();
  }
}

function eugene() {
  eugeneScore += 1;
  questionCount += 1;
  //alert("One Point to Eugene!");
  if (questionCount >= 7){
      updateResult();
  }
}

function updateResult(){
 if (keithScore >= 3){
    result.innerHTML = "Your BFF is Keith!";
 }
 else if(nedScore >=3){
    result.innerHTML = "Your BFF is Ned!";
 }
 else if(zachScore >=3){
    result.innerHTML = "Your BFF is Zach!";
 }
 else if (eugeneScore>= 3){
    result.innerHTML = "Your BFF is Eugene!";
 }
 else{
    result.innerHTML = "Oh no! All Try Guys are taken.";
 }
}
