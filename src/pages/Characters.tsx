import { CharactersContainer, CharactersFilter, Title } from '../components';
import { customFetch } from '../utils';
import type { CharacterResponse, Pagination, Character } from '../types';
import { QueryClient, QueryKey } from '@tanstack/react-query';
import { LoaderFunctionArgs, Params } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



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
    const getResponseData = async (params: Params) => {
      const response = await queryClient.ensureQueryData(
        fetchedCharactersQuery(params)
      );
      return response.data as { info: Pagination; results: Character[] };
    };

    try {
      const params = Object.fromEntries([
        ...new URL(data.request.url).searchParams.entries(),
      ]) as Params;
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(
          ([key, value]) => key === 'name' || value !== 'all'
        )
      );
      return await getResponseData(filteredParams);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warning('Morty find someone who exist in my database');
        return await getResponseData({ name: '' });
      } else {
        toast.warning('Morty find someone who exist in my database');
        return await getResponseData({ name: '' });
      }
    }
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
