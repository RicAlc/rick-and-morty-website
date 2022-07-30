import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import { getCharacterList } from '../functions/funciones';

export default function CharactersPage() {
  const [characterList, setCharacterList] = useState(null);
  const params = useParams();

  useEffect(() => {
    getCharacterList(Number(params.page), setCharacterList);
  }, [params.page]);
  return (
    <div className='character-list'>
      {characterList === null ? (
        'no data'
      ) : (
        <CharacterList characters={characterList.results} />
      )}
      <button>Siguiente</button>
    </div>
  );
}
