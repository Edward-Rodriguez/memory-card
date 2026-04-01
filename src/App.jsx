import './App.css';
import { useState } from 'react';
import useTrendingGifs from './services/giphyApi';
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {
  const gifs = useTrendingGifs();
  // const [cardScores, setCardScores] = useState(initialiazeScores());

  // function initialiazeScores() {
  //   const scores = {};
  //   if (gifs.length > 0) {
  //     gifs.map((gif) => {
  //       scores[`${gif.id}`] = 0;
  //     });
  //   }
  //   console.log(scores);
  //   return scores;
  // }

  function handleCardClick(e) {
    // if (e.target)
  }
  console.log(gifs);

  return (
    <>
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
