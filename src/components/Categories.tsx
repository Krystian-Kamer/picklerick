import characters from '../assets/character.png';
import episodes from '../assets/episode.jpeg';
import locations from '../assets/location.jpeg';
import { Link } from 'react-router-dom';
import type { Category } from '../types';

const images: Category[] = [
  { name: 'characters', path: '/characters', img: characters },
  { name: 'locations', path: '/locations', img: locations },
  { name: 'episodes', path: '/episodes', img: episodes },
];

const Categories = () => {
  return (
    <div className='flex flex-col items-center bg-slate-900 text-white rounded-3xl mb-10 mx-4'>
      <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold py-8 px-4 selection:bg-slate-800 selection:text-lime-200'>
        You can explore this page by choosing one of 3 category:
      </h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
        {images.map((image) => {
          const { name, path, img } = image;
          return (
            <Link
              key={name}
              className='flex border-2 m-5 border-lime-200 relative rounded-2xl overflow-hidden group'
              to={path}
            >
              <img
                src={img}
                alt={name}
                className='opacity-90 group-hover:opacity-100 group-hover:scale-110 duration-500'
              />
              <h3 className='bg-slate-900 py-2 absolute right-0 bottom-0 w-full border-t-2 font-semibold border-t-lime-200 capitalize text-center group-hover:text-lime-200 duration-300'>
                {name}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
