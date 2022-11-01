let score = 0;
const showScore = document.getElementById('score')
console.log(showScore);

function countScore() {
    score++;
    console.log(score)
    showScore.textContent = score;


    if (score == 1) {
        console.log("Lucky number 1")
    }


}

function timeTwo() {
    score = score * 2
    showScore.textContent = score;
    console.log(score)
}

console.log(score)

function addfifty() {
    score = score + 50
    showScore.textContent = score;
    console.log(score)
}
function addhundred() {
    score = score + 500
    showScore.textContent = score;
    console.log(score)
}
function addfthousand() {
    score = score + 5000
    showScore.textContent = score;
    console.log(score)
}
function addffifthousant() {
    score = score + 50000
    showScore.textContent = score;
    console.log(score)
}

function delay(obj) {
    obj.disabled = true;
    setTimeout(function () {
        obj.disabled = false;
    }, 6600);

}
function timestwodelay(obj) {
    obj.disabled = true;
    setTimeout(function () {
        obj.disabled = false;
    }, 7700);

}

