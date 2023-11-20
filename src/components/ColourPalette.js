import ColourSwatch from '../components/ColourSwatch';

import './ColourPalette.css';

function ColourPalette() {
    return (
      <div className='ColourPalette-container'>
        <header className="ColourPalette-header">New Palette</header>
        <div className='ColourPalette-swatchContainer'>
            <ColourSwatch/>
            <ColourSwatch/>
            <ColourSwatch/>
            <ColourSwatch/>
            <ColourSwatch/>
        </div>
      </div>
    );
  }
  
  export default ColourPalette;