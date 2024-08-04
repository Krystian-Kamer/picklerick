import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const customFetch = axios.create({
  baseURL: baseURL,
});
