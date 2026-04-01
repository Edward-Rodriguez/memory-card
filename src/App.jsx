import './App.css';
import useTrendingGifs from './services/giphyApi';
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {
  const gifs = useTrendingGifs();
  return (
    <>
      <CardList gifList={gifs} />
      <Footer />
    </>
  );
}

export default App;

// Vite dev:
// React → /api/giphy → Worker → Giphy API → React renders GIF

// Wrangler dev:
// React → /api/giphy → Worker → Giphy API → React renders GIF
