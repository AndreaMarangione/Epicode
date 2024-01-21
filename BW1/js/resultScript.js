let wrongAnswer = 0;
let emptyAnswer = 0;
let score = localStorage.getItem("score");
const localStorageAnswers = localStorage.getItem("answers");
const answers = JSON.parse(localStorageAnswers);
const frontCircle = document.getElementById("frontCircle");

function result() {
    const resultBenchmark = document.querySelector("#resultBenchmark");
    const resultVote = document.querySelector("#resultVote");
    const correctAnswerCount = document.querySelector("#correctAnswerCount");
    const resultStar = document.querySelector("#resultStar");
    if (score > 5) {
        resultBenchmark.innerHTML = "<p>Passed!</p>";
    } else {
        resultBenchmark.innerHTML = "<p>Not passed!</p>";
    }
    resultVote.innerHTML = `<p>${score * 10}%</p>`;
    correctAnswerCount.innerHTML = `<p>${score} / 10 questions`;
    for (let i = 1; i <= score; i++) {
        const star = document.createElement("img");
        star.classList.add("resultStarVote");
        star.src = "../BW1/css/assets/star.svg";
        resultStar.append(star);
    }
    frontCircle.style.strokeDashoffset = (questions.length - score) / 10;
}
result();

function infoBenchmarkResult() {
    const correctAnswerNum = document.querySelector("#correctAnswerNum");
    const wrongAnswerNum = document.querySelector("#wrongAnswerNum");
    const emptyAnswerNum = document.querySelector("#emptyAnswerNum");
    correctAnswerNum.textContent = score;
    answers.forEach(answerObj => {
        if(answerObj.type === "incorrect"){
            wrongAnswer++;
        }else if(answerObj.type === null){
            emptyAnswer++;
        }
    })
    wrongAnswerNum.textContent = wrongAnswer;
    emptyAnswerNum.textContent = emptyAnswer;
}
infoBenchmarkResult();
