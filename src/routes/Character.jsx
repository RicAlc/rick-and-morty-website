import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../functions/funciones';
import CharacterCard from '../components/CharacterCard';

export default function Character() {
  const [characterInfo, setCharacterInfo] = useState(null);
  const params = useParams();
  useEffect(() => {
    getCharacter(Number(params.id), setCharacterInfo);
  }, [params.id]);
  return (
    <div>
      <h1 className='caracter'>Personajes</h1>
      {characterInfo !== null ? (
        <CharacterCard key={characterInfo.id} {...characterInfo} />
      ) : (
        'No hay imágenes por mostrar'
      )}
    </div>
  );
}
