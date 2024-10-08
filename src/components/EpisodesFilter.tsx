import { useLoaderData, Form } from 'react-router-dom';
import { EpisodeResponse, Pagination, Episode } from '../types';
import { FormSelect, PageButton } from '../components/index';
import { useAppSelector } from '../reduxHooks';
const EpisodesFilter = () => {
  const { username } = useAppSelector((state) => state.user);
  const episodes = (useLoaderData() as EpisodeResponse).results as Episode[];
  const pagination = (useLoaderData() as EpisodeResponse).info as Pagination;
  const currentPage = pagination.prev
    ? Number(pagination.prev.substring(45)) + 1
    : 1;

  return (
    <Form className='flex flex-col items-center bg-slate-900 text-white rounded-3xl p-4 sm:p-0 mb-10 mx-4 '>
      <div>
        <h2 className='text-2xl lg:text-4xl font-semibold py-8 sm:px-4 selection:bg-slate-800 selection:text-lime-200'>
          Find your episode,{' '}
          <span className='capitalize'>{username || 'morty'}</span>
        </h2>
        <div className='flex flex-col lg:flex-row gap-x-5 justify-center items-center gap-y-5 mb-10'>
          {pagination.prev !== null && (
            <PageButton currentPage={currentPage} action='prev' />
          )}
          <FormSelect data={episodes} name='episode' />
          <button
            type='submit'
            name='page'
            value={currentPage}
            className='hidden'
          ></button>
          {pagination.next !== null && (
            <PageButton currentPage={currentPage} action='next' />
          )}
        </div>
      </div>
    </Form>
  );
};
export default EpisodesFilter;
