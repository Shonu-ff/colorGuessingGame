var color = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
var squares = document.querySelectorAll(".square");
var pickedColor = color[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = color[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  });
}
