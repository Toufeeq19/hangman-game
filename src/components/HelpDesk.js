// Imports the necessary dependencies and styles
import React, { Component } from 'react';
import './HelpDesk.css';
import { Modal } from 'react-bootstrap'; // Importing Modal component from react-bootstrap

// Component to bring up the help Modal
export default class HelpDesk extends Component {
    constructor() {
        super();
        // Initializing the state to control the modal visibility
        this.state = {
            show: false // Initially the modal is hidden
        };
    }

    // Function to toggle the visibility of the modal
    handleHelp = () => {
        this.setState({
            show: !this.state.show // Switches the boolean state
        });
    };

    render() {
        return (
            <div className="help-div">
                {/* Button to trigger the help modal */}
                <button onClick={this.handleHelp} className="helpBtn">Click for help</button>
                
                {/* Help modal */}
                <Modal show={this.state.show}>
                    {/* Content of the help modal */}
                    <Modal.Body className="modalBody">
                        {/* Help information */}
                        Need some more information on how to play this game? <br></br>
                        {/* Game instructions */}
                        This is an electronic version of the famous Hangman Game. It is word a guessing game where the computer selects a random word from a preset dictionary and the user has to guess the word. You have 10 attempts at guessing letters. If too many letters not found in the word are guessed, the user gets hanged and the game is lost.<br></br>
                        Good Luck!<br></br> 
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
