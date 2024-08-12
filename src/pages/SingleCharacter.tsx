import { LoaderFunctionArgs, useLoaderData, Link } from 'react-router-dom';
import { customFetch } from '../utils';
import { Character } from '../types';
import { Title } from '../components';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const loader = async (data: LoaderFunctionArgs) => {
  const id = data.params.id as string;
  const characterResponse = await customFetch(`character/${id}`);
  const character = characterResponse.data as Character;
  const paginationResponse = await customFetch('character');
  const totalCharacters: number = paginationResponse.data.info.count;
  return { character, totalCharacters };
};

const SingleCharacter = () => {
  const { character, totalCharacters } = useLoaderData() as {
    character: Character;
    totalCharacters: number;
  };

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

  console.log(location, origin, episode);

  return (
    <>
      <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
        <div className='max-w-7xl mx-auto mt-10 pl-10 sm:text-xl'>
          <Link className='font-semibold' to='/'>
            Home
          </Link>
          <span className='tracking-tighter'>{`${'>>'}`}</span>
          <Link className='font-semibold' to='/characters'>
            Characters
          </Link>
        </div>

        <article className='flex flex-col max-w-7xl mx-auto justify-center py-16'>
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
                created: <span className='text-2xl '>{created}</span>
              </p>
              {type && (
                <p className='text-lg py-2'>
                  type: <span className='text-2xl py-10'>{type}</span>
                </p>
              )}
              <p className='text-lg py-2'>
                origin: <span className='text-2xl py-10'>WILL BE APPLIED</span>
              </p>
              <p className='text-lg py-2'>
                episode: <span className='text-2xl'>WILL BE APPLIED</span>
              </p>
            </div>
          </div>
        </article>
        <div className='flex items-center justify-center gap-10 mb-20'>
          {id > 1 && (
            <Link
              to={`/characters/${id - 1}`}
              className='flex items-center py-2 px-4 lg:px-4 w-fit  sm:gap-x-1 bg-slate-900 text-lime-200 rounded-3xl hover:scale-105 duration-500 uppercase'
            >
              <GrFormPrevious className='w-14 h-14 lg:w-12 lg:h-12' />
              <span className='text-xl tracking-wider'>prev</span>
            </Link>
          )}
          {id < totalCharacters && (
            <Link
              to={`/characters/${id + 1}`}
              className='flex items-center py-2 px-4  lg:px-4 w-fit sm:gap-x-1 bg-slate-900 text-lime-200 rounded-3xl hover:scale-105 duration-500 uppercase'
            >
              <span className='text-xl tracking-wider'>next</span>
              <GrFormNext className='w-14 h-14 lg:w-12 lg:h-12' />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default SingleCharacter;
