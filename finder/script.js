    var text = prompt("Enter the text");
    var wordtocheck = prompt("Enter the word for check");

    function checkword() {
    var words = text.split(/\s+/);
    if (words.length < 3) {
        alert("The text does not contain at least three words");
    }
    if (wordtocheck.charCodeAt >= 65 && wordtocheck.charCodeAt <= 90) {
        wordtochecklower = wordtocheck.toLowerCase();
        var thirdword = words[2].toLowerCase();
    } else {
        wordtochecklower = wordtocheck.toUpperCase();
        var thirdword = words[2].toUpperCase();
    }
    if (thirdword.startsWith(wordtochecklower)) {
        alert(`The third word "${thirdword}" starts with "${wordtochecklower}".`);
    } else {
        alert(`The third word "${thirdword}" does not  starts with "${wordtochecklower}".`);
    }
}
var result = checkword();