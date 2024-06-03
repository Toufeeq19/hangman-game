import React from 'react'
import hang1 from '../../imports/images/state1.GIF'
import hang2 from '../../imports/images/state2.GIF'
import hang3 from '../../imports/images/state3.GIF'
import hang4 from '../../imports/images/state4.GIF'
import hang5 from '../../imports/images/state5.GIF'
import hang6 from '../../imports/images/state6.GIF'
import hang7 from '../../imports/images/state7.GIF'
import hang8 from '../../imports/images/state8.GIF'
import hang9 from '../../imports/images/state9.GIF'
import hang10 from '../../imports/images/state10.GIF'
import hang11 from '../../imports/images/state11.GIF'
import './HangmanImage.css'

export default function HangmanImage( props ) {
    const { hangmanState } = props;
    // Initialized to null
    let image = null;
    
   // Switch case for selecting the appropriate hangman image based on the value of the prop
    switch (hangmanState) {
        case 0:
            image = hang1;
            break;
        case 1:
            image = hang2;
            break;
        case 2:
            image = hang3;
            break;
        case 3:
            image = hang4;
            break;
        case 4:
            image = hang5;
            break;
        case 5:
            image = hang6;
            break;
        case 6:
            image = hang7;
            break;
        case 7:
            image = hang8;
            break;
        case 8:
            image = hang9;
            break;
        case 9:
            image = hang10;
            break;
        case 10:
            image = hang11;
            break;
        default:
            image = null;
            break;
    }

    //The image variable is returned
    return (
        <div className="imgDiv">
            <img alt="hangman-state" src={image}></img>
        </div>
    )
}