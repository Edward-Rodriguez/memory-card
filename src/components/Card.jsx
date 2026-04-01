import '../styles/Card.css';

export default function Card({ id, name, imageUrl, alt, onClick }) {
  // remove anything after 'GIF' in title
  function trimGifTitle(originalTitle) {
    return originalTitle.split('GIF')[0].trim();
  }

  return (
    <div id={id} className='card' onClick={(e) => onClick(e)}>
      <img src={imageUrl} alt={alt} />
      <div className='card-title'>{trimGifTitle(name)}</div>
    </div>
  );
}
