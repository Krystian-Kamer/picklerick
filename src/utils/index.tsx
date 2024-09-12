import axios from 'axios';

import { UserParams } from '../types';
import { toast } from 'react-toastify';

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

export const setLocOrEpParamToFirst = () => {
  const selectElement = document.querySelector('.select') as HTMLSelectElement;
  selectElement.value = '1';
};

export const scrollToTop = () => {
  window.scroll({
    top: 190,
    behavior: 'smooth',
  });
};

export const isUserAlreadyExist = (usersDatabase: UserParams[], username: string, email: string) => {
  return usersDatabase.some((user) => {
    if (user.username === username) {
      toast.warn('Username is taken, please use a different name');
      return true;
    }
    if (user.email === email) {
      toast.warn('Email is taken, please use a different email');
      return true;
    }
    return false;
  });
};
