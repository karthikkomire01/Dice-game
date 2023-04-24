var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomNumber1 + ".png";
var Dices = "images/" + randomDice;
var image1 = document.querySelector(".img1").setAttribute("src", Dices);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber2 + ".png";
var Dice = "images/" + randomImage;
var image2 = document.querySelector(".img2").setAttribute("src", Dice);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}