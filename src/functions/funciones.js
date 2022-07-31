import axios from 'axios';

const allCharacters = async (state) => {
  const request = await axios.get('https://rickandmortyapi.com/api/character');
  state(request.data.results);
};

const getCharacter = async (id, state) => {
  const request = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(request.data);
};
const getCharacterList = async (page, state) => {
  const request = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  state(request.data);
};

export { allCharacters, getCharacter, getCharacterList };
