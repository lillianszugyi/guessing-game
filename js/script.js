var userName = prompt("Before we get started - what\'s your name?");
  // var el = document.getElementById('welcome').innerHTML TODO something wrong with code. Want to print to document.
  // "Thanks " + userName + ". Nice to meet you, and good luck!";
  console.log("userName: " + userName);



// // Loop to fill in questions in the page
// for (i=0; i < questions.length; i++){
//   document.getElementById("q"+(i+1)).innerHTML = questions[i][0];
// }
//
// var correctAnswers = 0;
// var question;
// var answer;
// var response;
// var correct = [];
// var incorrect = [];
//
// function print(message, id) {
//   var outputDiv = document.getElementById(id);
//   outputDiv.innerHTML = message;
// }
//
//
// function buildList(arr) {
//   var listHTML = '<ol>';
//     for (var i = 0; i < arr.length; i += 1) {
//       listHTML += '<li>' + arr[i] + '</li>';
//     }
//     listHTML += '</ol>';
//     return listHTML;
// }
//
// for (var i = 0; i < questions.length; i += 1) {
//   question = questions[i].question;
//   answer = questions[i].answer;
//   // response = prompt(question).toLowerCase();
//   if (response === answer) {
//     correctAnswers += 1;
//     correct.push(question);
//     console.log("response: correct");
//   } else {
//     incorrect.push(question);
//     console.log("response: incorrect");
//   }
// }
//
// function question1 () {
//   var userAnswer = document.getElementById('res1');
//   console.log("q1 function");
// }
//
// var imgEl = document.getElementById('img1');
// imgEl.src = "img/black.jpg";
//
// html = "You got " + correctAnswers + " question(s) right.";
// // html += "<h3>You got these questions correct:</h3>";
// // html += buildList(correct);
// // html += "<h3>You got these questions incorrect:</h3>";
// // html += buildList(incorrect);
// print(html, "output");
