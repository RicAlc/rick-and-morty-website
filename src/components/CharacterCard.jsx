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
    <div className='char-card'>
      <div className='char-card__id'>Personaje #{id}</div>
      <img src={image} alt='Imágen del personaje' className='char-card__img' />
      <div className='char-card__name'>{name}</div>
      <div className='char-card__status'>Estado: {status}</div>
      <div className='char-card__species'>Especie: {species}</div>
      <div className='char-card__location'>Ubicación: {location.name}</div>
      <div className='char-card__origin'>Lugar de origen: {origin.name}</div>
    </div>
  );
}
