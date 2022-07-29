import React, { useEffect, useState } from 'react';
import { allCharacters } from '../functions/funciones';

export default function Landing() {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    allCharacters(setCharacter);
  }, []);

  return (
    <div>
      <h1 className='title'>Página de inicio</h1>
      {character !== null
        ? character.map((item) => {
            return (
              <li>
                <a href={`/api/characters/${item.id}`} key={item.id}>
                  {item.name}
                </a>
              </li>
            );
          })
        : 'no hay personajes'}
    </div>
  );
}
