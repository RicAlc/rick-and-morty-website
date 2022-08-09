import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import HomeBackBtns from '../components/HomeBackBtns';
import Loading from '../components/Loading';
import NavigationButtons from '../components/NavigationButtons';
import { getSearchResults } from '../functions/funciones';
import { setLinks } from '../services/navigationButtons';

export default function SearchResults() {
  const [searchList, setSearchList] = useState(null);
  const [notFound, setNotfound] = useState(false);
  const params = useParams();

  useEffect(() => {
    getSearchResults(
      params.searchterm,
      params.page,
      setSearchList,
      setNotfound
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setPageContent(data) {
    if (data) {
      const links = setLinks(
        params.page,
        '/api/characters/search/' + params.searchterm + '/',
        data
      );
      return (
        <>
          <h2 className='text-light'>
            {`${searchList.info.count} resultados para la busqueda ${params.searchterm}`}{' '}
          </h2>
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
      return notFound ? (
        <p>No encontramos resultados para tu busqueda, intenta con otro</p>
      ) : (
        <Loading />
      );
    }
  }

  return (
    <div className='search-results container'>
      <HomeBackBtns />
      <div className='container d-flex flex-column align-items-center justify-content-center'>
        {setPageContent(searchList)}
      </div>
    </div>
  );
}
