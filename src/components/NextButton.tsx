import { Link, useLoaderData } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr';
import { LocationOrEpisodeResponse } from '../types';

type Params = {
  page: number;
  path: 'character' | 'location' | 'episode';
};

const NextButton = ({ page, path }: Params) => {
  const data = useLoaderData() as LocationOrEpisodeResponse;
  const itemId = data.singleLocation?.id ?? data.singleEpisode?.id ?? 1;
  const paramId = Number(itemId) % 20 === 0 ? 20 : Number(itemId) % 20;
  const lastItem = data.info?.count;
console.log(lastItem);
  return (
    <Link
      to={
        path === 'character'
          ? `/${path}s/${page - 1}`
          : `/${path}s?${path}=${paramId === 20 ? 1 : paramId + 1}&page=${
              paramId === 20 ? page + 1 : page
            }`
      }
      className='flex items-center py-1 sm:py-2 px-4 w-fit  sm:gap-x-1 bg-slate-900 text-lime-200 rounded-3xl hover:scale-105 duration-500 uppercase'
    >
      <span className='text-xl tracking-wider'>next</span>
      <GrFormNext className='w-14 h-14 lg:w-12 lg:h-12' />
    </Link>
  );
};
export default NextButton;