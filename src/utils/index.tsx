import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const customFetch = axios.create({
  baseURL: baseURL,
});

export const getRandomCharacters = () => {
  const ranges = [99, 100, 100, 100, 100, 100, 100, 100];
  const offsets = [1, 100, 200, 300, 400, 500, 600, 700];

  return ranges.map(
    (range, index) => Math.floor(Math.random() * range) + offsets[index]
  );
};
