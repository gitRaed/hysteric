import './styles/App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from './components/navbar';
import { RenderContent } from './components/renderContent';


function App() {

  const [display, setDisplay] = useState(1);
  const [cart, setCart] = useState([]); //there is a bug i think with the set param of useState, surely mb

  return (
    <div className="App">
      <main>
        <Navbar setDisplay={setDisplay}/>
        <header>
          <span className='cartNumber'>{cart.length}</span>
          <FontAwesomeIcon className='cart' icon={faCartShopping} onClick={() => {setDisplay(0)}}/>
        </header>

        <div className='renderContent'>
          <RenderContent number={display} setDisplay={setDisplay} cart={cart} setCart={setCart}/>
        </div>
      </main>
    </div>
  );
}

export default App;
