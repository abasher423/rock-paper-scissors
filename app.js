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
const game = {
    1: 'r',
    2: 'p',
    3: 's'
}
const victory = {
    1: "The force is strong with this one",
    2: "It doesn't get easier, you just get better",
    3: "The will to conquer is the first step in Victory"
}
const defeat = {
   1: "You're not even trying",
   2: "Better luck next time",
   3: "That was too easy" 
}

let userInput = ''
let userCount = 0
let compCount = 0

restart.classList.toggle('hidden')

