
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[3];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("you found a match!");
	} else {
		alert("Sorry, please try again.")
	}
}

console.log('User flipped ' + cardOne);
console.log('User flipped ' + cardTwo);

