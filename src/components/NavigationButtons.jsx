import React from 'react';

export default function NavigationButtons({ prev, next, plusFive, lessFive }) {
  const openLink = (link) => window.open(link, '_self');
  return (
    <div className='nav-btns'>
      {lessFive ? (
        <button onClick={() => openLink(lessFive)} className='nav-btns__button'>
          Backwards 5
        </button>
      ) : undefined}
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
      {plusFive ? (
        <button onClick={() => openLink(plusFive)} className='nav-btns__button'>
          Forward 5
        </button>
      ) : undefined}
    </div>
  );
}
