// Iteration 5: Store the player score and display it on the game over screen
document.getElementById("play-again-button").addEventListener(('click'),()=>{
    window.location.href = "./index.html"
})

const scoreBox = document.getElementById("score-box")

window.addEventListener("load",()=>{
    let currentScore= window.localStorage.getItem("scoreFinal");
    scoreBox.textContent = "Score: " + currentScore;
})
