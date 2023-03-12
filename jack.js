let player={
    name:"Mouli",
    chips:143
}

let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let messages=" "

let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
// let sumEl=document.querySelector("#sum-el")
let playerEl =document.getElementById("player-el")

playerEl.textContent=player.name+": $"+player.chips

function getRandomCard() {
    // return Math.floor(Math.random()*10)+2
    let randomNumber = Math.floor(Math.random() * 13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent="Cards :"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }

    sumEl.textContent="Sum :"+ sum 

    if(sum <= 20){
        message="Do you want to draw new card 🙂"
        
    }
    else if(sum===21){
        message="whooh! you've got BlackJack 🥳"
        hasBlackJack=true
    }
    else{
        message="sad to say you are eliminated 😭"
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard() {
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}