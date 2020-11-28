const game = {
    1: 'r',
    2: 'p',
    3: 's'
}
let userInput = ''
let userCount = 0
let compCount = 0

const rock = document.querySelector('.btn-rock')
const paper = document.querySelector('.btn-paper')
const scissors = document.querySelector('.btn-scissors')
const result = document.querySelector('.info')
const user = document.querySelector('.user-count')
const computer = document.querySelector('.comp-count')

rock.addEventListener('click', ()=>{
    const rand = Math.floor(Math.random() * 3 + 1)
    const comp = game[rand]

    if (comp == 'r') {
        result.innerText = 'Draw'
    }
    if (comp == 'p') {
        compCount++
        result.innerText = 'Computer wins round!'
        computer.innerText = compCount
    }
    if (comp == 's') {
        userCount++
        result.innerText = 'user wins round!'
        user.innerText = userCount
    }
})

const round = (value) => {
    userInput = value
    const rand = Math.floor(Math.random() * 3 + 1)
    const comp = game[rand]

    if (userInput == comp) {
        console.log('draw')
    }
    if (userInput == 'r' && comp == 's') {
        console.log('user wins')
        userCount++
    }
    if (userInput == 'r' && comp == 'p') {
        console.log('computer wins')
        compCount++
    }
    if (userInput == 's' && comp == 'r') {
        console.log('computer wins')
        compCount++
    }
    if (userInput == 's' && comp == 'p') {
        console.log('user wins')
        userCount++
    }
    if (userInput == 'p' && comp == 'r') {
        console.log('user wins')
        userCount++
    }
    if (userInput == 'p' && comp == 's') {
        console.log('computer wins')
        compCount++
    }

    if (userCount > 2){
        console.log('Victory')
    } else if (compCount > 2){
        console.log('Defeat')
    }
}

