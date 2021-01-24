document.getElementById("guess").addEventListener("click", gameOn)
document.getElementById("reset").addEventListener("click", reStart)
let max = 20;
let highScore = 0;
let secretNum = Math.trunc(Math.random() * 20) + 1;



function gameOn() {
    let guess = Number(document.getElementById("number").value)
    console.log(guess)
    console.log(secretNum)

    if (!guess) {
        alert(`Hey, Please pick a number`)

    } else if (secretNum === guess) {
        document.querySelector(".too-high").textContent = "winner"
        document.querySelector(".too-low").textContent = "Yipee"
        document.querySelector(".reveal").textContent = secretNum
    } else if (guess > secretNum) {
        document.querySelector(".too-high").textContent = "Too hot"
        document.querySelector(".too-low").textContent = "Aww"
    }
    else if (guess < secretNum) {
        document.querySelector(".too-high").textContent = "Try again"
        document.querySelector(".too-low").textContent = "Too cold"
    }
}

function reStart() {

    document.querySelector(".too-high").textContent = "..."
    document.querySelector(".too-low").textContent = "..."
    document.querySelector(".reveal").textContent = "?"
    let guess = Number(document.getElementById("number").value)
    console.log(guess)
    console.log(secretNum)
}