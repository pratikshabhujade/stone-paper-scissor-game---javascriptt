let userScore = 0;
let compScore = 0;

//ACCESS ELEMENTS
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


//COMPUTER CHOICE
const genCompChoice = () => {

    const options = ["rock" , "paper" ,"scissor"];
    const ramIndx = Math.floor(Math.random() * 3);
    return options[ramIndx];

};


//USER'S CHOICE
choices.forEach((choice) => {

    choice.addEventListener ("click", () => {

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

});

//CHOICES OF USER AND COMPUTER AND WINNER DICISIONS
const playGame = (userChoice) => {

    const comChoice = genCompChoice();

    //draw condition
    const drawgame = () => {
       
        msg.innerText = "game was draw , play again";
        msg.style.backgroundColor = "black";

    }

    

    //PRINT WINNERS
    const showWinner = (userWin , userChoice ,comChoice) => {
        if (userWin){
            userScore++;
            userScorepara.innerText = userScore;
            msg.innerText = `you win! your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorepara.innerText = compScore;
            msg.innerText = `you lose ,the computers ${comChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }

    //find winner
    if (userChoice===comChoice) {
       drawgame();
    } else {
        let userWin = true ;
        if (userChoice==="rock"){

            //compter choice = paper , scissor 
            userWin = comChoice === "paper" ? false : true ;

        } else if (userChoice === "paper") {

            //scissor , rock
            userWin = comChoice === "rock" ? true : false ;


        } else {

            // rock , paper
            userWin = comChoice === "rock" ? false : true ;

        }

        showWinner(userWin , userChoice , comChoice);

    }
    


};





