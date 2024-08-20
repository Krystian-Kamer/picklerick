import { useLoaderData, Form } from 'react-router-dom';
import { LocationOrEpisodeResponse, Pagination, Location } from '../types';
import FormSelect from './FormSelect';

const LocationsFilter = () => {
  const locations = (useLoaderData() as LocationOrEpisodeResponse)
    .results as Location[];
  const pagination = (useLoaderData() as LocationOrEpisodeResponse)
    .info as Pagination;
  const currentPage = pagination.prev
    ? Number(pagination.prev.substring(46)) + 1
    : 1;

  const setLocationToFirst = () => {
    const selectLocation = document.querySelector(
      '.selectLocation'
    ) as HTMLSelectElement;
    selectLocation.value = '1';
  };

  return (
    <Form className='flex flex-col items-center bg-slate-900 text-white rounded-3xl mb-10 mx-4 selection:text-lime-200'>
      <div>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold py-8 px-4'>
          Find location for your vacation
        </h2>
        <div className='flex flex-col lg:flex-row gap-x-5 justify-center items-center gap-y-5 mb-10'>
          {pagination.prev !== null && (
            <button
              type='submit'
              name='page'
              value={currentPage - 1}
              onClick={() => setLocationToFirst()}
              className='bg-lime-200 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold lg:px-3'
            >
              page {currentPage - 1}
            </button>
          )}
          <FormSelect data={locations} name='location' />
          <button
            type='submit'
            name='page'
            value={currentPage}
            className='hidden'
          ></button>
          {pagination.next !== null && (
            <button
              type='submit'
              name='page'
              value={currentPage + 1}
              onClick={() => setLocationToFirst()}
              className='bg-lime-200 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold lg:px-3'
            >
              page {currentPage + 1}
            </button>
          )}
        </div>
      </div>
    </Form>
  );
};
export default LocationsFilter;
