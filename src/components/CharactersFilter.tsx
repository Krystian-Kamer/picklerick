import { IoSearch } from 'react-icons/io5';
import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import CharacterFormSelect from './CharacterFormSelect';

const CharactersFilter = ({ scrollToTitle }: { scrollToTitle: () => void }) => {
  return (
    <div className='flex flex-col items-center bg-slate-900 text-white rounded-3xl p-4 sm:p-0 mb-10 mx-4'>
      <div>
        <h2 className='text-2xl lg:text-4xl font-semibold py-8 sm:px-4 selection:bg-slate-800 selection:text-lime-200'>
          Find what you want, dig in, Morty
        </h2>
        <Form className='flex flex-col w-full'>
          <div className='flex items-center py-2'>
            <FormInput
              text='By Name'
              placeholder='Search'
              type='search'
              name='name'
            />
          </div>
          <div className='flex items-center py-2'>
            <CharacterFormSelect category='gender' />
          </div>
          <div className='flex  items-center py-2'>
            <CharacterFormSelect category='status' />
          </div>
          <button
            type='submit'
            className='flex items-center p-1 justify-center gap-x-4 bg-lime-200 text-slate-900 rounded-lg hover:scale-105 duration-500 uppercase mt-2 mb-10 selection:bg-lime-200'
            onClick={() => scrollToTitle()}
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
