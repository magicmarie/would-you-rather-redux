import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { handleData } from './actions/common';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.handleData();
  }

  render() {
    return (
      <Router>
        <div className="App">
            <p>Wud u ratha</p>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { handleData }
)(App);
