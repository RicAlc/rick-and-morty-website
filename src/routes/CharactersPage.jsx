import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import NavigationButtons from '../components/NavigationButtons';
import { getCharacterList } from '../functions/funciones';

export default function CharactersPage() {
  const [characterList, setCharacterList] = useState(null);
  const params = useParams();
  useEffect(() => {
    getCharacterList(Number(params.page), setCharacterList);
  }, [params.page]);

  // Comprobacion de paginas sig y ant y asignacion de direccion.
  const setLinks = () => {
    const nextPage = characterList.info.next
      ? `/api/characters/page/${Number(params.page) + 1}`
      : null;
    const prevPage = characterList.info.prev
      ? `/api/characters/page/${Number(params.page) - 1}`
      : null;
    return { prevPage, nextPage };
  };

  function setPageContent(data) {
    if (data) {
      const links = setLinks();
      return (
        <>
          <CharacterList characters={data.results} />
          <NavigationButtons prev={links.prevPage} next={links.nextPage} />
        </>
      );
    } else {
      return null;
    }
  }

  return <div className='character-list'>{setPageContent(characterList)}</div>;
}
