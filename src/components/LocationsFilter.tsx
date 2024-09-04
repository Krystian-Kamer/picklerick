import { useLoaderData, Form } from 'react-router-dom';
import { LocationResponse, Pagination, Location } from '../types';
import { FormSelect, PageButton } from '../components/index';

const LocationsFilter = () => {
  const locations = (useLoaderData() as LocationResponse).results as Location[];
  const pagination = (useLoaderData() as LocationResponse).info as Pagination;
  const currentPage = pagination.prev
    ? Number(pagination.prev.substring(46)) + 1
    : 1;

  return (
    <Form className='flex flex-col items-center bg-slate-900 text-white rounded-3xl p-4 sm:p-0 mb-10 mx-4 '>
      <div>
        <h2 className='text-2xl lg:text-4xl font-semibold py-8 sm:px-4 selection:bg-slate-800 selection:text-lime-200'>
          Find location for your vacation
        </h2>
        <div className='flex flex-col lg:flex-row gap-x-5 justify-center items-center gap-y-5 mb-10'>
          {pagination.prev !== null && (
            <PageButton currentPage={currentPage} action='prev' />
          )}
          <FormSelect data={locations} name='location' />
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
export default LocationsFilter;
