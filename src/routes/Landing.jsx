import React, { useState } from 'react';
import PortalSvg from '../assets/PortalSvg';
import '../assets/portal.scss';
import rick from '../assets/rick.png';
import morty from '../assets/morty.png';
import title from '../assets/title.png';

export default function Landing() {
  const [input, setInput] = useState(null);
  const randomId = () => {
    let randomId = Math.floor(Math.random() * 825 + 1);
    return randomId;
  };
  const randomCharacter = () => {
    window.open(`/api/characters/${randomId()}`, '_self');
  };
  const handleSearch = (e) => {
    e.preventDefault();
    input === null || input.trim().length === 0
      ? window.alert('Coloca un nombre valido en el buscador')
      : window.open(`/api/characters/search/${input}`, '_self');
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='landing'>
      <div id='stars'></div>
      <div id='stars1'></div>
      <div className='content'>
        <img src={title} alt='Titulo' className='title-img' />
        <div className='illustration'>
          <img src={morty} alt='Morty' className='morty' />
          <PortalSvg width='80%' />
          <img src={rick} alt='Rick' className='rick' />
        </div>
        <form action=''>
          <fieldset>
            <input
              type='text'
              name='buscar'
              id='buscar'
              required
              placeholder='Rick Sanchez'
              onChange={handleChange}
            />
            <button onClick={handleSearch}>Buscar</button>
          </fieldset>
        </form>
        <a href='/api/characters/page/1'>Ver lista de personajes</a>
        <button className='random-char' onClick={randomCharacter}>
          Personaje aleatorio
        </button>
      </div>
    </div>
  );
}
