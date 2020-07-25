const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".game-screen");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play matche
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = '';
            });
        })
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() =>{
                //compare hands
                compareHands(this.textContent, computerChoice);
                //update image
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector(".match__winner");
        //stop anim
            winner.addEventListener("animationend", function(){
                this.style.animation = '';
            });
        //checking for tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie !";
            winner.style.color = "#F2C94C"
            return;
        }
        //check for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "You win !"
                winner.style.color = "#2ecc71"
                winner.style.animation = "winAnim 0.5s ease-in-out"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Mr.Bot win...";
                winner.style.color = "#e74c3c"
                winner.style.animation = "loseAnim 0.5s ease-in-out"
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "You win !"
                winner.style.color = "#2ecc71"
                winner.style.animation = "winAnim 0.5s ease-in-out"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Mr.Bot win...";
                winner.style.color = "#e74c3c"
                winner.style.animation = "loseAnim 0.5s ease-in-out"
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissor
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "You win !"
                winner.style.color = "#2ecc71"
                winner.style.animation = "winAnim 0.5s ease-in-out"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Mr.Bot win...";
                winner.style.color = "#e74c3c"
                winner.style.animation = "loseAnim 0.7s ease-in-out"
                cScore++;
                updateScore();
                return;
            }
        }
    }

    //call the funct
    startGame();
    playMatch();
};

//start game
game();