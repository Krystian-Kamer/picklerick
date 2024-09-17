import { Link, useLoaderData } from 'react-router-dom';
import { GrFormNext } from 'react-icons/gr';
import { LoaderDataResponse } from '../types';
import { scrollToTop } from '../utils';

type Params = {
  page: number;
  path: 'character' | 'location' | 'episode';
};

const NextButton = ({ page, path }: Params) => {
  const response = useLoaderData() as LoaderDataResponse;
  const itemId =
    'singleLocation' in response
      ? response.singleLocation.id
      : 'singleEpisode' in response
      ? response.singleEpisode.id
      : null;
  const paramId = Number(itemId) % 20 === 0 ? 20 : Number(itemId) % 20;
  const lastItem = 'info' in response ? response.info.count : undefined;

  return (
    <>
      {itemId !== lastItem && (
        <Link
          to={
            path === 'character'
              ? `/${path}s/${page + 1}`
              : `/${path}s?${path}=${paramId === 20 ? 1 : paramId + 1}&page=${
                  paramId === 20 ? page + 1 : page
                }`
          }
          className='flex items-center py-1 sm:py-2 px-4 w-fit sm:gap-x-1 bg-slate-900 text-lime-200 rounded-3xl hover:scale-105 duration-500 uppercase'
          onClick={scrollToTop}
        >
          <span className='text-xl tracking-wider'>next</span>
          <GrFormNext className='w-14 h-14 lg:w-12 lg:h-12' />
        </Link>
      )}
    </>
  );
};

export default NextButton;
