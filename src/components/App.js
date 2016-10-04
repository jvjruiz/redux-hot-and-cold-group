var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var redux  = require('redux');

var actions = require('../actions/index');
var reducers = require('../reducers/index');
require('./App.scss');

var createStore = redux.createStore;
var store = createStore(reducers);

var NewGameButton = require('./NewGameButton');
var Feedback = require('./Feedback');
var GuessInput = require('./GuessInput');
var GuessList = require('./GuessList');
var GuessInput = require('./GuessInput')


var App = function (props) {
    return (
        <div className="App">
            <h1>Hot or Cold</h1>
            <Feedback />
            <GuessList />
            <GuessInput />
        </div>
    );
};
                // <NewGameButton />
                // <Feedback />

 
// function mapStateToProps(state) {
//     return {
//         guessNumbers: state.guessNumbers,
//         feedback: state.feedback
//     };
// }




//store.dispatch(actions.submitGuessNumber(10));
console.log(store.getState());

module.exports = App;

// module.exports = connect(mapStateToProps)(App);

module.exports.store = store;