import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <Button secondary>Aceptar</Button>
      </header>
    </div>
  );
}

export default App;
