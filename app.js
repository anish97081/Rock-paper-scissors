let usescore = 0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const usescorepara =document.querySelector("#user-score");
const compscorepara = document.querySelector("#cpmp-score");


const genCompChoice =()=>{
    const options= ["rock", "paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};


const drowGame = () =>{
    msg.innerText ="Game was drow . Play again";
    msg.style.backgroundColor ="black";
};


const showWinner =(userWin ,useChoice ,compChoice)=>{
    if(userWin){
        msg.innerText =`You Win!. Your ${useChoice}  beats  ${compChoice}`;
        msg.style.backgroundColor ="green";
        usescore++;
        usescorepara.innerText =usescore;
    }else{
        msg.innerText =`You lose. ${compChoice}  beats  Your ${useChoice}`;
        msg.style.backgroundColor ="red";
        compscore++;
        compscorepara.innerText =compscore;
    }
};

const playGame =(useChoice)=>{
    const compChoice = genCompChoice();
if(useChoice===compChoice){
    drowGame();
}else{
    let userWin= true;
    if(useChoice=== "rock"){
        userWin = compChoice==="paper" ? false : true;
    }else if(useChoice==="paper"){
        userWin= compChoice ==="scissors" ? false : true;
    }else{
        userWin = compChoice ==="rock"  ? false : true;
    }
    showWinner(userWin ,useChoice ,compChoice);
}
};


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const useChoice =choice.getAttribute("id");
        playGame(useChoice);
    })
});