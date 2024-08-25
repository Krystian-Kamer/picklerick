import { IoSearch } from 'react-icons/io5';
import { Form } from 'react-router-dom';

const genders = ['all', 'Male', 'Female', 'Genderless', 'unknown'];

const status = ['all', 'Alive', 'Dead', 'unknown'];

const CharactersFilter = () => {
  return (
    <div className='flex flex-col items-center bg-slate-900 text-white rounded-3xl p-4 sm:p-0 mb-10 mx-4'>
      <div>
        <h2 className='text-2xl lg:text-4xl font-semibold py-8 sm:px-4 selection:text-lime-200'>
          Find what you want, dig in, Morty
        </h2>
        <Form className='flex flex-col w-full'>
          <div className='flex items-center py-2'>
            <label
              className='uppercase w-32 selection:text-lime-200'
              htmlFor='name'
            >
              By Name
            </label>
            <input
              className='bg-slate-900 border-2 border-lime-200 rounded-lg placeholder-slate-400 focus:outline-none px-4 text-xl w-full selection:text-lime-200 selection:bg-slate-800'
              placeholder='Search'
              type='search'
              name='name'
            />
          </div>
          <div className='flex items-center py-2'>
            <label
              htmlFor='gender'
              className='uppercase w-32 selection:text-lime-200'
            >
              By Gender
            </label>
            <select
              className=' bg-slate-900 border-2 border-lime-200 rounded-lg px-4 text-xl capitalize w-full focus:outline-none'
              name='gender'
            >
              {genders.map((gender) => {
                return (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='flex  items-center py-2'>
            <label
              htmlFor='status'
              className='uppercase w-32 selection:text-lime-200'
            >
              By Status
            </label>
            <select
              className='bg-slate-900 border-2 border-lime-200 rounded-lg px-4 text-xl capitalize w-full focus:outline-none'
              name='status'
            >
              {status.map((status) => {
                return (
                  <option key={status} value={status}>
                    {status}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type='submit'
            className='flex items-center p-1 justify-center gap-x-4 bg-lime-200 text-slate-900 rounded-lg hover:scale-105 duration-500 uppercase mt-2 mb-10'
          >
            <span className='text-md sm:text-lg lg:text-xl tracking-wider'>
              search
            </span>
            <IoSearch className='w-8 h-8' />
          </button>
        </Form>
      </div>
    </div>
  );
};
export default CharactersFilter;
