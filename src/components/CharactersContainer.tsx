import { useLoaderData, Link } from 'react-router-dom';
import { CharacterResponse } from '../types';

const CharactersContainer = () => {
  const characters = (useLoaderData() as CharacterResponse).results;

  return (
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
              className=' bg-slate-50 lg:max-w-64 overflow-hidden'
            >
              <img
                src={image}
                alt={name}
                className='h-full w-full  object-cover 
                group-hover:scale-105 duration-700'
              />
            </Link>
            <div className='p-4 relative'>
              <p className='text-2xl uppercase font-bold tracking-widest border-b-2 leading-relaxed border-b-lime-200 inline selection:text-lime-200'>
                {name}
              </p>
              <p className='text-lg selection:text-lime-200'>
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
              <p className='text-lg selection:text-lime-200'>
                species: <span className='text-2xl'>{species}</span>
              </p>
              <p className='text-lg mb-6 selection:text-lime-200'>
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
  );
};
export default CharactersContainer;
