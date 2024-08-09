import {
  Title,
  Info,
  Categories,
  ListOfCharacters,
} from '../components';
import { Character } from '../types';
import { customFetch, getRandomCharacters } from '../utils';

export const loader = async () => {
  const response = await customFetch(`/character/${getRandomCharacters()}`);
  const characters: Character[] = response.data;
  return { characters };
};

const Landing = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='about this project' />
        <Info />
        <Categories />
        <Title title='random characters' />
        <ListOfCharacters />
      </article>
    </div>
  );
};
export default Landing;
