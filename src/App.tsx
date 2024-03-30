import React from 'react';
import "./index.css"
import { Navbar } from './components/Navbar';
import { FileBrowser } from './components/FileBrowser';

function App() {
  return (
    <div className="App">
    <Navbar />
    <FileBrowser />
  </div>
  );
}

export default App;
