const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter !== ' ') {
            if (!results[letter]) {
                results[letter] = [];
            }
            results[letter].push(i);
        }
    }
    return results;
};

letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;