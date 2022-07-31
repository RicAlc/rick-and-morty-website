import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter } from '../functions/funciones';
import CharacterCard from '../components/CharacterCard';
import HomeBackBtns from '../components/HomeBackBtns';
import Loading from '../components/Loading';

export default function Character() {
  const [characterInfo, setCharacterInfo] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const goHome = () => navigate('/');

  useEffect(() => {
    getCharacter(Number(params.id), setCharacterInfo, goHome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <HomeBackBtns />
      <h1 className='caracter'>Personajes</h1>
      {characterInfo !== null ? (
        <CharacterCard key={characterInfo.id} {...characterInfo} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
