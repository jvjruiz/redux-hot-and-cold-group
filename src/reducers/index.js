var actions = require('../actions/index');

var SUBMIT_GUESS_NUMBER = actions.SUBMIT_GUESS_NUMBER;
var SET_NEW_WINNER_NUMBER = actions.SET_NEW_WINNER_NUMBER;
var SET_FEEDBACK = actions.SET_FEEDBACK;
var SET_WINNER_TO_TRUE = actions.SET_WINNER_TO_TRUE;

var initialGameState = {
    feedback: 'Make a Guess',
    guessNumbers: [],
    randomNumber: Math.floor(Math.random() * ( (100-1) + 1) ),
    isWinner: false
};

module.exports = function gameReducer(state, action) {
    var newState;
    
    state = state || initialGameState;

    switch (action.type) {
        case SUBMIT_GUESS_NUMBER:
            if(isNaN(action.payload)){
                    throw new Error ('Number ONLY!!!');
                }
            if(action.payload === ''){
                throw new Error ('Please enter a number');
            }

            state.guessNumbers.forEach(function (guessNumber, index) {

                if (action.payload === guessNumber) {
                    throw new Error ('This number has been guessed previously');
                }
            });
            
            newState = state.guessNumbers.concat(parseInt(action.payload));
            return Object.assign({}, state, { guessNumbers: newState });

        case SET_NEW_WINNER_NUMBER:
            var newRandomNumber = Math.floor(Math.random()  *   ((100-1)+1) );
            
            newState = Object.assign({}, state, {
                randomNumber: newRandomNumber
            });
            return newState;
        
        case SET_FEEDBACK:
            if (action.payload === state.feedback) {
                return;
            }
            newState = Object.assign({}, state, {
                feedback:  action.payload
            });
        
        case SET_WINNER_TO_TRUE:
            newState = Object.assign({}, state, {
                isWinner:  true
            });
        
        default:
            return state;
    }
};