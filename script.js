// Add your code below...
const myName = "Radina"
const mySurname = "Kalpakova"
const myFullName = myName + " " + mySurname

const number1 = 2
const number2 = 8
const sumNumbers = number1 + number2

function flipCoin(threshold) {
	const randomNumber = Math.random()
	if (randomNumber > threshold) {
		alert("You won, " + myFullName)
	} else {
		alert("You lost, " + myFullName)
	}
}

function resizeButton() {
	const newRadius = Math.floor(Math.random() * 20)
	$('.button').css('border-radius', newRadius + 'px')
}

// alert("Hello " + myFullName + ". Your favourite number is: " + sumNumbers)



function flipCoin() {

}