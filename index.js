
let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""

let message1 = document.querySelector("#message1")

let sum1 = document.querySelector("#sum1")

let cards1 = document.querySelector("#cards1")

let player = {
     name: "User",
 chips: 100

}


let player1 = document.querySelector("#player1")
player1.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isalive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()

    cards = [firstcard, secondcard]
    sum = firstcard + secondcard

    renderGame()
}

function renderGame() {

    cards1.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cards1.textContent += cards[i] + " "

    }


    if (sum <= 20) {
        message = ("Do you want to draw a new card? ")
    } else if (sum === 21) {
        message = ("Wohoo! You've got Blackjack! ")
        hasblackjack = true
    } else {
        message = ("You're out of the game! ")
        isalive = false
    }

    message1.textContent = message
    sum1.textContent = "Sum: " + sum
}




function newCard() {
    if (hasblackjack === false && isalive === true) {
    let randomcard1 = getRandomCard()
    sum += randomcard1
    cards.push(randomcard1)
    renderGame()
    }
}


