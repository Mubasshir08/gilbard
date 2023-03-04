import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewGames from './components/NewGames/NewGames';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header />
        <NewGames />
    </div>
  );
}

export default App;
