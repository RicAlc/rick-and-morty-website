import title from '../assets/title.png';
import FeelingLucky from '../components/FeelingLucky';
import LandingIllustration from '../components/LandingIllustration';
import SearchBar from '../components/SearchBar';

export default function Landing() {
  return (
    <div className='landing'>
      {/* Estrellas para el fondo*/}
      <div id='stars'></div>
      <div id='stars1'></div>
      <div className='content'>
        <img src={title} alt='Titulo' className='title-img' />
        <LandingIllustration />
        <SearchBar />
        <FeelingLucky />
      </div>
    </div>
  );
}
