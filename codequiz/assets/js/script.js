var startQuizBtn = document.getElementById("startQuizBtn");
var timerSpan = document.getElementById("timerspan");
var mainEl = document.querySelector("main");
var buttons = document.querySelectorAll("button");
var time = 60;
var currentQuestionIndex = 0;
var uChoices = document.getElementById("userChoices");


var questionsArray = [
  {
    question: "A name of storage location",
    choice: ["operator","array","variable","function"], 
    correctChoice: "array",
  },
  {
    question: "A block of code designed to perform a particular task.",
    choice: ["variable", "function", "for loop", "syntax"],
    correctChoice: "function",
  },
  {
    question: "loops through a block of code a number of times",
    choice: ["variable", "function", "for loop", "syntax"],
    correctChoice: "for loop",
  },
  {
    question: 'What is this called? "++"',
    choice: ["decrement", "modulus", "addition", "increment"],
    correctChoice: "increment",
  },
  {
    question: "Which of these are JavaScript operators",
    choice: ["Arithmetic", "Logical", "Type", "All of these above"],
    correctChoice: "All of these above",
  },
];



// 2. Allow the user to choose an answer to the question
// 3. determine if that choice is correct or not
// 4. if correct, write code that accounts for a correct answer
// 5. If incorrect, write code to account for an incorrect answer
// 6. Once both of those are done, call your function to render the next question

function renderQuestionToScreen(questionObject) {
  console.log('renderQuestionToScreen');
  var questionHeader = document.createElement("h3");
  console.log(questionHeader);
  questionHeader.textContent = questionObject.question;
  var questionList = document.createElement("ul");
  // console.log(questionObject);
  for (var i = 0; i < questionObject.choice.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute('style', 'display:block;');
    console.log(questionObject.choice[i]);
    choiceBtn.textContent = questionObject.choice[i];
    // console.log(questionList);
    questionList.append(choiceBtn);
    // console.log(questionList);

  }
  mainEl.append(questionHeader, questionList);
  console.log(mainEl);
}

startQuizBtn.addEventListener("click", function () {
  console.log("startbtnwasclicked");
  startTimer();
  // console.log(mainEl);
  // mainEl.replaceChildren();
  // console.log(mainEl);
  console.log(questionsArray[currentQuestionIndex]);
  renderQuestionToScreen(questionsArray[currentQuestionIndex]);
});

function startTimer() {
  var intervalId = setInterval(function () {
    console.log(`Time left is ${time} sec`);
    timerSpan.textContent = time;
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
    }
  }, 1000); 
};

function ifCorrect() {
  for (var i = 0; i < questionsArray.question.length; i++) {
    var question
  }
}



// 1. iterate each question in your questions array
// 2. for each iteration, you need to display the question, then the answer choices
// 3. once the question is rendered, apply the click events / helper function
// 4. the helper function mentioned above needs to check the selected answer and compare against the correct answer
// 5. use a if else to determine what the code should do from step 4.  (if correct, add points.  If not, deduct time)
// 6. move to next question and repeat

