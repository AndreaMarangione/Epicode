let wrongAnswer = 0;
let emptyAnswer = 0;
let score = localStorage.getItem("score");

function result() {
    const resultBenchmark = document.querySelector("#resultBenchmark");
    const resultVote = document.querySelector("#resultVote");
    const correctAnswerCount = document.querySelector("#correctAnswerCount");
    if (score > 5) {
        resultBenchmark.innerHTML = "<p>Passed!</p>";
    } else {
        resultBenchmark.innerHTML = "<p>Not passed!</p>";
    }
    for (let i = 1; i <= score; i++) {
        const star = document.createElement("img");
        star.classList.add("resultStarVote");
        star.src = "../BW1/css/assets/star.svg";
        resultVote.append(star);
    }
    correctAnswerCount.innerHTML = `<p>${score} / 10 questions`;
}
result();

/* function infoBenchmarkResult() {
    const correctAnswerNum = document.querySelector("#correctAnswerNum");
         const wrongAnswerNum = document.querySelector("#wrongAnswerNum");
        const emptyAnswerNum = document.querySelector("#emptyAnswerNum");
    correctAnswerNum.textContent = userScore;

    


}
infoBenchmarkResult(); */
