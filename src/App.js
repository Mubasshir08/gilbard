import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NewGames from './components/NewGames/NewGames';
import GameReviewSlider from './components/GameReviewSlider/GameReviewSlider';
import GameReview from './components/GameReview/GameReview';
import Subscription from './components/Subscription/Subscription';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App Container">
        <Navbar/>
        <Header />
        <NewGames />
        <GameReviewSlider />
        <GameReview />
        <Subscription />
        <Footer />
    </div>
  );
}

export default App;
