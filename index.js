
function makeSound(buttonPressed){
  switch(buttonPressed){ //choose the sound according to button pressed
    case "w":
      var drumSound = new Audio("sounds/crash.mp3");
      drumSound.play();
      break;
    case "a":
      var drumSound = new Audio("sounds/kick-bass.mp3");
      drumSound.play();
      break;
    case "s":
      var drumSound = new Audio("sounds/snare.mp3");
      drumSound.play();
      break;
    case "d":
      var drumSound = new Audio("sounds/tom-1.mp3");
      drumSound.play();
      break;
    case "j":
      var drumSound = new Audio("sounds/tom-2.mp3");
      drumSound.play();
      break;
    case "k":
      var drumSound = new Audio("sounds/tom-3.mp3");
      drumSound.play();
      break;
    case "l":
      var drumSound = new Audio("sounds/tom-4.mp3");
      drumSound.play();
      break;
    default:
      console.log(buttonPressed); //should never get her, log button pressed
      break;
  }
}

function buttonClicked(){
  makeSound(this.innerText);
  buttonAnimation(this.innerText);
}

function buttonAnimation(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}


var buttonArray = document.getElementsByClassName("drum");
for(x = 0; x < buttonArray.length; x ++){
  buttonArray[x].addEventListener("click", buttonClicked);

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});
