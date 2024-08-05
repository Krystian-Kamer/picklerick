import { CharactersContainer, CharactersFilter, Title } from '../components';
import { customFetch } from '../utils';
import type { CharacterResponse, Pagination, Character } from '../types';
import { QueryClient, QueryKey } from '@tanstack/react-query';

const fetchedCharactersQuery = {
  queryKey: ['characters'] as QueryKey,
  queryFn: () => customFetch('/character'),
};

export const loader =
  (queryClient: QueryClient) => async (): Promise<CharacterResponse> => {
    const response = await queryClient.ensureQueryData(fetchedCharactersQuery);
    const { info, results } = response.data as {
      info: Pagination;
      results: Character[];
    };
    return { info, results };
  };

const Characters = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='checkout awesome characters' />
        <CharactersFilter />
        <CharactersContainer />
      </article>
    </div>
  );
};
export default Characters;
