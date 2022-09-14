function generateWordArray(userLength, wordDictionary) {
    let generatedMessage = [];

    for (let i = 0; i < userLength; i++) {
      let randomNum = Math.floor(Math.random() * 6);
      generatedMessage.push(wordDictionary[randomNum]);
    }

    return generatedMessage;
}

function arrayToString(generatedMessage) {
  let arrayString = "";
  for (let i = 0; i < generatedMessage.length; i++) {
    if (i === generatedMessage.length - 1) {
        arrayString += generatedMessage[i].toLowerCase();
        arrayString += "!";
    }
    else if (i === 0) {
        arrayString += generatedMessage[i];
        arrayString += '-';
    }
    else {
        arrayString += generatedMessage[i].toLowerCase();
        arrayString += "-";
    }
  }
  return arrayString;
}

let monkeyWords = ["Ooh", "Aah", "Eee", "Ook", "Agh", "Eek"];
console.log(arrayToString(generateWordArray(3, monkeyWords)));