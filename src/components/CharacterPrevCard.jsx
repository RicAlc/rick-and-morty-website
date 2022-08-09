import React from 'react';

export default function CharacterPrevCard({ image, name, link }) {
  return (
    <div className='prev-card' onClick={() => window.open(link, '_self')}>
      <img className='prev-card__img' src={image} alt='Imagen de perosnaje' />
      <div className='prev-card__parallelogram'>
        <div className='prev-card__title'>{name}</div>
      </div>
    </div>
  );
}
