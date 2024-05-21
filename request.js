const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const requestPokemon = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch {
    console.error(`${error}`);
  }
};

requestPokemon();
