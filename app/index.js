var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

//state
//lifecycle hooks you can set so that you know when certain events happen
// UI

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
