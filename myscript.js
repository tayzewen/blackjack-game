let cards = []
let dealerArray = []
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
let dealerCards = document.getElementById("dealer-cards")
let dealerTotal = document.getElementById("dealer-total")
let dealerSum = 0

window.onload = function() {
    document.getElementById("game-content").style.display = 'none';
  };


let player = {
	name: getName(),
    chips: playerChips
}

function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1 || randomCard === 11) {
        if (sum <= 10) {
            return 11
        } else if (sum > 10) {
            return 1
        }
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
    dealerHand()
}


function dealerHand() {
    let dealerCard1 = getRandomCard()
    let dealerCard2 = getRandomCard()
    dealerCards.textContent = "Dealer's Cards: ? + " + dealerCard1
    dealerTotal.textContent = "Total: " + dealerCard1
    dealerArray = [dealerCard2, dealerCard1]
    dealerSum = dealerCard2 + dealerCard1
}

// function stand() {
//     isAlive = false
//     messageEl.textContent = "Let's see the dealer's hand..."
//     dealerCards.textContent = "Dealer's Cards: "
//     dealerTotal.textContent = "Total: " + dealerSum
//     if (dealerSum < 18) {
//         for (let i = 0; i < dealerArray.length; i++) {
//             let card = getRandomCard()
//             dealerSum += card
//             dealerArray.push(card)
//             dealerCards.textContent += dealerArray[i] + " - "
//         }
//     } else if (dealerSum > sum) {
//         messageEl.textContent = "Sorry you lost"
//     } else if (dealerSum < sum) {
//         messageEl.textContent = "you won!"
//     }
// }


function renderGame() {
	cardsEl.textContent = "Your Cards: " 
    for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " - "
	}
	sumEl.textContent = "Total: " + sum 
    if (sum <= 20) {
        isAlive = true
        message = "Draw a New Card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else if (sum > 21) {
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
    document.getElementById("game-content").style.display = "block";
}



