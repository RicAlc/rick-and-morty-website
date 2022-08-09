import React from 'react';

export default function CharacterCard({
  id,
  name,
  image,
  status,
  species,
  location,
  origin,
}) {
  return (
    <div className='char-card bg-light px-4 py-3 rounded my-3'>
      <h1 className='char-card__name'>{name}</h1>
      <img src={image} alt='Imágen del personaje' className='char-card__img' />
      <div className='info my-3 fs-5'>
        <div className='char-card__status'>
          <span className='fw-bolder'>Estado:</span>
          {` ${status}`}
        </div>
        <div className='char-card__species'>
          <span className='fw-bolder'>Especie:</span>
          {` ${species}`}
        </div>
        <div className='char-card__location'>
          <span className='fw-bolder'>Ubicación:</span>
          {` ${location.name}`}
        </div>
        <div className='char-card__origin'>
          <span className='fw-bolder'>Lugar de origen:</span>
          {` ${origin.name}`}
        </div>
      </div>
    </div>
  );
}
