import React from 'react';

export default function CharacterCard({ id, name, image, status, species }) {
  return (
    <div>
      <div className='id'>Personaje #{id}</div>
      <img src={image} alt='Imágen del personaje' />
      <div className='name'>{name}</div>
      <div className='status'>Estado: {status}</div>
      <div className='species'>Especie: {species}</div>
    </div>
  );
}
