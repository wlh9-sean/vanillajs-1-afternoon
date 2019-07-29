const progress = []


function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

  if(playerSpan.innerText === 'X'){
       playerSpan.innerText = 'O'
       clickedElement.innerText = 'X'
       progress[clickedId] = 'X'
  } else {
       playerSpan.innerText = 'X'
       clickedElement.innerText = 'O'
       progress[clickedId] = 'O'
  }

  if(progress[0] !== undefined && progress[0] === progress[1] && progress[0] === progress[2]){
  
      alert(`${progress[0]} is the Winner!`)
      
  }

  if(progress[3] !== undefined && progress[3] === progress[4] && progress[3] === progress[5]){
      alert(`${progress[3]} is the Winner!`)
  }

  if(progress[6] !== undefined && progress[6] === progress[7] && progress[6] === progress[8]){
      alert(`${progress[6]} is the Winner!`)
  }
  
  if(progress[0] !== undefined && progress[0] === progress[3] && progress[0] === progress[6]){
    alert(`${progress[0]} is thw Winner!`)
  }
  
  if(progress[1] !== undefined && progress[1] === progress[4] && progress[1] === progress[7]){
  alert(`${progress[1]} is thw Winner!`)
  }

  if(progress[2] !== undefined && progress[2] === progress[5] && progress[2] === progress[8]){
    alert(`${progress[2]} is thw Winner!`)
  }

  if(progress[0] !== undefined && progress[0] === progress[4] && progress[0] === progress[8]){
    alert(`${progress[0]} is thw Winner!`)
  }

  if(progress[2] !== undefined && progress[2] === progress[4] && progress[2] === progress[6]){
    alert(`${progress[2]} is thw Winner!`)
  }
  console.log(progress)
  
let boardFull = true;
    for(let i=0; i<= 8; i++){
        if(progress[i] === undefined) {
            boardFull = false;
        }
    }
    if(boardFull === true) {
        alert('Cats game, there is no winner!')
    }
 }

