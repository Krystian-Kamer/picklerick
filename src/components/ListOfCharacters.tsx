import { useLoaderData, Link } from 'react-router-dom';
import { LocationResponse } from '../types';

const ListOfCharacters = () => {
  const response = useLoaderData() as LocationResponse;
  const { characters } = response;

  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20 gap-x-4 gap-y-8 justify-center mx-5'>
        {charactersArray.map((character) => {
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
        {charactersArray.length === 1 &&
          charactersArray[0].name === 'Rick Sanchez' && (
            <p className='text-2xl sm:text-2xl lg:text-3xl ml-8 mb-10 lg:w-[600px] font-semibold self-center'>
              Morty, if you see me here, that means <span className='underline'>this location is empty.</span> Im'here only to tell you about this.
            </p>
          )}
      </div>
    </>
  );
};
export default ListOfCharacters;
