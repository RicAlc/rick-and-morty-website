import React from 'react';

export default function NavigationButtons({ prev, next }) {
  const openLink = (link) => window.open(link, '_self');
  return (
    <div className='nav-btns'>
      {prev ? (
        <button onClick={() => openLink(prev)} className='nav-btns__button'>
          Anterior
        </button>
      ) : undefined}
      {next ? (
        <button onClick={() => openLink(next)} className='nav-btns__button'>
          Siguiente
        </button>
      ) : undefined}
    </div>
  );
}
