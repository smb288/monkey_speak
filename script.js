function generateMonkeyArray(userLength) {
    let monkeyWords = ["Ooh", "Aah", "Eee", "Ook", "Agh", "Eek"];
    let generatedMessage = [];

    for (let i = 0; i < userLength; i++) {
      let randomNum = Math.floor(Math.random() * 6);
      generatedMessage.push(monkeyWords[randomNum]);
    }

    return generatedMessage;
}



console.log(generateMonkeyArray(3));
console.log(generateMonkeyArray(4));
console.log(generateMonkeyArray(2));