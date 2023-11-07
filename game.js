const playerHand = document.getElementById('rpcP')
const compHand = document.getElementById('rpcC')

playerHand.style.visibility = 'hidden'
compHand.style.visibility = 'hidden'

const rock = document.getElementById('rock-logo')
const paper = document.getElementById('paper-logo')
const scissors = document.getElementById('scissors-logo')

const playerScore = document.getElementById('playerscore')
const compScore = document.getElementById('compscore')

let userScore = 0
let pcscore = 0

function compChoice(){
    let choice  = Math.floor(Math.random()*3)
    let hand =""
    if(choice==0){
        compHand.src = "./assets/rock-hand.png"
        hand = 'rock';
    }else if(choice==1){
        compHand.src = "./assets/paper-hand.png"
        hand = 'paper';
    }else if(choice==2){
        compHand.src = "./assets/scissors-hand.png"
        hand = 'scissors';
    }
    return hand
}

function score(hand1,hand2){
    if(hand1=='rock' && hand2=='rock'){}
    else if(hand1=='paper' && hand2=='paper'){}
    else if(hand1=='scissors' && hand2=='scissors'){}
    else if(hand1=='rock' && hand2=='scissors'){userScore+=1}
    else if(hand1=='paper' && hand2=='rock'){userScore+=1}
    else if(hand1=='scissors' && hand2=='paper'){userScore+=1}
    else if(hand1=='scissors' && hand2=='rock'){pcscore+=1}
    else if(hand1=='rock' && hand2=='paper'){pcscore+=1}
    else if(hand1=='paper' && hand2=='scissors'){pcscore+=1}

    playerScore.textContent = userScore
    compScore.textContent = pcscore
}

let playCount =0

rock.onclick = () =>{
    playerHand.style.visibility = 'inherit'
    compHand.style.visibility = 'inherit'
    console.log("clickerd")
    playerHand.src = "./assets/rock-hand.png"
    let hand2 = compChoice()
    let hand1 = 'rock'
    score(hand1,hand2)
    playCount+=1
    if(playCount==15){
        result.style.visibility = "inherit"
        if(userScore>pcscore){
            message.textContent = "Player Won"
        }else if(userScore<pcscore){
            message.textContent = "Computer Won"
        }
        else if(userScore==pcscore){
            message.textContent = "Draw"
        }
    }
}

paper.onclick = () =>{
    playerHand.style.visibility = 'inherit'
    compHand.style.visibility = 'inherit'
    console.log("clickerd")
    playerHand.src = "./assets/paper-hand.png"
    let hand2 = compChoice()
    let hand1 = 'paper'
    score(hand1,hand2)
    playCount+=1
    if(playCount==15){
        result.style.visibility = "inherit"
        if(userScore>pcscore){
            message.textContent = "Player Won"
        }else if(userScore<pcscore){
            message.textContent = "Computer Won"
        }
        else if(userScore==pcscore){
            message.textContent = "Draw"
        }
    }
}

scissors.onclick = () =>{
    playerHand.style.visibility = 'inherit'
    compHand.style.visibility = 'inherit'
    console.log("clickerd")
    playerHand.src = "./assets/scissors-hand.png"
    let hand2 = compChoice()
    let hand1 = 'scissors'
    score(hand1,hand2)
    playCount+=1
    if(playCount==15){
        result.style.visibility = "inherit"
        if(userScore>pcscore){
            message.textContent = "Player Won"
        }else if(userScore<pcscore){
            message.textContent = "Computer Won"
        }
        else if(userScore==pcscore){
            message.textContent = "Draw"
        }
    }
}

const playagain = document.getElementById('button')
playagain.onclick = () =>{
    window.location.reload()
}

const result = document.getElementById('result')
const message = document.getElementById('message')

if(playCount==15){
    result.style.visibility = "inherit"
    if(userScore>pcscore){
        message.textContent = "Player Won"
    }else if(userScore<pcscore){
        message.textContent = "Computer Won"
    }
    else if(userScore==pcscore){
        message.textContent = "Draw"
    }
}