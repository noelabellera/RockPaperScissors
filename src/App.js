import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      compScore: 0,
      choices: ['rock', 'papper', 'scissors'],
      compChoice: ''
    }
  }

  getCompChoice = () => {
    this.setState({
      compChoice: "Noel"
    })
    console.log(this.state.compChoice)
  }


  render() {
  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <h2>player Score: {this.state.playerScore}</h2>
      <h2>computer Score: {this.state.compScore}</h2>
      <button onClick={this.getCompChoice}>Check</button>
      
    </div>
  );
  }
}

export default App;
