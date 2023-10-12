// Iteration 2: Generate 2 random number and display it on the screen
window.addEventListener("load",timerDisplay);

var arr;
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var score = 0;
var timerValue = document.getElementById("timer");
var timerCount = 5;
function random(){
    var x = Math.ceil(Math.random()*100)
    return x
}
function generateRandomNumbers(){
    let r1 = 0
    let r2 = 0
    r1 = random()
    r2 = random()
    arr = [r1,r2]
    console.log(arr)
    return [r1,r2]
}
function inseringRandomNumbers(){
    var k = generateRandomNumbers()
    number1.textContent = k[0]
    number2.textContent = k[1]
}
// Iteration 3: Make the options button functional
const greaterThan = document.getElementById("greater-than")
const equalTo = document.getElementById("equal-to")
const lessThan = document.getElementById("lesser-than")
var flag;
function checkFlag(){
    a = arr
    num1 = a[0]
    num2 = a[1]
    if(num1>num2){
        flag=1;
    }else if(num1==num2){
        flag = 2;
    }else if(num1<num2){
        flag = 3;
    }
    // console.log(flag)
    return flag;
}


function checkFlagAndClickedValue(buttonValue){
    check = checkFlag()
    if (flag === buttonValue) {
        score+=1
        inseringRandomNumbers();
    } else {
        window.location.href = "./gameover.html"
        // console.log("HI")
    };
    }
greaterThan.onclick = ()=>{
    timerCount = 5
    checkFlagAndClickedValue(1);
    //passing button value into the function to check
}
equalTo.onclick = ()=>{
    timerCount = 5
    checkFlagAndClickedValue(2)
}
lessThan.onclick = () =>{
    timerCount = 5
    checkFlagAndClickedValue(3)
};

window.addEventListener("load",inseringRandomNumbers())


// Iteration 4: Build a timer for the game

function timerDisplay() {
    return setInterval(() => {
        if (timerCount >= 0) {
            timerValue.textContent = timerCount; 
            console.log(timerCount);
            timerCount--;
        } else {
            window.location.href = "./gameover.html";
        }
    }, 1000);
}
