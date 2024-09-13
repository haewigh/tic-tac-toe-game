let editPlayer = 0
let activePlayer = 0

const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  }
]


const configNameElement = document.getElementById('config-overlay')
const formElement = document.querySelector('form')
const configInputElement = document.getElementById('playername')
const configSubmitElement = document.getElementById('config-submit')
const configCancelElement = document.getElementById('config-cancel')
const startElement = document.querySelector('#start')
const errorTextElement = document.getElementById('error')
const editBtn1 = document.getElementById('edit-player1')
const editBtn2 = document.getElementById('edit-player2')
const showGameBoard = document.querySelector('#active-game')
const gameBoardElement = document.querySelector('#game-board')
const winnerName = document.getElementById('champion')

editBtn1.addEventListener('click', openConfig)
editBtn2.addEventListener('click', openConfig)

formElement.addEventListener('submit', saveConfig)

configCancelElement.addEventListener('click', closeConfig)

startElement.addEventListener('click', startGame)

gameBoardElement.addEventListener('click', startPlaying)