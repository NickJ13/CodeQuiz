var startQuizBtn = document.getElementById('startQuizBtn');
var timerSpan = document.getElementById('timerspan');
var mainEl = document.querySelector('main');
var buttons = document.querySelectorAll('button');
var time = 10;
let i = 0;

// you might store your questions and answers in an array, i.e. a list
// and then you cycle through that list, displaying a question and its 4 choices
// 

var questionsArray = [
    {
        question: 'A name of storage location',
        choice1: 'variable',
        choice2: 'array',
        choice3: 'for loop',
        choice4: 'operator',
        correctChoice: 'choice1'
    },
    {
        question: 'A block of code designed to perform a particular task.',
        choice1: 'variable',
        choice2: 'function',
        choice3: 'for loop',
        choice4: 'syntax',
        correctChoice: 'choice2'
    },
    {
        question: 'A block of code designed to perform a particular task.',
        choice1: 'variable',
        choice2: 'function',
        choice3: 'for loop',
        choice4: 'syntax',
        correctChoice: 'choice2'
    },
    {
        question: 'What is this called? "++"',
        choice1: 'decrement',
        choice2: 'modulus',
        choice3: 'addition',
        choice4: 'increment',
        correctChoice: 'choice4'
    },
    {
        question: 'Which of these are JavaScript operators',
        choice1: 'Arithmetic',
        choice2: 'Logical',
        choice3: 'Type',
        choice4: 'All of these above',
        correctChoice: 'choice4'
    },
]

function renderQuestionToScreen(questionObject) {
    var questionHeader = document.createElement('h3');
    questionHeader.textContent = questionObject.question;
    var questionList = document.createElement('ul');

    for (let i = 1; i <= 4; i++) {
        var choice = document.createElement('li');
        choice.textContent = questionObject[`choice${i}`];
        questionList.append(choice);
    }
    mainEl.append(questionHeader, questionList);
}

startQuizBtn.addEventListener('click', function () {
    console.log("startbtnwasclicked");
    mainEl.replaceChildren();
    // call renderQuestionToScreen
   
    for(let i = 0; i < questionsArray.length - 1; i++) {
        renderQuestionToScreen(questionsArray[i]);
    }
    

})

startQuizBtn.addEventListener('click', function() {
    var intervalId = setInterval(function(){
        console.log(`Time left is ${time} sec`);
        timerSpan.textContent = time;
        time--;
        if(time <= 0) {
            clearInterval(intervalId);

        }
    }, 1000)

})