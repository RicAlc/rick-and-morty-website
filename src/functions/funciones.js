import axios from 'axios';

const allCharacters = async (state) => {
  const request = await axios.get('https://rickandmortyapi.com/api/character');
  state(request.data.results);
};

const getCharacter = async (id, state) => {
  const request = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  console.log(request.data);
  state(request.data);
};
const getCharacterList = async (page, state) => {
  const request = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  console.log(request.data);
  state(request.data);
};

export { allCharacters, getCharacter, getCharacterList };
