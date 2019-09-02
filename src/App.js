import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      compScore: 0,
      choices: ['rock', 'papper', 'scissors'],
      compChoice: '',
      playerChoice: ''
    }
  }

  getCompChoice = () => {
    this.setState({
      compScore: this.state.compScore + 1
    })
    console.log(this.state.compChoice)
  }

  playerChoice = (choice) => {
    this.setState({
      playerChoice: choice
    }, () => {
      console.log(this.state.playerChoice)
    })
  }

  playerChoiceRock = () => {
    this.playerChoice('rock');
  }

  playerChoiceScissors = () => {
    this.playerChoice('scissors');
  }

  playerChoicePaper = () => {
    this.playerChoice('paper');
  }


  render() {
  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <h2>Your Choice: {this.state.playerChoice}</h2>
      <h2>player Score: {this.state.playerScore}</h2>
      <h2>computer Score: {this.state.compScore}</h2>
      <button onClick={this.getCompChoice}>Check</button>
      <button onClick={this.playerChoiceRock}>Rock</button>
      <button onClick={this.playerChoiceScissors}>Scissors</button>
      <button onClick={this.playerChoicePaper}>Paper</button>
      
    </div>
  );
  }
}

export default App;
