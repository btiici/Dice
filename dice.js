function rollDice(){

const numOfDice = document.getElementById('diceInput').value
const diceResult = document.getElementById('diceresult')
const diceImage = document.getElementById('images')
const values = []
const images = []


    for (i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="Dice_images/${value}.png">`)
    }

diceResult.textContent =`dice: ${values.join(', ')}`
diceImage.innerHTML = images.join('');
}

