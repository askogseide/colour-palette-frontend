import './ColourSwatch.css';

import { useCallback, useState } from "react";

function ColourSwatch() {

    const [swatchColour, setSwatchColour] = useState('#ffffff');

    const getRandomColourHandler = useCallback(() => {
        const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        var newColour = '#';
        for (let i=0; i < 6; i++){
            newColour = newColour + options[Math.floor(Math.random() * 16)];
        }
        setSwatchColour(newColour);
    }, []);

    return (
      <div className='ColourSwatch-container'>
        <header className="ColourSwatch-header">{swatchColour}</header>
        <div className='ColourSwatch-colour' style={{background: swatchColour}}></div>
        <button onClick={getRandomColourHandler}>
            Randomise Colour
        </button>
      </div>
    );
  }
  
  export default ColourSwatch;