import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import Loading from '../components/Loading';
import { getSearchResults } from '../functions/funciones';

export default function SearchResults() {
  const [searchList, setSearchList] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  useEffect(() => {
    getSearchResults(params.searchterm, setSearchList, goHome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Resultados para la busqueda : {params.searchterm}
      {searchList ? (
        <CharacterList characters={searchList.results} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
