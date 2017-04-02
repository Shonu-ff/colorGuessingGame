var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //ternary operator
      this.innerHTML === "Easy" ? numSquares = 3: numSquares = 6;
      // if(this.innerHTML === "Easy") {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
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
}


function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.innerHTML = pickedColor;
  resetButton.innerHTML = "New Colors";
  messageDisplay.innerHTML = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

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
