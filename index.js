let firstcard = 10
let secondcard = 4
let cards= [firstcard, secondcard]
let sum = firstcard + secondcard
let hasblackjack = false
let isalive = true
let message = ""

let message1 = document.querySelector("#message1")

let sum1 = document.querySelector("#sum1")

let cards1 = document.querySelector("#cards1")

function startGame() {
    renderGame()
}

function renderGame() {

    cards1.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cards1.textContent += cards[i + " "]

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
    let randomcard1 = 7
    sum += randomcard1
    cards.push(randomcard1)
    renderGame()
}


