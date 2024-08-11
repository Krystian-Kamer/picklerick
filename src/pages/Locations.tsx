import {
  LocationsFilter,
  Title,
  SingleLocation,
  ListOfCharacters,
} from '../components';
import { customFetch } from '../utils';
import { QueryClient, QueryKey } from '@tanstack/react-query';
import type { Pagination, Location } from '../types';
import { LoaderFunctionArgs, Params } from 'react-router-dom';

const fetchedLocationsQuery = (queryParams: Params) => {
  const { location, page } = queryParams;
  return {
    queryKey: ['locations', page ?? '1', location] as QueryKey,
    queryFn: () => customFetch(`/location?page=${page}`),
  };
};

export const loader =
  (queryClient: QueryClient) => async (data: LoaderFunctionArgs) => {
    const params = Object.fromEntries([
      ...new URL(data.request.url).searchParams.entries(),
    ]);
    const indexOfSingleLocation = params.location ? Number(params.location) : 0

    const response = await queryClient.ensureQueryData(
      fetchedLocationsQuery(params)
    );

    const { info, results } = response.data as {
      info: Pagination;
      results: Location[];
    };

    const singleLocation = results[indexOfSingleLocation];
    const charactersIdInSingleLocation = singleLocation.residents.map(
      (character) => Number(character.substring(42))
    );
    const fetchCharacters = async () => {
      const response = await customFetch(
        `/character/${charactersIdInSingleLocation}`
      );
      if (!response.data || !response.data[0]?.id) {
        const ifNoCharactersResponse = await customFetch(`/character/1`);
        return ifNoCharactersResponse.data;
      }
      return response.data;
    };
    const characters = await fetchCharacters();
    return { info, results, singleLocation, characters };
  };

const Locations = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='search & browse cool locations' />
        <LocationsFilter />
        <SingleLocation />
        <Title title='residents' />
        <ListOfCharacters />
      </article>
    </div>
  );
};

export default Locations;
