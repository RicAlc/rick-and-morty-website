import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import NavigationButtons from '../components/NavigationButtons';
import { getCharacterList } from '../functions/funciones';

export default function CharactersPage() {
  const [characterList, setCharacterList] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  useEffect(() => {
    getCharacterList(Number(params.page), setCharacterList, goHome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      return 'Cargando...';
    }
  }

  return <div className='character-list'>{setPageContent(characterList)}</div>;
}
