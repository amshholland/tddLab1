function translate(word) {
    word = word.toLowerCase();
    const vowels = /[aeiou]/;

    if (word[0].match(vowels)) {
        return `${word}way`;
    }
    else {
        let vowelFound = vowels.exec(word);
        return word.slice(vowelFound.index) + word.slice(0, vowelFound.index) + 'ay';
    }
}
module.exports.translate = translate;