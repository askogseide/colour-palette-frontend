import './CreatePalette.css';
import ColourPalette from '../components/ColourPalette';

function CreatePalette() {
    return (
      <div>
        <header className="CreatePalette-header">Create a palette</header>
        <div className='CreatePalette-ColourPalette'>
            <ColourPalette />
        </div>
      </div>
    );
  }
  
  export default CreatePalette;