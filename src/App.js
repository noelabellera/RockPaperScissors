import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      compScore: 0
    }
  }
  render() {
  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <h2>player Score: {this.state.playerScore}</h2>
      <h2>computer Score: {this.state.compScore}</h2>

      
    </div>
  );
  }
}

export default App;
