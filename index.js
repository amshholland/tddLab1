function translate(word) {
    word = word.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(word[0])) {
        return `${word}way`;
    }
    else {
        let index = word.search;
        return word.slice(index) + word.slice(0, index) + 'ay';
    }
}

module.exports.translate = translate;