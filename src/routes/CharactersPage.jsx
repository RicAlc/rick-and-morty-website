import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import HomeBackBtns from '../components/HomeBackBtns';
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
    const pageNum = Number(params.page);
    // Avanza - retrocede 5 paginas
    const plusFive =
      pageNum === characterList.info.pages
        ? null
        : pageNum > characterList.info.pages - 5
        ? `/api/characters/page/${characterList.info.pages}`
        : `/api/characters/page/${pageNum + 5}`;
    const lessFive =
      pageNum === 1
        ? null
        : pageNum < 5
        ? '/api/characters/page/1'
        : `/api/characters/page/${pageNum - 5}`;

    // Avanza - retrocede 1 pagina
    const nextPage = characterList.info.next
      ? `/api/characters/page/${pageNum + 1}`
      : null;
    const prevPage = characterList.info.prev
      ? `/api/characters/page/${pageNum - 1}`
      : null;
    return { prevPage, nextPage, plusFive, lessFive };
  };

  function setPageContent(data) {
    if (data) {
      const links = setLinks();
      return (
        <>
          <CharacterList characters={data.results} />
          <NavigationButtons
            prev={links.prevPage}
            next={links.nextPage}
            plusFive={links.plusFive}
            lessFive={links.lessFive}
          />
        </>
      );
    } else {
      return 'Cargando...';
    }
  }

  return (
    <div className='character-list'>
      <HomeBackBtns />
      {setPageContent(characterList)}
    </div>
  );
}
