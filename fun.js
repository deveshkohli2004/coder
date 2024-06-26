let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame=()=>{
    console.log("Game was Draw.");
    msg.innerText="Game was Draw! Play again.";
    msg.style.backgroundColor="#030343";
    msg.style.color="white";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you are winner!");
        msg.innerText= `You won the Game! Your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";


    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose the Game!");
        msg.innerText=`You lose the Game! Your${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate comp choice;
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw Game
        drawGame();
    }else{
        let userWin= true;
        if(userChoice==="rock"){
        userWin = compChoice==="paper" ? false :true;
        }else if(userChoice==="paper"){
        userWin=compChoice==="scissor"? false:true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
})
