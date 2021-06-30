import React from 'react';
import './App.css';
import FetchApi from './components/API/FetchApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Giphy API
        </p>
      </header>
      <main>
        <FetchApi />
      </main>
    </div>
  );
}

export default App;
