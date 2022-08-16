import React from 'react';
import { Button } from 'react-bootstrap';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export default function NavigationButtons({ prev, next, plusFive, lessFive }) {
  const navigate = useNavigate();
  const openLink = (link) => {
    navigate(link, { replace: true });
  };
  return (
    <div className='my-2'>
      {lessFive ? (
        <Button className='mx-1 py-1 px-3' onClick={() => openLink(lessFive)}>
          <GrPrevious></GrPrevious>
        </Button>
      ) : undefined}
      {prev ? (
        <Button className='mx-1 py-1 px-2' onClick={() => openLink(prev)}>
          ANT
        </Button>
      ) : undefined}
      {next ? (
        <Button className='mx-1 py-1 px-3' onClick={() => openLink(next)}>
          SIG
        </Button>
      ) : undefined}
      {plusFive ? (
        <Button className='mx-1 py-1 px-3' onClick={() => openLink(plusFive)}>
          <GrNext></GrNext>
        </Button>
      ) : undefined}
    </div>
  );
}
