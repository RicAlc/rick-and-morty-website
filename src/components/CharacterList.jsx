import React from 'react';
import CharacterPrevCard from './CharacterPrevCard';

export default function CharacterList({ characters }) {
  const characterTable = characters.map((item) => {
    return (
      <CharacterPrevCard
        className='row'
        key={item.id}
        name={item.name}
        image={item.image}
        link={`/api/characters/${item.id}`}
      />
    );
  });
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {characterTable}
    </div>
  );
}
