var userName = prompt("Hi there! What's your name?")
  console.log("variable userName: " + userName)
  document.write("<p>Hey " + userName + ". Nice to meet you. Let's get started.</p>")

var correct = 0;

var questions = ["Was I a cake decorator while I was in college?","What is my favorite color?", "Do I plan to move out of Seattle someday?","How many years did I play the flute?", "I do CrossFit and I just hit a PR on my one rep max deadlift. Can you guess how much weight I lifted in pounds?", "I love taking photos. What are my favorite subjects?"]
var answers = ['yes', 'black', 'no', '15', '225', 'dogs || coffee || food || plants']

function game(x, y) {
  var ques = prompt(questions[i]).toLowerCase();
  if (ques === answers[i]) {
    document.write("<p>You got it right!</p>");
    console.log("correct");
    correct++;

  } else {
    document.write('<p>You got it wrong!</p>');
    console.log("incorrect");
  }
}

for (var i = 0; i < questions.length; i += 1) {
  game(questions[i], answers[i]);
}

document.write("<h3>You got " + correct + " out of 6 questions correct.</h3>");

if (correct === 6) {
  document.write("<p> You know me very well! Too well, in fact! Are you <em>me</em>???</p>");
} else if (correct >=4) {
  document.write("<p> Not bad!</p>");
} else {
  document.write("<p> It's like you don't even know me!</p>");
}

function numberGuess(correctNumber) {
  var userGuess = prompt("One bonus question: I am thinking of a number between 1 and 10. Guess my number.");
  if (parseInt(userGuess) === correctNumber) {
    document.write("<p>You got it right! My number was " + correctNumber + ".</p>");
    console.log("bonus: correct");
  } else {
    document.write("<p>Sorry, you got wrong. I was thinking " + correctNumber + ".</p>");
    console.log("bonus: incorrect");
  }
}

numberGuess(8);

// var answer1 = prompt("True or false. My favorite color is black.");
//   if (answer1.toLowerCase() === "true") {
//     correct += 1;
//   }
//
// var answer2 = prompt("True or false. When I was in college, I was a cake decorator.");
//   if (answer2.toLowerCase() === "true") {
//     correct += 1;
//   }
//
// var answer3 = prompt("True or false. I want to leave Seattle someday.");
//   if (answer3.toLowerCase() === "false") {
//     correct += 1;
//   }
//
// var answer4 = prompt("I was a classical flutist for a long time. Can you guess how many years I actively played?");
//   if (parseInt(answer4) === 15) {
//     correct += 1;
//   }
//
// var answer5 = prompt("How many dogs do I have?");
//   if (parseInt(answer5) === 2) {
//     correct += 1;
//   }
//
// var answer6 = prompt("I do CrossFit and I just hit a PR on my one rep max deadlift. Can you guess how much weight I lifted in pounds?");
//   if (parseInt(answer6) === 225) {
//     correct += 1;
//   }
