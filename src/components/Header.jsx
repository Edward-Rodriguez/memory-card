import Scoreboard from './Scoreboard';
import '../styles/Header.css';

export default function Header({ currentScore, bestScore }) {
  return (
    <header className='header'>
      <div className='heading'>
        GIF Memory Game
        <div className='subheading'>
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}
