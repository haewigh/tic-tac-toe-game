function startGame(){
  showGameBoard.style.display = 'block'
  document.querySelector('#active-player').textContent=players[activePlayer].name
}

function startPlaying(event) {
  if (event.target.tagName !== 'LI'){
    return
  }
  if (event.target.textContent){
    return
  }
  event.target.textContent = players[activePlayer].symbol
  event.target.classList.add('disabled')
  const column = event.target.dataset.col-1
  const row = event.target.dataset.row-1
  gameBoard[row][column]= activePlayer + 1
  const winnerId = checkGameOver()
  if (winnerId > 0){
    document.getElementById('winner-overlay').style.display='block'
    document.getElementById('backdrop').style.display = 'block'
    winnerName.textContent = gameOver(winnerId)
    return
  }
  switchPlayer()
}

function checkGameOver(){
  for (let i=0; i<3; i++){
    if (gameBoard[i][0]>0 &&
        gameBoard[i][0]===gameBoard[i][1] &&
        gameBoard[i][0]===gameBoard[i][2]
    ){
      return gameBoard[i][0]
    }
  }
  for (let i=0; i<3; i++){
    if (gameBoard[0][i]>0 &&
        gameBoard[0][i]===gameBoard[1][i] &&
        gameBoard[0][i]===gameBoard[2][i]
    ){
      return gameBoard[0][i]
    }
  }
  if (gameBoard[0][0]>0 &&
      gameBoard[0][0]===gameBoard[1][1] &&
      gameBoard[0][0]===gameBoard[2][2]
  ){
    return gameBoard[0][0]
  }
  if (gameBoard[0][2]>0 &&
      gameBoard[0][2]===gameBoard[1][1] &&
      gameBoard[0][2]===gameBoard[2][0]
  ){
    return gameBoard[0][2]
  }
  return 0
}

function gameOver(winnerId){
  if (winnerId === 1){
    return players[0].name
  }else if (winnerId ===2){
    return players[1].name
  }
}