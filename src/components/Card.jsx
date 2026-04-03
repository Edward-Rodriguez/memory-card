import '../styles/Card.css';

export default function Card({ name, imageUrl, alt }) {
  // remove anything after 'GIF' in title
  function trimGifTitle(originalTitle) {
    return originalTitle.split('GIF')[0].trim();
  }

  return (
    <>
      <img src={imageUrl} alt={alt} />
      <div className='card-title'>{trimGifTitle(name)}</div>
    </>
  );
}
