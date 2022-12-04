var startQuizBtn = document.getElementById("startQuizBtn");
var timerSpan = document.getElementById("timerspan");
var mainEl = document.querySelector("main");
var buttons = document.querySelectorAll("button");
var time = 60;
let i = 0;

// you might store your questions and answers in an array, i.e. a list
// and then you cycle through that list, displaying a question and its 4 choices
//

var questionsArray = [
  {
    question: "A name of storage location",
    choice1: "variable",
    choice2: "array",
    choice3: "for loop",
    choice4: "operator",
    correctChoice: "choice1",
  },
  {
    question: "A block of code designed to perform a particular task.",
    choice1: "variable",
    choice2: "function",
    choice3: "for loop",
    choice4: "syntax",
    correctChoice: "choice2",
  },
  {
    question: "A block of code designed to perform a particular task.",
    choice1: "variable",
    choice2: "function",
    choice3: "for loop",
    choice4: "syntax",
    correctChoice: "choice2",
  },
  {
    question: 'What is this called? "++"',
    choice1: "decrement",
    choice2: "modulus",
    choice3: "addition",
    choice4: "increment",
    correctChoice: "choice4",
  },
  {
    question: "Which of these are JavaScript operators",
    choice1: "Arithmetic",
    choice2: "Logical",
    choice3: "Type",
    choice4: "All of these above",
    correctChoice: "choice4",
  },
];

// In this case, I would list the goals like this:
// 1. display the first question !
// 2. Allow the user to choose an answer to the question
// 3. determine if that choice is correct or not
// 4. if correct, write code that accounts for a correct answer
// 5. If incorrect, write code to account for an incorrect answer
// 6. Once both of those are done, call your function to render the next question

function renderQuestionToScreen(questionObject) {
  var questionHeader = document.createElement("h3");
  questionHeader.textContent = questionObject.question;
  var questionList = document.createElement("ul");

  for (let i = 1; i <= 4; i++) {
    var choice = document.createElement("li");
    choice.textContent = questionObject[`choice${i}`];
    questionList.append(choice);
  }
  mainEl.append(questionHeader, questionList);
}

startQuizBtn.addEventListener("click", function () {
  console.log("startbtnwasclicked");
  mainEl.replaceChildren();
  renderQuestionToScreen(questionsArray[i]);
  // for(let i = 0; i < questionsArray.length - 1; i++) {
  //     // renderQuestionToScreen(questionsArray[i]);
  // }
});

startQuizBtn.addEventListener("click", startGame);

function startGame() {
  var intervalId = setInterval(function () {
    console.log(`Time left is ${time} sec`);
    timerSpan.textContent = time;
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
  console.log("startbtnwasclicked");
  mainEl.replaceChildren();
  renderQuestionToScreen(questionsArray[i]);
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");
  var button4 = document.createElement("button");
  button1.textContent = questionsArray[1].choice1;
  button2.textContent = questionsArray[2].choice2;
  button3.textContent = questionsArray[3].choice3;
  button4.textContent = questionsArray[4].choice4;
  
}
