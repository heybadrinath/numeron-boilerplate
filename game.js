// Iteration 2: Generate 2 random number and display it on the screen
var arr;
function getRandomNumbers() {
     let n1 = Math.floor(Math.random() * 100)
    let n2 = Math.floor(Math.random() * 100)
    arr = [n1,n2]
    return arr;
  }

function displayRandomNumbers(){
    var numbers = getRandomNumbers();
    document.getElementById("number1").textContentL=numbers[0];
    document.getElementById("number2").textContentL=numbers[1];
}


// Iteration 3: Make the options button functional
const greaterThan = document.getElementById("greater-than")
const equalTo = document.getElementById("equal-to")
const lessThan = document.getElementById("lesser-than")
var flag;
function checkFlag(){
    
    var num1 =arr[0]
    var num2 =arr[1]
    if(num1>num2){
        flag=1;
    }else if(num1==num2){
        flag = 2;
    }else if(num1<num2){
        flag = 3;
    }
}

greaterThan.addEventListener(('click'),()=>{
    checkFlag()
    if(flag==1){
        displayRandomNumbers()
    }else{
        window.location.href='gameover.html'
    }
})
equalTo.addEventListener(('click'),()=>{
    checkFlag()

    if(flag==2){
        displayRandomNumbers()
    }else{
        window.location.href='gameover.html'
    }
})
lessThan.addEventListener(('click'),()=>{
    checkFlag()

    if(flag==3){
        displayRandomNumbers()
    }else{
        window.location.href='gameover.html'
    }
})
// Iteration 4: Build a timer for the game
