import { Link, useLoaderData } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { CharacterParams } from '../types';
import { customFetch } from '../utils';
import { Loading, Title } from './../components/index';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const CharactersContainer = () => {
  const params = useLoaderData() as CharacterParams;
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: [
        'characters',
        params.name ?? '',
        params.gender ?? '',
        params.status ?? '',
      ],
      queryFn: async ({ pageParam }) => {
        const response = await customFetch('/character', {
          params: { ...params, page: pageParam },
        });
        return response;
      },
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.data?.info?.next
          ? new URL(lastPage.data.info.next).searchParams.get('page')
          : null;
        return nextPage ? Number(nextPage) : undefined;
      },
      initialPageParam: 1,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') return <Loading />;
  if (status === 'error')
    return (
      <h2 className='min-h-96 flex justify-center text-2xl font-bold mt-4 mx-6'>
        It appears that the character you are looking for does not exist.
      </h2>
    );
  console.log(data);
  const characters = data.pages.flatMap((page) => page.data.results);

  return (
    <div>
      <Title title='Results' />
      <div className='grid sm:grid-cols-2'>
        {characters.map((character) => {
          const { id, image, name, species, status, location } = character;
          return (
            <div
              key={id}
              className='rounded-3xl overflow-hidden flex flex-col lg:flex-row border-4 border-slate-900 bg-slate-900 text-white m-10 relative group'
            >
              <Link
                to={`/characters/${id}`}
                className='bg-slate-50 lg:max-w-64 overflow-hidden'
              >
                <img
                  src={image}
                  alt={name}
                  className='h-full w-full object-cover 
                  group-hover:scale-105 duration-700 '
                />
              </Link>
              <div className='p-4 relative selection:bg-slate-800 selection:text-lime-200'>
                <p className='text-2xl uppercase font-bold tracking-widest border-b-2 leading-relaxed border-b-lime-200 inline '>
                  {name}
                </p>
                <p className='text-lg '>
                  status:{' '}
                  <span
                    className={
                      status === 'Alive'
                        ? 'text-2xl text-lime-200'
                        : status === 'Dead'
                        ? 'text-2xl text-red-200'
                        : 'capitalize text-2xl text-yellow-200'
                    }
                  >
                    {status}
                  </span>
                </p>
                <p className='text-lg '>
                  species: <span className='text-2xl'>{species}</span>
                </p>
                <p className='text-lg mb-6 '>
                  location:{' '}
                  <span className='text-2xl py-10'>{location.name}</span>
                </p>
              </div>
              <Link
                to={`/characters/${id}`}
                className='block absolute bottom-0 right-0 bg-lime-200 text-slate-900 px-3 py-2 rounded-tl-3xl hover:px-8 hover:bg-cyan-100 duration-500'
              >
                <span className='uppercase font-bold'>more info</span>
              </Link>
            </div>
          );
        })}
      </div>
      {hasNextPage ? <div ref={ref}></div> : <Title title='end of results' />}
      {isFetchingNextPage && <Loading />}
    </div>
  );
};

export default CharactersContainer;
