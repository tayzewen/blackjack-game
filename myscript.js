let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let chipsEl = document.getElementById("chips-el")
let playerChips = 0

let player = {
	name: getName(),
    chips: playerChips
}

function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    hasBlackjack = false
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " - "
	}
	sumEl.textContent = "Total: " + sum 
    if (sum <= 20) {
        message = "Draw a New Card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "Sorry, you busted."
        isAlive = false
    }
    messageEl.textContent = message

    if (hasBlackjack === true) {
        playerChips = playerChips + 25
        chipsEl.textContent = "$" + playerChips
    }

}

function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
	}

}

function getName() {
	let firstName = document.getElementById("name").value
	console.log(firstName) 
	return firstName
}


function displayChips() {
    playerEl.textContent = getName()
    chipsEl.textContent = "$" + playerChips

}






