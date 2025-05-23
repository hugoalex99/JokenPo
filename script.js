const result = document.querySelector('.result')
const HumanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " maquina: " + machine)

    if (human === machine) {
        result.innerHTML = 'Empate'
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper')) 
        {
        humanScoreNumber++
        HumanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Voce ganhou'
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Voce perdeu'
    }

}
