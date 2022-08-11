import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RiHome6Line } from 'react-icons/ri';

export default function HomeBtn() {
  const navigate = useNavigate();
  return (
    <div className='container d-flex justify-content-end align-items-center'>
      <Button
        className='my-3 me-5'
        variant='success'
        onClick={() => navigate('/', { replace: true })}
      >
        <RiHome6Line size={'1.8rem'} />
      </Button>
    </div>
  );
}
