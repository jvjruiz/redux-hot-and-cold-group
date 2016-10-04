//action to  number
var SUBMIT_GUESS_NUMBER = 'SUBMIT_GUESS_NUMBER';
function submitGuessNumber(guessNumber) {
    return {
        type: SUBMIT_GUESS_NUMBER,
        payload: guessNumber
    }
}

var SET_WINNER_TO_TRUE = 'SET_WINNER_TO_TRUE';
function setWinnerTrue() {
    return {
        type: SET_WINNER_TO_TRUE
    }
}

//action to generate a random number
var SET_NEW_WINNING_NUMBER = 'SET_NEW_WINNING_NUMBER';
function setWinningNumber() {
    return {
        type: SET_NEW_WINNING_NUMBER,
    };
};

//action to provide feedback
var SET_FEEDBACK = 'SET_FEEDBACK';
function setFeedback(feedback) {
    return {
        type: SET_FEEDBACK,
        payload: feedback
    }
};

exports.SUBMIT_GUESS_NUMBER = SUBMIT_GUESS_NUMBER;
exports.submitGuessNumber = submitGuessNumber;

exports.SET_NEW_WINNING_NUMBER = SET_NEW_WINNING_NUMBER;
exports.setWinningNumber = setWinningNumber;

exports.SET_FEEDBACK = SET_FEEDBACK;
exports.setFeedback = setFeedback;

exports.SET_WINNER_TO_TRUE = SET_WINNER_TO_TRUE;
exports.setWinnerTrue = setWinnerTrue;