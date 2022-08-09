import React from 'react';
import { Button } from 'react-bootstrap';
import { GrFormNext, GrNext, GrFormPrevious, GrPrevious } from 'react-icons/gr';

export default function NavigationButtons({ prev, next, plusFive, lessFive }) {
  const openLink = (link) => window.open(link, '_self');
  return (
    <div className='my-3'>
      {lessFive ? (
        <Button className='mx-1 py-1 px-2' onClick={() => openLink(lessFive)}>
          <GrPrevious></GrPrevious>
        </Button>
      ) : undefined}
      {prev ? (
        <Button className='mx-1 py-1 px-2' onClick={() => openLink(prev)}>
          <GrFormPrevious></GrFormPrevious>
        </Button>
      ) : undefined}
      {next ? (
        <Button className='mx-1 py-1 px-2' onClick={() => openLink(next)}>
          <GrFormNext></GrFormNext>
        </Button>
      ) : undefined}
      {plusFive ? (
        <Button className='mx-1 py-1 px-2' onClick={() => openLink(plusFive)}>
          <GrNext></GrNext>
        </Button>
      ) : undefined}
    </div>
  );
}
