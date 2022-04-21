var randomNumber1 = Math.floor(Math.random() * 3) + 1;

var randomImage = "image" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSource2 = "images/image" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
var output2 = [];
var output1 = [];
function score() {
  for (var count = 1; count <= 3; count++) {
    if (randomNumber1 > randomNumber2) {
      output1.push(count);
      document.querySelectorAll("h2")[0].innerHTML = output1;
    } else if (randomNumber2 > randomNumber1){
      output2.push(count);
      document.querySelectorAll("h2")[1].innerHTML = output2;
    }
  }
}
