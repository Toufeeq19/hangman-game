import React, { Component } from 'react';
import './App.css';
import HangmanGame from '../Main/HangmanGame';
import raw from '../../imports/dictionary.txt';

// Stores all the words
let words = [];

export default class App extends Component {
  constructor() {
    super();
    this.updateUsedLetters = this.updateUsedLetters.bind(this);
    this.state = {
      status: null,    // Indicates win or lose as a string
      isLoaded: false, // Indicates if the app is loaded or not
      chosenWord: "",  // Randomly selects a word from the dictionary given
      wordBuild: [],   // The word the user builds with correct amount of guesses
      usedLetters: [], // Letters already guessed by the user
      hangmanState: 0  // The current state of hangman which determines what image it should display
    }
  }

  // Fetches the dictionary file and initialises the game
  componentDidMount(){
    fetch(raw)
    .then(r => r.text())
    .then(text => {
      // Concatenates text to words
      words += text;
      // Finds the index of the word "START" in the text file to ignore all the legal information provided
      let startLoc = words.lastIndexOf("START") + 6;
      // Slices words from startLoc to the end and splits it at new lines
      words = (words.slice(startLoc)).split("\n");
      // Lowercases the randomly selected word to ensure the consistency
      const randomWord = words[ Math.floor(Math.random() * words.length) ]

      // Initialises the wordBuild array with underscores for each letter in the chosen word
      function initializeWordBuildArray(){
        let wordArr = []
        for (let index = 0; index < randomWord.length; index++) {
          wordArr.push("_");
        }
        return wordArr
      }

      // Updates the component state with the randomly selected word and initialises the wordBuild array
      this.setState({
        chosenWord: randomWord, 
        wordBuild: initializeWordBuildArray(),
        isLoaded: true
      }) 
    });
  }
  
  // Checks if the game is won or lost
  checkGameState() {
    const wordBuild = (this.state.wordBuild)
    const hangmanState = this.state.hangmanState
    
    if (!wordBuild.includes("_")) {
      this.setState({
        status: "win"
      })
    }
    
    if (hangmanState === 10){
      this.setState({
        status: "lose"
      })
    }
  }

  // Updates the usedLetters array with the newly chosen letter
  updateUsedLetters = ( event ) => {
    const letterToPush = event.target.value
    let currArray = this.state.usedLetters
    currArray.push(letterToPush)
    this.setState({
      usedLetters: currArray
    }, () => this.update( letterToPush ))
  }

  // Updates the wordBuild array and hangmanState based on the chosen letters
  update( letterToPush ){
    const chosenWord = this.state.chosenWord.toLowerCase();
    const buildArray = this.state.wordBuild;
    let life = 0
    
    if (chosenWord.includes( letterToPush )) {
      for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letterToPush) {
          buildArray[i] = letterToPush
        } else {
          continue;
        }
      }
    } else {
      life += 1
    }
    
    this.setState({
      buildArray: buildArray,
      hangmanState: this.state.hangmanState + life
    }, () => this.checkGameState())
  }

  // Initialises the wordBuild array with underscores for each letter in the chosen words
  createWordBuild() {
    const chosen = this.state.chosenWord
    let wordArr = []
    for (let index = 0; index < chosen.length; index++) {
      wordArr.push("_");
    }
    this.setState({
      wordBuild: wordArr
    })
  }

  // Resets the state values for a new game
  newGame = () => {
    this.setState({
      status: null,    
      isLoaded: true,  
      chosenWord: words[ Math.floor(Math.random() * words.length) ], 
      usedLetters: [], 
      hangmanState: 0  
    }, () => this.createWordBuild()) 
  }

  render() {
    const isLoaded = this.state.isLoaded

    if (!isLoaded) {
      return (
        <div className="App">
          <p>Loading...</p>
        </div>
      )
    }else {
      return (
        <div className="App">
          {/* The hangman component is rendered with the necessary props */}
          <HangmanGame 
            status={this.state.status}
            usedLetters={this.state.usedLetters} 
            hangmanState={this.state.hangmanState} 
            wordBuild={this.state.wordBuild} 
            restart={this.newGame} 
            updateUsedLetters={this.updateUsedLetters} 
            chosenWord={this.state.chosenWord} 
          />
        </div>
      )
    }
  }
}


/* https://www.youtube.com/watch?v=jj0W8tYX_q8 */
/* https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a?source=rss&ref=morioh.com&utm_source=morioh.com */
/* https://codepen.io/ozluy/pen/QEbgzx */
/* https://hangman-dalkmania.netlify.app/ */
/* https://gitlab.com/tradesmanhelix/hangman */