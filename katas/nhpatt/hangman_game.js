"use strict";

const MAX_TRIES = 6;

class Hangman {
    constructor(word) {
        this.word = word.split("");
        this.tries = -1;
        this.wrongLetters = [];
        this.guesses = [];
    }

    guess(letter) {
        if (this.tries > MAX_TRIES) {
            return 'The game has ended.';
        }

        if (this.word.includes(letter)) {
            this.guesses.push(letter);
            if (this.won()) {
                this.tries = MAX_TRIES + 1;
                return `You found the word! (${this.word.join("")})`;
            }
            return this.printState();
        } else {
            if (this.wrongLetters.indexOf(letter) == -1) {
                this.wrongLetters.push(letter);
                this.tries++;
            }

            if (this.tries == MAX_TRIES) {
                this.tries++;
                return `You got hung! The word was ${this.word.join("")}.`;
            }
            return this.printState();
        }
    }

    won() {
        return this.word.every(c => this.guesses.includes(c));
    }

    printState() {
        return this.word.map(c => this.guesses.includes(c) ? c : '_').join(" ") +
            (this.wrongLetters.length ? ' # ' : '') + this.wrongLetters.join("")
    }
}

let Test = {
    assertEquals: console.log
};

let hangman1 = new Hangman('codet');

Test.assertEquals(hangman1.guess('w'), '_ _ _ _ _ # w');
Test.assertEquals(hangman1.guess('a'), '_ _ _ _ _ # wa');
Test.assertEquals(hangman1.guess('r'), '_ _ _ _ _ # war');
Test.assertEquals(hangman1.guess('s'), '_ _ _ _ _ # wars');
Test.assertEquals(hangman1.guess('e'), '_ _ _ e _ # wars');
Test.assertEquals(hangman1.guess('d'), '_ _ d e _ # wars');
Test.assertEquals(hangman1.guess('o'), '_ o d e _ # wars');
Test.assertEquals(hangman1.guess('c'), 'c o d e _ # wars');
Test.assertEquals(hangman1.guess('x'), 'c o d e _ # warsx');
Test.assertEquals(hangman1.guess('y'), 'c o d e _ # warsxy');
Test.assertEquals(hangman1.guess('z'), 'You got hung! The word was codet.');

let hangman2 = new Hangman('wars');

Test.assertEquals(hangman2.guess('w'), 'w _ _ _');
Test.assertEquals(hangman2.guess('u'), 'w _ _ _ # u');
Test.assertEquals(hangman2.guess('s'), 'w _ _ s # u');
Test.assertEquals(hangman2.guess('a'), 'w a _ s # u');
Test.assertEquals(hangman2.guess('r'), 'You found the word! (wars)');
Test.assertEquals(hangman2.guess('g'), 'The game has ended.');

const Hangman3 = function (word) {
    const WORD = word;
    var _badChars = '', _count = 0, _guess = {}, _gameState = 0;

    const cont = a => WORD.indexOf(a) !== -1;
    const wordState = _ => WORD.split('').map(a => _guess[a] ? a : '_').join(' ');
    const state = _ => wordState() + (!!_badChars.length ? ' # ' + _badChars : '');

    return {
        guess: letter => {
            if (_guess[letter] !== undefined)
                return state();

            _guess[letter] = cont(letter), _badChars += !cont(letter) ? letter : '';

            if (!cont(letter) && ++_count >= 7)
                return _gameState++, _gameState <= 1 ? `You got hung! The word was ${WORD}.` : 'The game has ended.';

            if (wordState().indexOf('_') === -1)
                return _gameState++, _gameState <= 1 ? `You found the word! (${WORD})` : 'The game has ended.';

            return _gameState < 1 ? state() : 'The game has ended.';
        }
    };
};