// Iteration 5: Store the player score and display it on the game over screen
document.getElementById("play-again-button").addEventListener(('click'),()=>{
    window.location.href = "./index.html"
})

const scoreBox = document.getElementById("score-box")
let currentScore = 0;







window.addEventListener("load",()=>{
    scoreBox.textContent = "Score: "+currentScore;
})
