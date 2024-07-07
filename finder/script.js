function checkword() {
    var text = prompt("Enter the text");
    var wordtocheck = prompt("Enter the word for check");
    var result = alert();

    var words = text.split(/\s+/);

    if (words.length < 3) {
        alert("The text does not contain at least three words");
    }

    var thirdword = words[2];

    if (thirdword.startsWith(wordtocheck)) {
        alert(`The third word "${thirdword}" starts with "${wordtocheck}".`);
    } else {
        alert(`The third word "${thirdword}" does not  starts with "${wordtocheck}".`);
    }
}