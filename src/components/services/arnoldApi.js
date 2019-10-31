export function getCharacters() {
  const url = 'https://hey-arnold-api.herokuapp.com/api/v1/characters';
  return fetch(url)
    .then(characterList => characterList.json());
}

export function getGifs() {
  const url = 'https://hey-arnold-api.herokuapp.com/api/v1/gifs';
  return fetch(url)
    .then(gifs => gifs.json());
}
