function openConfig(event) {
  configNameElement.style.display = 'block'
  document.getElementById('backdrop').style.display = 'block'
  editPlayer = +event.target.dataset.playerid
}

function saveConfig(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const enteredPlayerName = formData.get('playername').trim()
  
  if (!enteredPlayerName) {
    errorTextElement.textContent = 'Invalid entry, kindly enter right text'
    configInputElement.style.border = '1px solid red'
    return
  }

  players[editPlayer-1].name = enteredPlayerName

  document.getElementById('player'+editPlayer).textContent = enteredPlayerName

  closeConfig()

}
function switchPlayer (){
  if (activePlayer===0){
    activePlayer=1
  }else {
    activePlayer=0
  }
  document.querySelector('#active-player').textContent=players[activePlayer].name
}

function closeConfig(){
  configNameElement.style.display = 'none'
  document.getElementById('backdrop').style.display = 'none'
  configInputElement.value = ''
  errorTextElement.textContent = ''
  configInputElement.style.border = 'default'
  
}