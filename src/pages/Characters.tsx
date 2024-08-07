import { CharactersContainer, CharactersFilter, Title } from '../components';
import { customFetch } from '../utils';
import type { CharacterResponse, Pagination, Character } from '../types';
import { QueryClient, QueryKey } from '@tanstack/react-query';
import { LoaderFunctionArgs, Params } from 'react-router-dom';

const fetchedCharactersQuery = (queryParams: Params) => {
  const { name, gender, status } = queryParams;
  return {
    queryKey: [
      'characters',
      name ?? '',
      gender ?? '',
      status ?? '',
    ] as QueryKey,
    queryFn: () => customFetch('/character', { params: queryParams }),
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async (data: LoaderFunctionArgs): Promise<CharacterResponse> => {
    const params = Object.fromEntries([
      ...new URL(data.request.url).searchParams.entries(),
    ]) as Params;

    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(
        ([key, value]) => key === 'name' || value !== 'all'
      )
    );
    console.log(filteredParams);
    const response = await queryClient.ensureQueryData(
      fetchedCharactersQuery(filteredParams)
    );
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
