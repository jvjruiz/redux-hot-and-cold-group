var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var setFeedback = require('../actions/index').setFeedback;

var feedback = React.createClass({
    
    onSubmit: function () {
        checkTemperature(this.props.randomNumber, this.props.guessNumbers);
    },
    
    render: function() {
        return (
            <div className="feedback">
                <h4>{this.props.feedback}</h4>
            </div>
        );
    }
});

function checkTemperature(winningNumber,userGuess) {
    console.log(winningNumber, userGuess);
    var currentFeedback = "";
		if (Math.abs(winningNumber - userGuess) == 0) {
			currentFeedback = "Congrats, you got it!";
		} else if (Math.abs(winningNumber - userGuess) <= 5) {
			currentFeedback = "Getting real hot in here";
		} else if (Math.abs(winningNumber - userGuess) <= 10){
			currentFeedback = "Getting hotter";
		} else if (Math.abs(winningNumber - userGuess)>=10 && Math.abs(winningNumber - userGuess) <= 20) {
			 currentFeedback = "Little warm";
		} else if (Math.abs(winningNumber - userGuess)>=20 && Math.abs(winningNumber - userGuess) <= 30) {
			currentFeedback = "Brr.. its cold";
		} else if (Math.abs(winningNumber - userGuess)>=30 && Math.abs(winningNumber - userGuess) <= 40) {
			currentFeedback = "Yeah, I'm going to need a jacket";
		} else {
		    currentFeedback = "Frozen.";
		}
	return this.props.addToFeedback(currentFeedback);
}

function mapStateToProps(state) {
    return {
        feedback: state.feedback,
        guessNumbers: state.guessNumbers[state.guessNumbers.length-1],
        randomNumber: state.randomNumber
    };
}

function mapDispatchToProps (dispatch) {
    return {
        addToFeedback: function(currentFeedback) {
            dispatch(setFeedback(checkTemperature(currentFeedback)));
        }         
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(feedback);