let userScore = 0;
let questionNumber = 2;

function createQuestion(questionNumber) {
    const questionTitle = document.querySelector("#question");
    questionTitle.textContent = questions[questionNumber].question;
}
createQuestion(questionNumber);

function createAnswerElements(questionNumber) {
    const answersContainer = document.querySelector("#answersContainer");
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
            buttonContainer.append(radioButton, labelButton),
            answersContainer.append(buttonContainer);
        }
    }
}
createAnswerElements(questionNumber);

function insertAnswers(questionNumber) {
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
    }else{
        const answer = document.querySelectorAll(".radioAnswer");
        const label = document.querySelectorAll(".radioLabel");
        answer[0].value = "True";
        label[0].textContent = "True";
        answer[1].value = "False";
        label[1].textContent = "False";
    }
}
insertAnswers(questionNumber);
