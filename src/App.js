import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      compScore: 0,
      choices: ['rock', 'paper', 'scissors'],
      choicesResults: [],
      compChoice: '',
      playerChoice: '',
      results: ''
    }
  }

  getCompChoice = () =>  {

    let choice = this.state.choices[Math.floor(Math.random()*this.state.choices.length)]
    this.setState({
      compChoice: choice
    })

    console.log(this.state.compChoice)
  }

  playerChoice = (choice) => {
    this.setState({
      playerChoice: choice
    })
    this.getCompChoice()
  }

  playerChoiceRock = () => {
    this.playerChoice('rock');
    if(this.state.compChoice === "rock") {
      this.setState({
        results: 'Game is a tie'
      })
    } else if(this.state.compChoice === 'paper') {
      this.setState({
        results: 'You lose!'
      })
    } else {
      this.setState({
        results: 'You win!'
      })
    }
    console.log(this.state.results)
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
      <h2>Comp Choice: {this.state.compChoice}</h2>
      <h2>player Score: {this.state.playerScore}</h2>
      <h2>computer Score: {this.state.compScore}</h2>
      <h2>Game Result: {this.state.results}</h2>
      <button onClick={this.getCompChoice}>Check</button>
      <button onClick={this.playerChoiceRock}>Rock</button>
      <button onClick={this.playerChoiceScissors}>Scissors</button>
      <button onClick={this.playerChoicePaper}>Paper</button>
      
    </div>
  );
  }
}

export default App;
