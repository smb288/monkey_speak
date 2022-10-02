const monkeySound1 = new Audio("./monkey_sounds/monkey_sound1.wav");

const monkeySound2 = new Audio("./monkey_sounds/monkey_sound2.wav");

const monkeySound3 = new Audio("./monkey_sounds/monkey_sound3.wav");

const monkeySound4 = new Audio("./monkey_sounds/monkey_sound4.wav");

const monkeySound5 = new Audio("./monkey_sounds/monkey_sound5.mp3");

const luckyMonkeySound = new Audio("./monkey_sounds/lucky_monkey.wav");

let soundArray = [
  monkeySound1,
  monkeySound3
];

function generateWordArray(userLength, wordDictionary) {
  let generatedMessage = [];

  for (let i = 0; i < userLength; i++) {
    let randomNum = Math.floor(Math.random() * wordDictionary.length);
    generatedMessage.push(wordDictionary[randomNum]);
  }

  return generatedMessage;
}

function arrayToString(generatedMessage, textElement) {
  let arrayString = "";
  for (let i = 0; i < generatedMessage.length; i++) {
    if (i === generatedMessage.length - 1) {
      arrayString += generatedMessage[i].toLowerCase();
      arrayString += "!";
    } else if (i === 0) {
      arrayString += generatedMessage[i];
      arrayString += "-";
    } else {
      arrayString += generatedMessage[i].toLowerCase();
      arrayString += "-";
    }
  }
  textElement.innerHTML = arrayString;
  return arrayString;
}

let monkeyWords = ["Ooh", "Aah", "Eee", "Ook", "Agh", "Eek"];
let cowWords = ["Moo", "Moo", "Moo", "Moo", "Moo", "Moo"];
let textBox = document.getElementById("text");
let genButton = document.getElementById("gen-button");

let monkey1 = document.getElementById("monkey");
let monkey2 = document.getElementById("monkey1");

genButton.addEventListener("click", () => {
  let luckyMonkey = Math.floor(Math.random() * 50);
  if(luckyMonkey === 42) {
    textBox.innerHTML = "Lucky Monkey!";
    luckyMonkeySound.play();
    monkey1.style.visibility = "visible";
    monkey2.style.visibility = "visible";
  }
  else {
    let randomSound = Math.floor(Math.random() * soundArray.length);
    arrayToString(generateWordArray(10, monkeyWords), textBox);
    soundArray[randomSound].play();
    monkey1.style.visibility = "hidden";
    monkey2.style.visibility = "hidden";
  }
});
