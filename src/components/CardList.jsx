import '../styles/CardList.css';

export default function CardList({ gifList }) {
  return (
    <>
      <ul>
        {gifList.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </>
  );
}
