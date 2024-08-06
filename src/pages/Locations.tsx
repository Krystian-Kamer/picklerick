import { LocationsFilter, Title } from '../components';
import { customFetch } from '../utils';
import { QueryClient, QueryKey } from '@tanstack/react-query';
import type { Pagination, Location } from '../types';
import SingleLocation from './SingleLocation';
const fetchedLocationsQuery = {
  queryKey: ['locations'] as QueryKey,
  queryFn: () => customFetch('/location'),
};

export const loader = (queryClient: QueryClient) => async () => {
  const response = await queryClient.ensureQueryData(fetchedLocationsQuery);
  const { info, results } = response.data as {
    info: Pagination;
    results: Location[];
  };
  return { info, results };
};

const Locations = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='search & browse cool locations' />
        <LocationsFilter />
        <SingleLocation />
      </article>
    </div>
  );
};
export default Locations;
