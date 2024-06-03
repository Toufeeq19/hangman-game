import React from 'react';
import { Modal } from 'react-bootstrap';
import './WinLose.css';

// Functional component named WinLose
export default function WinLose(props) {
    // Destructuring props to extract status and the guessedWord
    const { status, guessedWord } = props;
    // Set variables for title and body
    let title = "";
    let body = "";

    // Conditional logic to set title and body based on status of the prop
    if (status === "win") {
        title = "YOU WON!!";
        body = "Well done not being hung!!";
    } else if (status === "lose") {
        title = "Ooops! You've lost";
        body = "The word was: " + guessedWord + ". Better luck next time!";
    }

    // If the status prop is null it returns null and nothing will render
    if (status === null) {
        return null;
    } else {
        // If the status prop is not null it will render the modal with title and body
        return (
            <div className="body">
                <Modal centered show={true}>
                    <Modal.Body className="modalBox">
                        {title} {body}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
