// Objects of questions and their answer that corresponds to a data-value
var questions = {
  q1: ["Which actor has been a vampire in Buffy?", "3"],
  q2: ["Where does the saying Five by Five come from?", "1"],
  q3: ["What is the name of Buffy's 'evil' nemesis slayer?", "4"],
  q4: ["What is the name of the club where Buffy hangs out?", "2"],
  q5: ["Angel or Spike", "0"]
};

var choices = {
  ch1: ["Adrian Brody", "Chris Hemsworth", "Paul Reubens", "Paul Newman"],
  ch2: ["Radio Operators", "Architects", "Just made it up", "Sk8ter Doods"],
  ch3: ["Duffy", "Hope", "George", "Faith"],
  ch4: ["Chubbie's", "The Bronze", "The Max", "The Greek"],
  ch5: ["Angel", "Spike"]
};

// Global Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var qTimer;
var count = 30;

var qIndex = 0;
var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
var imageArray = ["assets/images/paulRVampire.jpg", "assets/images/fivebyFive.jpg", "assets/images/faithPunch.gif", ""]
console.log(questionsArray)

// FUNCTIONS
// ==============================================================================

// Renders questions.
function renderQuestion() {
  count = 30;
  $("#question").text(questionsArray[qIndex][0]);
}

function renderChoices() {

}

function resultsScreen(ans) {
  if (ans === "correct") {
    correct++;
    $("#question").html("<h3>CORRECT!</h3>");


  } 
  else if (ans === "incorrect") {
    incorrect++;
    $("#question").html("<h3>WRONG ANSWER!</h3>");
  }
  else if (ans === "time") {
    unanswered++;
    $("#question").html("<h3>Out of time...</h3>");
  }
}

// Function that shows final stats
function gameOver() {
  $("#question").html("<h1>All done, here's how you did!<h1><h3>Correct Answers: </h3>" + correct + "<h3>Incorrect Answers: </h3>" + incorrect + "<h3>unanswered: </h3>" + unanswered);

  $("#choices").empty();
  $("#start").show();
}

function countdown() {
  count--;
  $("#timer").text(count);
  if (count === 0) {
    resultsScreen("time")
  }

}

function round() {
  if (qIndex === questionsArray.length) {
    gameOver();
  }
  else {
    renderQuestion();
    qTimer = setInterval(countdown, 1000);
}


// MAIN PROGRAM

$(".game").hide();
$("#start").on("click", function() {
  $(this).hide();
  $(".game").show();
  
  round();


//----------------------------------------------------------------------------


  // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
  var userInput = $("#question").data('name', 'value');

  // Only run this code if "t" or "f" were pressed.
  if (userInput === "t" || userInput === "f") {

    // If they guess the correct answer, increase and update score, alert them they got it right.
    if (userInput === questionsArray[qIndex][1]) {
      alert("Correct!");
      score++;
      updateScore();
    }
    // If wrong, alert them they are wrong.
    else {
      wrongPage();
    }

    // Increment the questionIndex variable and call the renderQuestion function.
    qIndex++;
    renderQuestion();
  }
});