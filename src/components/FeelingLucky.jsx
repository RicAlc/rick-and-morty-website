import React from 'react';
import { randomId } from '../services/randomId';
import LinkBtn from './LinkBtn';

export default function FeelingLucky() {
  return (
    <div className='buttons'>
      <LinkBtn
        link='/api/characters/page/1'
        text='Todos los personajes'
        newTab={false}
        className='buttons__lists-btn'
      />
      <LinkBtn
        link={`/api/characters/${randomId()}`}
        text='random btn'
        newTab={false}
        className='buttons__random-btn'
      />
    </div>
  );
}
