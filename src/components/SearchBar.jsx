import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [input, setInput] = useState(null);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    input === null || input.trim().length === 0
      ? window.alert('Coloca un nombre valido en el buscador')
      : navigate(`/api/characters/search/${input}/1`, '_self', {
          replace: true,
        });
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
