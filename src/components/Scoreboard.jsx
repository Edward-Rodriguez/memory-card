import '../styles/Scoreboard.css';

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className='scoreboard'>
      <div>Score: {currentScore}</div>
      <div>Best score: {bestScore}</div>
    </div>
  );
}
