import React from 'react';
import HangmanImage from './HangmanImage';
import './HangmanGame.css';
import { Container, Row } from 'react-bootstrap';
import HelpDesk from '../HelpDesk';
import Lives from '../Lives';
import WinLose from '../WinLose';

// HangmanGame component responsible for rendering the Hangman game UI
export default function HangmanGame(props) {
    // Destructuring props
    const { status, usedLetters, restart, chosenWord, hangmanState, wordBuild, updateUsedLetters } = props;

    // Alphabet array
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"];

    // The alphabet gets mapped with conditionals to create letter buttons
    let letter = letters.map((letter, key) => {
        if (usedLetters.includes(letter)) {
            return (
                <div key={key}>
                    <button value={letter} className="letterBtn used">
                        {letter}
                    </button>
                </div>
            );
        } else if (status === "win" || status === "lose") {
            return (
                <div key={key}>
                    <button value={letter} className="letterBtn">
                        {letter}
                    </button>
                </div>
            );
        } else {
            return (
                <div key={key}>
                    <button onClick={updateUsedLetters} value={letter} className="letterBtn">
                        {letter}
                    </button>
                </div>
            );
        }
    });

    // Container styling for the letter buttons
    const letterContainer = {
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        width: "270px",
        height: "fit-content",
        justifyContent: "center",
        marginTop: "40px",
        marginBottom: "30px",
        marginLeft: "auto",
        marginRight: "auto"
    };

    // Rendered JSX
    return (
        <div className="body">
            {/* Main container for the rows */}
            <Container className="full">
                {/* Main heading */}
                <Row>
                    <div className="name">
                        <h1>HANGMAN GAME</h1>
                    </div>
                </Row>
                {/* Body containing the left and the right sides */}
                <Row>
                    {/* Displaying remaining lives */}
                    <Lives life={hangmanState} />
                    <HangmanImage hangmanState={hangmanState} /> {/* Displays the Hangman image */}
                    <div>
                        <h1 className="spacedLetters">{wordBuild}</h1> {/* Displays the word with spaces inbetween the letters */}
                        <div style={letterContainer}> {/* Container for the letter buttons */}
                            {letter} {/* Displays the letter buttons */}
                        </div>
                        <button className="newgamebtn" onClick={restart}>Play again</button> {/* New game button */}
                        <HelpDesk /> {/* Help desk component */}
                        <WinLose status={status} restart={restart} guessedWord={chosenWord}/> {/* Win/Lose component */}
                    </div>
                </Row>
            </Container>
        </div>
    );
}
