import { useLoaderData, Link } from 'react-router-dom';
import Title from './Title';
import { Character } from '../types';

const RandomCharacters = () => {
  const characters = useLoaderData() as Character[];

  return (
    <>
      <Title title='random characters' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20 gap-x-4 gap-y-8 justify-center mx-5'>
        {characters.map((character) => {
          const { id, name, image } = character;
          return (
            <Link
              key={id}
              to={`/characters/${id}`}
              className='border-4 border-slate-900 rounded-3xl overflow-hidden relative group'
            >
              <img
                src={image}
                alt={name}
                className='scale-110 group-hover:scale-100 duration-500 w-full'
              />
              <p
                className='absolute bottom-0 bg-slate-900 border-t-4 border-slate-900 group-hover:bg-lime-200
              group-hover:text-slate-900
              text-center text-xl w-full text-lime-200 py-1 capitalize duration-700'
              >
                {name}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default RandomCharacters;
