import React from 'react';

export default function CharacterPrevCard({ image, name, link }) {
  return (
    <div className='prev-card' onClick={() => window.open(link, '_self')}>
      <img src={image} alt='Personaje' />
      <div className='prev-card__name'>{name}</div>
    </div>
  );
}
