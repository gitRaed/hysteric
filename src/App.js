import './styles/App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from './components/navbar';
import { RenderContent } from './components/renderContent';


function App() {

  const [display, setDisplay] = useState(10);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="App">
      <Navbar setDisplay={setDisplay}/>
      <header>
        <span className='cartNumber'>{cartNumber}</span>
        <FontAwesomeIcon className='cart' icon={faCartShopping} onClick={() => {setDisplay(0)}}/>
      </header>

      <div className='renderContent'>
        <RenderContent number={display} setDisplay={setDisplay}/>
      </div>

      <footer>Footer here</footer>
    </div>
  );
}

export default App;
