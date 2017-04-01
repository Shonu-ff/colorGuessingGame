var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.innerHTML = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
});

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.innerHTML = "CORRECT";
      resetButton.innerHTML = "Play Again"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.innerHTML = "Try Again"
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
  //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor())
  }
  return arr;

}

function randomColor() {
  //pick a "red" from 0 - 255
  var roy = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var gee = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var biv = Math.floor(Math.random() * 256);
  return "rgb(" + roy + ", " + gee + ", " + biv + ")";
}
