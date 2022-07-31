import React from 'react';

export default function Landing() {
  const randomId = () => {
    let randomId = Math.floor(Math.random() * 825 + 1);
    return randomId;
  };
  const randomCharacter = () => {
    window.open(`/api/characters/${randomId()}`, '_self');
  };

  return (
    <div>
      <h1 className='title'>Página de inicio</h1>
      <a href='/api/characters/page/1'>Ver lista de personajes</a>
      <button className='random-char' onClick={randomCharacter}>
        Personaje aleatorio
      </button>
    </div>
  );
}
