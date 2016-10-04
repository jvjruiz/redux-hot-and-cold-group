var React = require('react');
var ReactDOM = require('react-dom');


var App = require('./components/App');
var store = App.store;

var Provider = require('react-redux').Provider;

 ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
    )

