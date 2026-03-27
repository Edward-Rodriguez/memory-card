export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className='scorecard'>
      <div>Score: {currentScore}</div>
      <div>Best score: {bestScore}</div>
    </div>
  );
}
