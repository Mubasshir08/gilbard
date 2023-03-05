import React from 'react';
import './App.css';
import GameReviewSlider from './components/GameReviewSlider/GameReviewSlider';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewGames from './components/NewGames/NewGames';

function App() {
  return (
    <div className="App Container">
        <Navbar/>
        <Header />
        <NewGames />
        <GameReviewSlider />
    </div>
  );
}

export default App;
