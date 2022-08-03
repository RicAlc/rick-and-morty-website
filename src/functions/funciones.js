import axios from 'axios';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCharacter = async (id, state, redirect) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    state(response.data);
  } catch (error) {
    console.error(error);
    await delay(1000);
    redirect();
  }
};
const getSearchResults = async (name, state, redirect) => {
  try {
    console.log(name);
    const searchTerm = name.replace(/\s/g, '%20');
    console.log(searchTerm);
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    );
    state(response.data);
  } catch (error) {
    console.error(error);
    await delay(1000);
    redirect();
  }
};
const getCharacterList = async (page, state, redirect) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    state(response.data);
  } catch (error) {
    console.error(error);
    await delay(1000);
    redirect();
  }
};

export { getCharacter, getCharacterList, getSearchResults };
