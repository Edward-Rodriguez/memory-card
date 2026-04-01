import '../styles/CardList.css';
import Card from './Card';

export default function CardList({ gifList, onClick }) {
  return (
    <>
      <ul>
        {gifList.map((gif) => (
          <li key={gif.id}>
            <Card
              id={gif.id}
              name={gif.title}
              imageUrl={gif.images.fixed_height.url}
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
