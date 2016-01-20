var userName = prompt("Before we get started, please tell me your name.");
  console.log("userName: " + userName);

function welcome () {
  var welcomeEl = document.getElementById("welcome");
  welcomeEl.innerHTML = "Thanks, " + userName + ". Let's play!";
}

var counter = 0;
var question;
var answer;
var img;
var userAnswer;
var questionEl;
var answerEl;
var endEl;

var data = [
  {question: "Was I a cake decorator during college?", answer: "yes", img: "img/cake.jpg"},
  {question: "What is my favorite color?", answer: "black", img: "img/black.jpg"},
  {question: "Am I planning to move away from Seattle?", answer: "no", img: "img/seattle.jpg"},
  {question: "I was a classically trained flutist. Can you guess how many years I played?", answer: "15", img: "img/symphony.jpg"},
  {question: "I recently hit a deadlift PR. Can you guess how much I lifted in pounds?", answer: "225", img: "img/crossfit.jpg"},
  {question: "I love taking photos. What is my favorite subject?", answer: "dogs", img: "img/dogs.jpg"},
];

function questions () {
  for (var i = 0; i < data.length; i += 1) {

    question = data[i].question;
    questionEl = document.getElementById("q" + i);
    questionEl.textContent = question;

    userAnswer = prompt(data[i].question).toLowerCase();
    answer = data[i].answer;
    img = data[i].img;

    answerEl = document.getElementById("a" + i);
    if (userAnswer === answer) {
      counter += 1;
      console.log("response: correct");
      answerEl.innerHTML =
        "<p>You answered: " + userAnswer + ".</p>" +
        "<p>That's right!</p>" +
        "<img class=\"img\" src=\"" + img + "\" />";
    } else {
      console.log("response: incorrect");
      answerEl.innerHTML =
        "<p>You answered: " + userAnswer + ".</p>" +
        "<p>That's incorrect!</p>" +
        "<img class=\"img\" src=\"" + img + "\" />";
    }
  }
endEl = document.getElementById("end");
endEl.innerHTML = "Thanks for playing, " + userName + "! You got " + counter + " right out of 6 questions.";
}

welcome();
questions();
