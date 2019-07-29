let playingCard = document.getElementById('playingCard')
let style = document.getElementById('style')

function setCard(){
   const card = document.getElementById(playingCard.value)
   card.style.color = style.value
}

function clearCard(){
   const card = document.getElementById(style.value)
   card.style.color = null
}