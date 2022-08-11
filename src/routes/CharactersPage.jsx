import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import HomeBtn from '../components/HomBtn';
import Loading from '../components/Loading';
import NavigationButtons from '../components/NavigationButtons';
import { getCharacterList } from '../functions/funciones';
import { setLinks } from '../services/navigationButtons';

export default function CharactersPage() {
  const [characterList, setCharacterList] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const page = Number(params.page);
  useEffect(() => {
    const goHome = () => navigate('/');
    getCharacterList(Number(page), setCharacterList, goHome);
  }, [page, navigate]);

  function setPageContent(data) {
    if (data) {
      const links = setLinks(
        params.page,
        '/api/characters/page/',
        characterList
      );
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
      return <Loading />;
    }
  }

  return (
    <div className='character-list container'>
      <HomeBtn />
      <div className='container d-flex flex-column align-items-center justify-content-center'>
        {setPageContent(characterList)}
      </div>
    </div>
  );
}
