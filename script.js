function mapLetters(word) {
    const obj = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (obj.hasOwnProperty(letter)) {
            obj[letter].push(i);
        } else {
            obj[letter] = [i];
        }
    }
    return obj;
}