var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //select random dice image

var randomImageSource1 = "images/" + randomDiceImage1;

document.querySelector(".img1").setAttribute("src",randomImageSource1);  //set random dice as src for image 1

//same for player2 dice image
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src",randomImageSource2);

//depending on winning player, h1 inner html is changed
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}