currentTime=()=>{

    let currTime=new Date();
    const currTimer=document.getElementById("hours").innerText=currTime.toLocaleTimeString();

}
currentTime();

const intervalID =  setInterval(()=>{
    currentTime(); 
    
    },1000)

   // setTimeout(()=>clearInterval(intervalID),10000);



const ResetValue = document.querySelector(".resetValues");
const CountDown = document.getElementById("countdown");
let countDownValue = 0;
let intervalcountID;
let isRunning = false; // To track if the timer is already running

function startTimer() {
    if (isRunning==false) {
        isRunning = true;
    intervalcountID = setInterval(() => {
        console.log(countDownValue);
        CountDown.innerText = ++countDownValue;
    }, 1000);
}
}

const stopTimer = () => {
    clearInterval(intervalcountID);
    isRunning=false;
};

const resetTimer = () => {
    countDownValue = 0;
    CountDown.innerText = countDownValue;
    clearInterval(intervalcountID);
    isRunning=false;
};

function getTimeValue() {
   
    const newPara = document.createElement("p");
    newPara.innerText = `GetTime: ${countDownValue}`;
    ResetValue.append(newPara);
}

const clearTime=()=>{
    ResetValue.innerHTML="";
}
document.querySelector(".start_btn").addEventListener("click", startTimer);
document.querySelector(".stop_btn").addEventListener("click", stopTimer);
document.querySelector(".reset_btn").addEventListener("click", resetTimer);
document.querySelector(".getTime_btn").addEventListener("click", getTimeValue);
document.querySelector(".clearTime_btn").addEventListener("click", clearTime);
