import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function HomeBackBtns() {
  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-between align-items-ceneter p-2 mx-3'>
      <Button variant='success' onClick={() => navigate('/')}>
        Inicio
      </Button>
      <Button variant='success' onClick={() => navigate(-1)}>
        Volver
      </Button>
    </div>
  );
}
