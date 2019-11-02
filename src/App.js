import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      compScore: 0,
      choices: ['rock', 'paper', 'scissors'],
      compChoice: '',
      playerChoice: '',
      results: ''
    }
  }





  playerChoiceRock = () => {
    // this.playerChoice('rock');
    this.setState({
      playerChoice: 'rock'
    })
    this.getCompChoice()
    console.log(this.state)
  }

  playerChoiceScissors = () => {
    this.playerChoice('scissors');
  }

  playerChoicePaper = () => {
    this.playerChoice('paper');
  }

  checkWin = () => {
    if (this.state.compChoice === 'rock' && this.state.playerChoice === 'rock') {
      this.setState({
        results: 'Game is a tie'
      })
    }
  }

  playerChoice = (choice) => {
    this.setState({
      playerChoice: choice
    })
    this.getCompChoice()
    this.checkWin()
    console.log(this.state)
  }

  getCompChoice = () => {
    let choice = this.state.choices[Math.floor(Math.random() * this.state.choices.length)]
    this.setState({
      compChoice: choice
    })
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
          <img onClick={this.playerChoiceRock} className="gameImg" src="https://i.imgur.com/qqVc9Et.png" alt="rock"></img>
          <img onClick={this.playerChoiceScissors} className="gameImg" src="https://i.imgur.com/Q3otk9o.png" alt="paper"></img>
          <img onClick={this.playerChoicePaper} className="gameImg" src="https://i.imgur.com/prW2ubW.png" alt="scissor"></img>
        </div>
      );
    }
  }

  export default App;
