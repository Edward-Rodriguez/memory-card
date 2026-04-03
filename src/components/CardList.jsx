import '../styles/CardList.css';
import Card from './Card';

export default function CardList({ gifList, onClick }) {
  return (
    <>
      <ul className='cardlist'>
        {gifList.map((gif) => (
          <li
            id={gif.id}
            className='card'
            onClick={(e) => onClick(e)}
            key={gif.id}>
            <Card
              name={gif.title}
              // imageUrl={gif.images.fixed_height.url}
              imageUrl={gif.images.original.url}
              onClick={onClick}
              alt={gif.alt_text || gif.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
Card;
