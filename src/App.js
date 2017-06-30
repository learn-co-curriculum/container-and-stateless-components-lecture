import React, { Component } from 'react';
import Books from './containers/Books';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Book App</h2>
        </div>
        <div className="App-intro">
          <Books />
        </div>
      </div>
    );
  }
}

export default App;
