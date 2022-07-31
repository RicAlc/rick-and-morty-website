import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeBackBtns() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <button onClick={() => navigate('/')}>Inicio</button>
    </div>
  );
}
