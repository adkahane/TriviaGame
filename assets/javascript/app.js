// VARIABLES
    // ==========================================================================
    // The object questions for our quiz game.
    var questions = {
      q1: ["Which actor has been a vampire in Buffy?", "3"],
      q2: ["There are 365 days in a year.", "t"],
      q3: ["There are 42 ounces in a pound.", "f"],
      q4: ["The Declaration of Independence was created in 1745.", "f"],
      q5: ["Bananas are vegetables.", "f"]
    };

    // We start the game with a score of 0.
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    // Variable to hold the index of current question.
    var qIndex = 0;
    // Array of questions.
    var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
    console.log(questionsArray)

    // FUNCTIONS
    // ==============================================================================

    // Function to render questions.
    function renderQuestion() {
      //If there are still more questions, render the next one.

      if (qIndex <= (questionsArray.length - 1)) {
        $("#question").html = questionsArray[qIndex][0];
      }
      // If there aren't, render the end game screen.
      else {
        $("#question").html = "Game Over!";
        $("#score").html = "Final Score: " + score + " out of " + questionsArray.length;
      }
    }

    // Function that shows final stats
    function finalStats() {
      $("#question").html = "<h1>All done, here's how you did!<h1><h3>Correct Answers: </h3>" + correct + "<h3>Incorrect Answers: </h3>" + incorrect + "<h3>unanswered: </h3>" + unanswered;

      $("#choices").append = "<h3 class='ml-auto mr-auto'>Correct Answers: " + correct;
    }


    // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.
    // renderQuestion();
    // updateScore();

    // When the user presses a key, it will run the following function...
    $("#start").on("click", function() {

      // If there are no more questions, stop the function.
      if (qIndex === questionsArray.length) {
        return;
      }

      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = event.key;

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
          alert("Wrong!");
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        qIndex++;
        renderQuestion();

      }

    });