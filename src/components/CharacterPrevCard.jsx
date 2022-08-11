import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CharacterPrevCard({ image, name, link }) {
  const navigate = useNavigate();
  return (
    <div
      className='prev-card'
      onClick={() => navigate(link, { replace: true })}
    >
      <img className='prev-card__img' src={image} alt='Imagen de perosnaje' />
      <div className='prev-card__parallelogram'>
        <div className='prev-card__title'>{name}</div>
      </div>
    </div>
  );
}
