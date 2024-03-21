let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //to access the image for some operations
const msg = document.querySelector("#msg"); //to access the msg box for print some msg

const userScoreCounter = document.querySelector("#user-score");
const compScoreCounter = document.querySelector("#comp-score"); // for change the score of comp...

const genCopmChoice = () =>{
    const options = ["rock", "paper", "scissors"]; // it is used to genrate the rand no into this index
    const randIdx = Math.floor(Math.random()*3); // to generate numbers in bet 0-2 //the default value of generate random no is 0.7243625(0.somthing)
    // so we gen no in 0-2 so we can multiply the rand function to generate the no between 0-2
    //floor is used to round the decimal random numbers
    return options[randIdx];
}
const drawGame = () => {
    // console.log("Game was Draw...");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++; //to increase the user score
        userScoreCounter.innerText=userScore; //disply the score in score board of user
        console.log("you Win!");
        msg.innerText = "You Win!"; //to change the text in frontend
        msg.style.backgroundColor = "green"; //to change the color
    }else{
        compScore++; //to increase the comp score
        compScoreCounter.innerText = compScore; //disply the score in score board of comp
        // console.log("you Lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice = genCopmChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice ==="scissors" ?false:true;

        }else{
            //rock, paper
            userWin = compChoice === "rock" ?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    console.log(choice); // for print the choice
    choice.addEventListener("click", () =>{     // for click the images
        const userChoice=choice.getAttribute("id"); //using getAttribute access the id/user choice(rock/paper/scisoor)
        console.log("choice was clicked!", userChoice);
        playGame(userChoice); //call the playGame method using userChoice
    });
});