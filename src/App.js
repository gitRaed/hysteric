import './styles/App.css';
import { useState } from 'react';

import { Navbar } from './components/navbar';
import { RenderContent } from './components/renderContent';


function App() {

  const [display, setDisplay] = useState(1);


  return (
    <div className="App">
      <Navbar setDisplay={setDisplay}/>

      <div>
        {RenderContent(display)}
      </div>

      <footer>Footer here</footer>
    </div>
  );
}

export default App;
