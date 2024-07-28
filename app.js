let btnMsg = document.querySelector('#playbtn');
let myScore = 0;
let compScore = 0;

//******* Generating computer random choice
function getCompChoice() {
    const arr = ["rock", "paper", "scissor"];
    const randomIndx = Math.floor(Math.random() * 3); //*3 so that random ki range 0 to 2 tkk aa jaaye
    return arr[randomIndx];
}

const choices = document.querySelectorAll('img');//selecting all images
choices.forEach((choice) => {//creating loop to click each image
    console.log(choice);
    choice.addEventListener("click", () => {
        let yourChoice = choice.getAttribute("id");//getting the selected img id
        console.log("Img is clicked of ", yourChoice);

        let compChoice = getCompChoice();   // Calling Computer choice 
        console.log("Computer choice is: ", compChoice);

        //Applying conditions according to the user and computer choice
        if (yourChoice == compChoice) {
            console.log("Same");
            btnMsg.innerText = "Game Drawn";
        }

        if (yourChoice == "rock" && compChoice == "scissor" || yourChoice == "paper" && compChoice == "rock" || yourChoice == "scissor" && compChoice == "paper") {
            btnMsg.innerText = `You win, Computer generates ${compChoice} and you clicked ${yourChoice}`;
            myScore++;
            console.log("My score is: ", myScore);
            document.getElementById('myScore').innerText = myScore;
        }

        else {
            btnMsg.innerText = `Computer win, Computer generates ${compChoice} and you clicked ${yourChoice}`;
            compScore++;
            console.log("Computer score is:", compScore);
            document.getElementById('compScore').innerText = compScore;
        }
    })
})
