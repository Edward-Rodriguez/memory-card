import '../styles/Footer.css';
import GiphyLogo from '../assets/giphy-logo.png';

export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://giphy.com/'>
        <img src={GiphyLogo} alt='giphy logo' />
      </a>
    </div>
  );
}
