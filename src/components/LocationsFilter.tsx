import {
  useLoaderData,
  Form,
} from 'react-router-dom';
import { LocationResponse, Pagination, Location } from '../types';
import FormSelect from './FormSelect';

const LocationsFilter = () => {
  const locations = (useLoaderData() as LocationResponse).results as Location[]
  const pagination = (useLoaderData() as LocationResponse).info as Pagination


  return (
    <Form className='flex flex-col items-center bg-slate-900 text-white rounded-3xl mb-10 mx-4 selection:text-lime-200'>
      <div>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold py-8 px-4'>
          Find location for your vacation
        </h2>
        <div className='flex flex-col lg:flex-row gap-x-5 justify-center items-center gap-y-5 mb-10'>
          {pagination.prev !== null && (
            <button
              className='bg-lime-200 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold'
            >
              prev
            </button>
          )}
          <FormSelect data={locations} />
          {pagination.next !== null && (
            <button
              className='bg-lime-200 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold'
            >
              next
            </button>
          )}
        </div>
      </div>
    </Form>
  );
};
export default LocationsFilter;
