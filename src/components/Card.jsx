import '../styles/Card.css';

export default function Card({ name, imageUrl, alt }) {
  return (
    <div className='card'>
      <img src={imageUrl} alt={alt} />
      <div className='card-title'>{name}</div>
    </div>
  );
}
