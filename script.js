const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let firstColor = "yellow";
let count = 0;

let card1;
let card2;

// TODO: Implement this function!
function handleCardClick(event) {
  // Check to see if the card is face-up or face-down (white background)
  // The rest of the function only runs if the card is face down
  // Otherwise, nothing happens
  let style = getComputedStyle(event.target);
  let bgColor = style.backgroundColor;
  //alert(bgColor);

  if (bgColor == "rgb(255, 255, 255)") {
    count++;
    let turnColor = event.target.classList;
    event.target.style.backgroundColor = turnColor;
    let cardColor = event.target.style.backgroundColor;
    
    if (count == 1) {
      firstColor = cardColor;
      card1 = event.target;
    }
    else if (count == 2) {
      card2 = event.target;
      
      if (firstColor === cardColor) {
        alert("You got a match!");
      }
      else {
        card2 = event.target;
        noMatch(card1, card2, style);
        //alert("Too bad. Try again!");
      }
      count = 0;
    }
    else {
      alert("The universe broke");
    } //end else
  } //end if
} //end handleCardClick

function noMatch(card1, card2, style) {
  let timer = setTimeout(function(){
    card1.style.backgroundColor = "white";
    card2.style.backgroundColor = "white";
  }, 100) //end timer
} //end noMatch

// when the DOM loads
createDivsForColors(shuffledColors);
