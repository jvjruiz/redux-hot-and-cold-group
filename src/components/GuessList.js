var React = require('react');
var reactDOM = require('react-dom');
var connect = require('react-redux').connect;
var submitGuessNumber = require('../actions/index').submitGuessNumber;

var GuessList = function(props) {
    var guessList = props.guessNumbers;
    
    return (
        <div>Guess Numbers are: {guessList}</div>  
    );
}

//bringing data from centralized state
function mapStateToProps(state) {
    return {
        guessNumbers: state.guessNumbers
    };
}


//first parameter is to receive data from state
//second parameter is to send data to state
//third parameter is the function you are using to pull or send data to the state
module.exports = connect(mapStateToProps, null)(GuessList);