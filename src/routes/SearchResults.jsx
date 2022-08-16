import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import HomeBtn from '../components/HomBtn';
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
  }, [params.page, params.searchterm]);

  function setPageContent(data) {
    if (data) {
      const links = setLinks(
        params.page,
        '/api/characters/search/' + params.searchterm + '/',
        data
      );
      return (
        <>
          <h3 className='text-light text-center my-1'>
            {`${searchList.info.count} resultados para la busqueda ${params.searchterm}`}{' '}
          </h3>
          <NavigationButtons
            prev={links.prevPage}
            next={links.nextPage}
            plusFive={links.plusFive}
            lessFive={links.lessFive}
          />
          <CharacterList characters={data.results} />
        </>
      );
    } else {
      return notFound ? (
        <h2 className='text-light text-center'>
          No encontramos resultados para tu busqueda, intenta con otro
        </h2>
      ) : (
        <Loading />
      );
    }
  }

  return (
    <div className='search-results container'>
      <HomeBtn />
      <div className='container d-flex flex-column align-items-center justify-content-center'>
        {setPageContent(searchList)}
      </div>
    </div>
  );
}
