import {
  EpisodesFilter,
  Title,
  ListOfCharacters,
  SingleEpisode,
} from '../components';
import { customFetch } from '../utils';
import type { Pagination, Episode } from '../types';
import { LoaderFunctionArgs, Params } from 'react-router-dom';
import { QueryClient, QueryKey } from '@tanstack/react-query';

const fetchedEpisodesQuery = (queryParams: Params) => {
  const { episode, page } = queryParams;
  return {
    queryKey: ['episodes', page ?? '1', episode] as QueryKey,
    queryFn: () => customFetch(`/episode?page=${page}`),
  };
};

export const loader =
  (queryClient: QueryClient) => async (data: LoaderFunctionArgs) => {
    const params = Object.fromEntries([
      ...new URL(data.request.url).searchParams.entries(),
    ]);

    const indexOfSingleEpisode =
      params.episode && params.page ? Number(params.episode) : 1;

    const response = await queryClient.ensureQueryData(
      fetchedEpisodesQuery({
        ...params,
        episode: String(indexOfSingleEpisode),
      })
    );

    const { info, results } = response.data as {
      info: Pagination;
      results: Episode[];
    };

    const singleEpisode = results[indexOfSingleEpisode -1];

    const charactersIdInSingleEpisode = singleEpisode.characters.map(
      (character) => Number(character.substring(42))
    );
    const fetchCharacters = async () => {
      const response = await customFetch(
        `/character/${charactersIdInSingleEpisode}`
      );
      if (!response.data || !response.data[0]?.id) {
        const ifNoCharactersResponse = await customFetch(`/character/1`);
        return ifNoCharactersResponse.data;
      }
      return response.data;
    };
    const characters = await fetchCharacters();

    return { info, results, singleEpisode, characters };
  };

const Episodes = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='search & browse cool locations' />
        <EpisodesFilter />
        <SingleEpisode />
        <Title title='characters' />
        <ListOfCharacters />
      </article>
    </div>
  );
};
export default Episodes;
