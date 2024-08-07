import { useLoaderData } from 'react-router-dom';
import { LocationResponse } from '../types';
import FormSelect from './FormSelect';

const LocationsFilter = () => {
  const locations = (useLoaderData() as LocationResponse).results;

  return (
    <form className='flex flex-col items-center bg-slate-900 text-white rounded-3xl mb-10 mx-4 selection:text-lime-200'>
      <div>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold py-8 px-4'>
          Find location for your vacation
        </h2>
        <FormSelect data={locations} />
      </div>
    </form>
  );
};
export default LocationsFilter;
