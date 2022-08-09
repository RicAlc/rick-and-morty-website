import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export default function SearchBar() {
  const [input, setInput] = useState(null);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(input);
    input === null || input.trim().length === 0
      ? window.alert('Coloca un nombre valido en el buscador')
      : window.open(`/api/characters/search/${input}/1`, '_self');
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className='searchChar' autoComplete='off'>
      <fieldset>
        <input
          type='text'
          name='buscar'
          id='buscar'
          placeholder='Rick Sanchez'
          className='searchChar__input'
          onChange={handleChange}
        />
        <button onClick={handleSearch} className='searchChar__btn'>
          <BiSearchAlt size={20} />
        </button>
      </fieldset>
    </form>
  );
}
