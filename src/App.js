import React from 'react';
import './App.css';
import GameReview from './components/GameReview/GameReview';
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
        <GameReview />
    </div>
  );
}

export default App;
