import React from 'react';
import { randomId } from '../services/randomId';
import LinkBtn from './LinkBtn';

export default function FeelingLucky() {
  return (
    <div className='feeling-lucky'>
      <LinkBtn
        link='/api/characters/page/1'
        text='Ver personajes'
        className='feeling-lucky__lists-btn'
      />
      <LinkBtn
        link={`/api/characters/${randomId()}`}
        text='Aleatorio'
        className='feeling-lucky__random-btn'
      />
    </div>
  );
}
