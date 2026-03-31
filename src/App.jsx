import './App.css';
import useTrendingGifs from './services/giphyApi';
import Footer from './components/Footer';

function App() {
  const gifs = useTrendingGifs();

  console.log(gifs);
  return (
    <>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;

// Vite dev:
// React → /api/giphy → Worker → Giphy API → React renders GIF

// Wrangler dev:
// React → /api/giphy → Worker → Giphy API → React renders GIF
