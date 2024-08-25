import { Link, useLoaderData } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr';
import { LocationOrEpisodeResponse } from '../types';
type Params = {
  page: number;
  path: 'character' | 'location' | 'episode';
};

const PrevButton = ({ page, path }: Params) => {
  const data = useLoaderData() as LocationOrEpisodeResponse;
  const itemId = data.singleLocation?.id ?? data.singleEpisode?.id;
  const paramId = Number(itemId) % 20 === 0 ? 20 : Number(itemId) % 20;

  return (
    <>
      {itemId !== 1 && (
        <Link
          to={
            path === 'character'
              ? `/${path}s/${page - 1}`
              : `/${path}s?${path}=${paramId === 1 ? 20 : paramId - 1}&page=${
                  paramId === 1 ? page - 1 : page
                }`
          }
          className='flex items-center py-1 sm:py-2 px-4 w-fit sm:gap-x-1 bg-slate-900 text-lime-200 rounded-3xl hover:scale-105 duration-500 uppercase'
        >
          <GrFormPrevious className='w-14 h-14 lg:w-12 lg:h-12' />
          <span className='text-xl tracking-wider'>prev</span>
        </Link>
      )}
    </>
  );
};
export default PrevButton;
