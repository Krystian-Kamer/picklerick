import {
  LoaderFunctionArgs,
  useLoaderData,
  Link,
  useNavigate,
} from 'react-router-dom';
import { customFetch } from '../utils';
import { Character } from '../types';
import { Title, PrevButton, NextButton } from '../components';
import { QueryClient } from '@tanstack/react-query';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../reduxHooks';
import { db } from '../firebaseConfig';
import { ref, update } from 'firebase/database';
import { handleDbCharacters } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const singeCharacterQuery = (id: string) => {
  return {
    queryKey: ['singleCharacter', id],
    queryFn: () => customFetch(`character/${id}`),
  };
};

export const loader =
  (queryClient: QueryClient) => async (data: LoaderFunctionArgs) => {
    const id = data.params.id as string;
    const characterResponse = await queryClient.ensureQueryData(
      singeCharacterQuery(id)
    );
    const character = characterResponse.data as Character;
    const paginationResponse = await customFetch('character');
    const totalCharacters: number = paginationResponse.data.info.count;
    return { character, totalCharacters };
  };

const SingleCharacter = () => {
  const navigate = useNavigate();
  const { character, totalCharacters } = useLoaderData() as {
    character: Character;
    totalCharacters: number;
  };

  const {
    username,
    characters: dbCharacters,
    firebaseKey,
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {
    created,
    gender,
    id,
    image,
    location,
    name,
    origin,
    species,
    status,
    type,
    episode,
  } = character;

  const isCharacterInDbCharacters: boolean = dbCharacters.includes(id);

  const toggleDbCharacter = async () => {
    const userRef = ref(db, `users/${firebaseKey}`);

    const updatedDbCharacters = isCharacterInDbCharacters
      ? dbCharacters.filter((dbID) => dbID !== id)
      : [...dbCharacters, id];

    dispatch(handleDbCharacters(updatedDbCharacters));

    toast.success(
      isCharacterInDbCharacters
        ? 'successfully removed character from your database'
        : 'successfully added character to your database'
    );

    await update(userRef, {
      characters: updatedDbCharacters,
    });
  };

  const navigateToLocOrEp = (id: string, path: 'location' | 'episode') => {
    const page = Number(id) > 20 ? Math.ceil(Number(id) / 20) : 1;
    const paramId = Number(id) % 20 === 0 ? 20 : Number(id) % 20;
    navigate(`/${path}s?page=${page}&${path}=${paramId}`);
  };

  return (
    <>
      <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400 '>
        <div className='max-w-7xl mx-auto mt-10 pl-10 sm:text-xl selection:bg-slate-800 selection:text-lime-200'>
          <Link className='font-semibold ' to='/'>
            Home
          </Link>
          <span className='tracking-tighter'>{`${'>>'}`}</span>
          <Link className='font-semibold' to='/characters'>
            Characters
          </Link>
        </div>

        <article className='flex flex-col max-w-7xl mx-auto justify-center py-16 selection:bg-slate-800 selection:text-lime-200'>
          <Title title={name} />
          <div className='bg-slate-900 flex flex-col md:flex-row p-10 sm:m-6 sm:rounded-3xl mt-5 text-white text-2xl'>
            <img
              src={image}
              alt={name}
              className='max-h-96 object-cover mb-8 md:mb-0'
            />
            <div className='px-4'>
              <p className='text-2xl uppercase font-bold tracking-widest border-b-2 leading-relaxed border-b-lime-200 inline'>
                {name}
              </p>
              <p className='text-lg py-2'>
                status:{' '}
                <span
                  className={
                    status === 'Alive'
                      ? 'text-2xl text-lime-200'
                      : status === 'Dead'
                      ? 'text-2xl text-red-200'
                      : 'capitalize text-2xl text-yellow-200 '
                  }
                >
                  {status}
                </span>
              </p>
              <p className='text-lg py-2'>
                species: <span className='text-2xl'>{species}</span>
              </p>
              <p className='text-lg py-2'>
                gender: <span className='text-2xl '>{gender}</span>
              </p>
              <p className='text-lg py-2'>
                created:{' '}
                <span className='text-2xl '>
                  {`${new Date(created).getFullYear()}-${(
                    new Date(created).getMonth() + 1
                  )
                    .toString()
                    .padStart(2, '0')}-${new Date(created)
                    .getDate()
                    .toString()
                    .padStart(2, '0')}`}
                </span>
              </p>
              {type && (
                <p className='text-lg py-2'>
                  type: <span className='text-2xl py-10'>{type}</span>
                </p>
              )}
              <p className='text-lg py-2'>
                origin:{' '}
                {origin.name === 'unknown' ? (
                  <span className='text-2xl capitalize'>{origin.name}</span>
                ) : (
                  <span
                    role='button'
                    tabIndex={0}
                    className='text-2xl break-all border-b-2 border-sky-200'
                    onClick={() =>
                      navigateToLocOrEp(origin.url.substring(41), 'location')
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        navigateToLocOrEp(origin.url.substring(41), 'location');
                      }
                    }}
                    aria-label={`Navigate to ${origin.name}`}
                  >
                    {' '}
                    {origin.name}
                  </span>
                )}
              </p>

              <p className='text-lg py-2'>
                location:{' '}
                {location.name === 'unknown' ? (
                  <span className='text-2xl capitalize'>{location.name}</span>
                ) : (
                  <span
                    role='button'
                    tabIndex={0}
                    aria-label={`Navigate to ${origin.name}`}
                    className='text-2xl break-all border-b-2 border-sky-200'
                    onClick={() =>
                      navigateToLocOrEp(location.url.substring(41), 'location')
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        navigateToLocOrEp(origin.url.substring(41), 'location');
                      }
                    }}
                  >
                    {' '}
                    {location.name}
                  </span>
                )}
              </p>
              <p className='text-lg py-2'>
                episode:{' '}
                {episode.map((singleEpisode) => {
                  const episodeId = singleEpisode.substring(40);
                  return (
                    <button
                      key={episodeId}
                      className='text-2xl px-1 underline'
                      onClick={() => navigateToLocOrEp(episodeId, 'episode')}
                    >
                      {' '}
                      {episodeId}
                    </button>
                  );
                })}
              </p>
            </div>
          </div>

          {username ? (
            <button
              type='button'
              className='flex items-center mx-auto mt-8 py-1 sm:py-2 px-4 bg-slate-900 text-lime-200 rounded-2xl hover:scale-105 duration-500 uppercase tracking-widest h-14 group '
              onClick={() => toggleDbCharacter()}
            >
              <span className='text-xl'>
                {isCharacterInDbCharacters
                  ? 'Remove from Your Library '
                  : 'Add To Your Library'}
              </span>
              {isCharacterInDbCharacters ? (
                <IoRemoveCircleOutline className='h-8 w-8 ml-2' />
              ) : (
                <IoAddCircleOutline className='h-8 w-8 ml-2' />
              )}
            </button>
          ) : (
            <p className='mt-8 px-8 mx-auto sm:text-lg italic'>
              You must be logged in to add character to you library
            </p>
          )}
        </article>
        <div className='flex items-center justify-center gap-x-10 mb-24'>
          {id > 1 && <PrevButton page={id} path='character' />}
          {id < totalCharacters && <NextButton page={id} path='character' />}
        </div>
      </div>
    </>
  );
};
export default SingleCharacter;
