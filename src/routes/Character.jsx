import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacter } from '../functions/funciones';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import HomeBtn from '../components/HomBtn';

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
    <div className='character-info container'>
      <HomeBtn />
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <h2 className='text-light'>Personaje #{params.id}</h2>
        {characterInfo !== null ? (
          <CharacterCard key={characterInfo.id} {...characterInfo} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
