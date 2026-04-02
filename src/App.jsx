import './App.css';
import { useState } from 'react';
import useTrendingGifs from './services/giphyApi';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Scoreboard from './components/Scoreboard';

function App() {
  const gifs = useTrendingGifs();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(initialiazeCards());

  // key = card/GIF id, value = true, false (if it has been clicked)
  function initialiazeCards() {
    const cards = {};
    const hasBeenClicked = false;
    if (gifs.length > 0) {
      gifs.map((gif) => {
        cards[`${gif.id}`] = hasBeenClicked;
      });
    }
    return cards;
  }

  function handleCardClick(e) {
    const card = e.currentTarget;
    if (clickedCards[card.id]) {
      setScore(0);
      setClickedCards(initialiazeCards());
    } else {
      setClickedCards({ ...clickedCards, [card.id]: true });
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        newScore > bestScore && setBestScore(newScore);
        return newScore;
      });
    }
  }

  return (
    <>
      <Scoreboard currentScore={score} bestScore={bestScore} />
      <CardList gifList={gifs} onClick={handleCardClick} />
      <Footer />
    </>
  );
}

export default App;

// Vite dev:
// React → /api/giphy → Worker → Giphy API → React renders GIF

// Wrangler dev:
// React → /api/giphy → Worker → Giphy API → React renders GIF
