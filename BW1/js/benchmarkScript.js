let userAnswer = null;
let countTime = 31;
const countdown = document.querySelector("#countdown");
const nextBtn = document.querySelector("#nextBtn");
const indexPage = document.querySelector("#indexPage");

//countdown
setInterval(function () {
    countTime--;
    countdown.textContent = countTime;
    if (countTime <= 0) {
        nextBtn.click();
    }
}, 1000)

//show question number on footer
indexPage.innerHTML = `QUESTION ${questionNumber + 1} <span>/ 10</span>`;

//functions
function createQuestion() {
    const questionTitle = document.querySelector("#question");
    questionTitle.textContent = questions[questionNumber].question;
}
createQuestion();

function createAnswerElements() {
    const main = document.querySelector("main");
    const answersContainer = document.createElement("section");
    answersContainer.id = "answersContainer";
    if (questions[questionNumber].type === "multiple") {
        for (let i = 0; i < 4; i++) {
            const button = document.createElement("input");
            button.type = "button";
            button.classList.add("buttonAnswer");
            answersContainer.append(button);
        }
    } else {
        for (let i = 0; i < 2; i++) {
            const buttonContainer = document.createElement("div");
            const radioButton = document.createElement("input");
            const labelButton = document.createElement("label");
            buttonContainer.classList.add("radioButtonContainer");
            radioButton.type = "radio";
            radioButton.name = "boolean";
            radioButton.classList.add("radioAnswer");
            labelButton.classList.add("radioLabel");
            buttonContainer.append(radioButton, labelButton);
            answersContainer.append(buttonContainer);
        }
    }
    main.append(answersContainer);
}
createAnswerElements();

function insertAnswers() {
    if (questions[questionNumber].type === "multiple") {
        const answer = document.querySelectorAll(".buttonAnswer");
        const randomNum = Math.floor(Math.random() * 4);
        let incorrectIndex = 0;
        answer[randomNum].value = questions[questionNumber].correct_answer;
        for (let i = 0; i < answer.length; i++) {
            if (i === randomNum) {
                continue
            } else {
                answer[i].value = questions[questionNumber].incorrect_answers[incorrectIndex];
                incorrectIndex += 1;
            }
        }
    } else {
        const answer = document.querySelectorAll(".radioAnswer");
        const label = document.querySelectorAll(".radioLabel");
        answer[0].value = "True";
        label[0].textContent = "True";
        answer[1].value = "False";
        label[1].textContent = "False";
    }
}
insertAnswers();

function readUserAnswer() {
    if (questions[questionNumber].type === "multiple") {
        const answer = document.querySelectorAll(".buttonAnswer");
        answer.forEach(button => {
            button.addEventListener("click", function () {
                userAnswer = button.value; 
            })
        })
    } else {
        const answer = document.querySelectorAll(".radioAnswer");
        answer.forEach(button => {
            button.addEventListener("click", function () {
                userAnswer = button.value;
            })
        })
    }
}
readUserAnswer();

function checkAndSaveUserAnswer() {
    let answerObj = {
        answer: "",
        type: "",
    }
    if (userAnswer === questions[questionNumber].correct_answer) {
        userScore += 1;
        answerObj.type = "correct";
    }else if(userAnswer === null){
        answerObj.type = null;
}else{
        answerObj.type = "incorrect";
    }
    answerObj.answer = userAnswer;
    userAnswerSaved.push(answerObj);
    userAnswer = null;
}

function removeAnswerElements() {
    const answersContainer = document.querySelector("#answersContainer");
    answersContainer.remove();
}

function goToNextQuestion() {
    nextBtn.addEventListener("click", function () {
        if (questionNumber < questions.length - 1) {  
            checkAndSaveUserAnswer();
            removeAnswerElements();
            questionNumber++;
            createQuestion();
            createAnswerElements();
            insertAnswers();
            readUserAnswer();
            countTime = 31;
            indexPage.innerHTML = `QUESTION ${questionNumber + 1} <span>/ 10</span>`
            console.log(userScore);
            console.log(questionNumber);
            console.log(userAnswerSaved);
        } else {
            window.location = "../BW1/result.html"
        }
    })
}
goToNextQuestion();
