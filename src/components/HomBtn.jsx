import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiHome6Line } from 'react-icons/ri';

export default function HomeBtn() {
  const navigate = useNavigate();
  return (
    <div className='home container d-flex justify-content-start align-items-center'>
      <div
        className='home__btn my-3 d-flex align-items-center'
        variant='success'
        onClick={() => navigate('/', { replace: true })}
      >
        <RiHome6Line size={40} className='mx-2'></RiHome6Line>
        <h2 className='m-0'>INICIO</h2>
      </div>
    </div>
  );
}
