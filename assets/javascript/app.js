
// Objects of questions and their answer that corresponds to a data-value

var questions = {
  q1: ["Which actor has been a vampire in Buffy?", "2"],
  q2: ["Where does the saying Five by Five come from?", "0"],
  q3: ["What is the name of Buffy's 'evil' nemesis slayer?", "3"],
  q4: ["What is the name of the club where Buffy hangs out?", "1"],
  q5: ["Angel or Spike", "6"]
};

var choices = {
  ch1: ["Adrian Brody", "Chris Hemsworth", "Paul Reubens", "Paul Newman"],
  ch2: ["Radio Operators", "Architects", "Just made it up", "Sk8ter Doods"],
  ch3: ["Duffy", "Hope", "George", "Faith"],
  ch4: ["Chubbie's", "The Bronze", "The Max", "The Greek"],
  ch5: ["Angel", "Spike"]
};

// GLOBAL VARIABLES

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var qTimer;
var count = 30;

var qIndex = 0;
var choicesArray = [choices.ch1, choices.ch2, choices.ch3, choices.ch4, choices.ch5];
var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
var imageArray = ["assets/images/paulRVampire.jpg", "assets/images/fivebyFive.jpg", "assets/images/faithPunch.gif", "assets/images/bronze.jpg", "assets/images/angelOrSpike.gif"];
console.log(questionsArray);

// FUNCTIONS

// Renders the current questions
function renderQuestion() {
  count = 30;
  $("#question").text(questionsArray[qIndex][0]);
}

// Renders choices for the current question
function renderChoices() {
  $("#choices").empty();
  for (var i = 0; i < choicesArray[qIndex].length; i++) {
    var buttonChoice = $("<div>");
    buttonChoice.addClass("choice-button border rounded border-dark");
    buttonChoice.attr("data-answervalue", i);
    buttonChoice.text(choicesArray[qIndex][i]);
    $("#choices").append(buttonChoice);
    console.log(buttonChoice.attr.answervalue);
  }
}

// Results screen between questions (lasts 3 seconds)
function resultsScreen(ans) {

  clearInterval(qTimer);
  $("#choices").empty();
  if (ans === "correct") {
    correct++;
    $("#question").html("<h3>CORRECT!</h3>");
    $("#choices").html("<img class='images' src='"+imageArray[qIndex]+"'>");
  } 
  else if (ans === "incorrect") {
    incorrect++;
    $("#question").html("<h3>WRONG ANSWER!</h3>");
    $("#choices").html("<img class='images' src='"+imageArray[qIndex]+"'>");
  }
  else if (ans === "time") {
    unanswered++;
    $("#question").html("<h3>Out of time...</h3>");
    $("#choices").html("<img class='images' src='assets/images/buffering.jpg'>");
  }
  setTimeout(round, 1000 * 4);
  qIndex++;
}

// Final Stats Screen
function gameOver() {
  $("#question").html("<h1>All done, here's how you did!<h1><h3>Correct Answers: </h3>" + correct + "<h3>Incorrect Answers: </h3>" + incorrect + "<h3>unanswered: </h3>" + unanswered);
  $("#choices").empty();
  $("#start").show();
}

// The Countdown
function countdown() {
  count--;
  $("#timer").text(count);
  if (count === 0) {
    resultsScreen("time");
  }

}

function round() {
  if (qIndex === questionsArray.length) {
    gameOver();
  }
  else {
    renderQuestion();
    renderChoices();
    qTimer = setInterval(countdown, 1000);
  }

  $(".choice-button").on("click", function() {
    var answer = ($(this).attr("data-answervalue"));
    console.log(answer);
    console.log(questionsArray[qIndex][1]);

    if (answer === questionsArray[qIndex][1]) {
      resultsScreen("correct");
    }
    else if (answer !== questionsArray[qIndex][1]) {
      resultsScreen("incorrect");
    }

  });
}


// MAIN PROGRAM

$(".game").hide();
$("#start").on("click", function() {
  qIndex = 0;
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  $(this).hide();
  $(".game").show();
  round();
  

});