import React from 'react';

// A functional component that displays a message based on the amount of lives remaining
export default function Lives(props) {
    // Extracts the life prop
    const lives = props.life;

    // A function to determine the message based on the remaining lives the user has
    function livesLeft() {
        // Calculates the number of lives left
        let livesLeft = 10 - lives;

        // This will determine the message based on the number of lives left
        if (livesLeft === 1) {
            return "You only have " + livesLeft + " life left!";
        } else if (livesLeft === 0) {
            return "You died!";
        } else if (livesLeft < 5) {
            return "Think carefully, you have " + livesLeft + " lives left!";
        } else {
            return "You have " + livesLeft + " lives left.";
        }
    }

    // Render's the message
    return (
        <div>
            {livesLeft()}
        </div>
    );
}
