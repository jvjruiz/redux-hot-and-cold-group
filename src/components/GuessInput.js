var React = require('react');
var reactDOM = require('react-dom');
var connect = require('react-redux').connect;

var submitGuessNumber = require('../actions/index').submitGuessNumber;
var Feedback = require('./Feedback');

var guessInput = React.createClass({

    onClick: function (event) {
        event.preventDefault();
        this.props.onAddSubmit(this.refs.cardref.value);
        this.refs.cardref.value = "";
    },
    render: function() {
        return (
            <div className="input-box">
                 <form>
                    <input type="text" name="card" ref="cardref" placeholder="Enter Number" />
                    <input type="submit" onClick={this.onClick} /> {/*not invoking, just referencing*/}
                </form>
            </div>
        )
    }
})

//sending data to state 
function mapDispatchToProps (dispatch) {
    return {
        onAddSubmit: function(guessNumber) {
            dispatch(submitGuessNumber(guessNumber));
        }
    }
}

function mapStateToProps (state) {
    return {
        //state.newcardvalue
    }
}

module.exports = connect(null, mapDispatchToProps)(guessInput);