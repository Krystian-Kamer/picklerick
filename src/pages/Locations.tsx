import {
  LocationsFilter,
  Title,
  SingleLocation,
  ListOfCharacters,
} from '../components';
import { customFetch } from '../utils';
import { QueryClient, QueryKey } from '@tanstack/react-query';
import type { Pagination, Location } from '../types';

const fetchedLocationsQuery = {
  queryKey: ['locations'] as QueryKey,
  queryFn: () => customFetch('/location/?page=2'),
};

export const loader = (queryClient: QueryClient) => async () => {
  const response = await queryClient.ensureQueryData(fetchedLocationsQuery);
  const { info, results } = response.data as {
    info: Pagination;
    results: Location[];
  };
  const singleLocation = results[0];
  // here I must check if characters are existing and if not I must do something
  const charactersIdInSingleLocation = singleLocation.residents.map(
    (character) => Number(character.substring(42))
  );

  const fetchCharacters = async () => {
    const response = await customFetch(
      `/character/${charactersIdInSingleLocation}`
    );
    if (!response.data || !response.data[0]?.id) {
      const fallbackResponse = await customFetch(`/character/1`);
      return fallbackResponse.data;
    }
    return response.data
  };
  const characters = await fetchCharacters();
  console.log(characters);

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
