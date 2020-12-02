const title = document.querySelector('.content-title')
const rock = document.querySelector('.btn-rock')
const paper = document.querySelector('.btn-paper')
const scissors = document.querySelector('.btn-scissors')
const result = document.querySelector('.info')
const userWins = document.querySelector('.user-count')
const computerWins = document.querySelector('.comp-count')
const userImage = document.querySelector('.user-image')
const computerImage = document.querySelector('.computer-image')
const userLabel = document.querySelector('.user')
const computerLabel = document.querySelector('.comp')
const restart = document.querySelector('.restart')
const endGame = document.querySelector('.end-result')
const moves = document.querySelector('.moves')
const winAudio = document.querySelector('.win-round')
const loseAudio = document.querySelector('.lose-round')
const tieAudio = document.querySelector('.tie')
const game = {
    1: 'r',
    2: 'p',
    3: 's'
}
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

let userInput = ''
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
            result.innerText = 'Computer wins round!'
            compCount++  
            computerWins.innerText = compCount  
            loseAudio.play()
            break
        case playerSelection === rock && computerSelection === 's':
            userImage.src = 'images/user_rock.png'
            computerImage.src = 'images/comp_scissors.png'
            result.innerText = 'user wins round!'
            winAudio.play()
            userCount++
            userWins.innerText = userCount
            break
        case playerSelection === paper && computerSelection === 'r':
            userImage.src = 'images/user_paper.png'
            computerImage.src = 'images/comp_rock.png'
            result.innerText = 'computer plays rock, user wins!'
            winAudio.play()
            userCount++
            userWins.innerText = userCount
            break
        case playerSelection === paper && computerSelection === 'p':
            userImage.src = 'images/user_paper.png'
            computerImage.src = 'images/comp_hand.png'
            result.innerText = 'Tie'
            break
        case playerSelection === paper && computerSelection === 's':
            userImage.src = 'images/user_paper.png'
            computerImage.src = 'images/comp_scissors.png'
            result.innerText = 'computer plays scissors, computer wins!'
            compCount++
            computerWins.innerText = compCount
            break
        case playerSelection === scissors && computerSelection === 'r':
            userImage.src = 'images/user_scissors.png'
            computerImage.src = 'images/comp_rock.png'
            result.innerText = 'computer plays rock, computer wins!'
            compCount++
            computerWins.innerText = compCount
            break
        case playerSelection === scissors && computerSelection === 'p':
            userImage.src = 'images/user_scissors.png'
            computerImage.src = 'images/comp_hand.png'
            result.innerText = 'Computer plays paper, user wins!'
            winAudio.play()
            userCount++
            userWins.innerText = userCount
            break
        case playerSelection === scissors && computerSelection === 's':
            userImage.src = 'images/user_scissors.png'
            computerImage.src = 'images/comp_scissors.png'
            result.innerText = 'Tie'
            break   
    }
}

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

function Reset(){
    userCount = 0
    compCount = 0
    userWins.innerText = userCount
    computerWins.innerText = compCount
    result.innerText = ''
}

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

moves.addEventListener('click', ({target}) => {
    const comp = game[Math.floor(Math.random() * 3 + 1)]
    PlayGame(target, comp)
    CheckWinner()
})

restart.addEventListener('click', ()=>{
    PlayAgain()
    endGame.innerText = ''
    title.innerText = 'Rock Paper Scissor'
    restart.classList.toggle('hidden')
})

restart.classList.toggle('hidden')