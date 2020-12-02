// Variables to select labels 
const userLabel = document.querySelector('.user')
const computerLabel = document.querySelector('.comp')
const restart = document.querySelector('.restart')
const endGame = document.querySelector('.end-result')
const result = document.querySelector('.info')
const userWins = document.querySelector('.user-count')
const computerWins = document.querySelector('.comp-count')
const title = document.querySelector('.content-title')

// Variables to select rock, paper, scissors buttons
const moves = document.querySelector('.moves')
const rock = document.querySelector('.btn-rock')
const paper = document.querySelector('.btn-paper')
const scissors = document.querySelector('.btn-scissors')

// Variables to select Audio for sound effects
const winAudio = document.querySelector('.win-round')
const loseAudio = document.querySelector('.lose-round')
const tieAudio = document.querySelector('.tie')

// Variables to select images 
const userImage = document.querySelector('.user-image')
const computerImage = document.querySelector('.computer-image')

// Object which contains computer selection choices
const game = {
    1: 'r',
    2: 'p',
    3: 's'
}

// Arrays to store victory/defeat outputs
const victory = [
    "The force is strong with this one",
    "It doesn't get easier, you just get better",
    "The will to conquer is the first step in Victory"
]
const defeat = [
   "You're not even trying",
   "Better luck next time",
   "That was too easy" 
]

// Variables to store current round score
let userCount = 0
let compCount = 0


function PlayGame(playerSelection, computerSelection){
    switch (compCount < 5 && userCount < 5){
        case playerSelection === rock && computerSelection === 'r':
            userImage.src = 'images/user_rock.png'
            computerImage.src = 'images/comp_rock.png'
            result.innerText = 'Tie'
            tieAudio.play()
            break
        case playerSelection === rock && computerSelection === 'p':
            userImage.src = 'images/user_rock.png'
            computerImage.src = 'images/comp_hand.png'
            result.innerText = 'Paper beats rock, Computer wins round!'
            compCount++  
            computerWins.innerText = compCount  
            loseAudio.play()
            break
        case playerSelection === rock && computerSelection === 's':
            userImage.src = 'images/user_rock.png'
            computerImage.src = 'images/comp_scissors.png'
            result.innerText = 'rock beats scissors, user wins round!'
            userCount++
            userWins.innerText = userCount
            winAudio.play()
            break
        case playerSelection === paper && computerSelection === 'r':
            userImage.src = 'images/user_paper.png'
            computerImage.src = 'images/comp_rock.png'
            result.innerText = 'paper beats rock, user wins!'
            userCount++
            userWins.innerText = userCount
            winAudio.play()
            break
        case playerSelection === paper && computerSelection === 'p':
            userImage.src = 'images/user_paper.png'
            computerImage.src = 'images/comp_hand.png'
            result.innerText = 'Tie'
            tieAudio.play()
            break
        case playerSelection === paper && computerSelection === 's':
            userImage.src = 'images/user_paper.png'
            computerImage.src = 'images/comp_scissors.png'
            result.innerText = 'scissors beats paper, computer wins!'
            compCount++
            computerWins.innerText = compCount
            loseAudio.play()
            break
        case playerSelection === scissors && computerSelection === 'r':
            userImage.src = 'images/user_scissors.png'
            computerImage.src = 'images/comp_rock.png'
            result.innerText = 'rock beats scissors, computer wins!'
            compCount++
            computerWins.innerText = compCount
            loseAudio.play()
            break
        case playerSelection === scissors && computerSelection === 'p':
            userImage.src = 'images/user_scissors.png'
            computerImage.src = 'images/comp_hand.png'
            result.innerText = 'scissors beats paper, user wins!'
            userCount++
            userWins.innerText = userCount
            winAudio.play()
            break
        case playerSelection === scissors && computerSelection === 's':
            userImage.src = 'images/user_scissors.png'
            computerImage.src = 'images/comp_scissors.png'
            result.innerText = 'Tie'
            tieAudio.play()
            break   
    }
}

// Function checks winner (first to 5)
function CheckWinner(){
    if (userCount === 5){
        title.innerText = 'Victory'
        endGame.innerText = victory[Math.floor(Math.random() * 3)]
        PlayAgain()
        restart.classList.toggle('hidden')
    }
    if (compCount === 5){
        title.innerText = 'Defeat'
        endGame.innerText = defeat[Math.floor(Math.random() * 3)]
        PlayAgain()
        restart.classList.toggle('hidden')
    }
}

// Resets Labels and score 
function Reset(){
    userCount = 0
    compCount = 0
    userWins.innerText = userCount
    computerWins.innerText = compCount
    result.innerText = ''
}

// Show/hide buttons and labels when game starts/ends
function PlayAgain(){
    Reset()
    userWins.classList.toggle('hidden')
    computerWins.classList.toggle('hidden')
    userImage.classList.toggle('hidden')
    computerImage.classList.toggle('hidden')
    rock.classList.toggle('hidden')
    paper.classList.toggle('hidden')
    scissors.classList.toggle('hidden')
    computerLabel.classList.toggle('hidden')
    userLabel.classList.toggle('hidden')
    result.innerText = ''
}

// Event listener for rock, paper, scissors (using event delegation)
moves.addEventListener('click', ({event}) => {
    const comp = game[Math.floor(Math.random() * 3 + 1)]
    PlayGame(event, comp)
    CheckWinner()
})

// Event listener for restart button 
restart.addEventListener('click', ()=>{
    PlayAgain()
    endGame.innerText = ''
    title.innerText = 'Rock Paper Scissor'
    restart.classList.toggle('hidden')
})

// Hides restart button when game is being played
restart.classList.toggle('hidden')