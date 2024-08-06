import { Title, Info, Categories, RandomCharacters } from '../components';
import { Character } from '../types';
import { customFetch, getRandomCharacters } from '../utils';
import { QueryClient, QueryKey } from '@tanstack/react-query';

const fetchedRandomCharactersQuery = {
  queryKey: ['randomCharacters'] as QueryKey,
  queryFn: () => customFetch(`/character/${getRandomCharacters()}`),
  staleTime: 1000*60,
};

export const loader = (queryClient: QueryClient) => async () => {
  const response = await queryClient.ensureQueryData(
    fetchedRandomCharactersQuery
  );
  const characters: Character[] = response.data;
  return characters;
};

const Landing = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='about this project' />
        <Info />
        <Categories />
        <RandomCharacters />
      </article>
    </div>
  );
};
export default Landing;
