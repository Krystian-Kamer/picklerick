import { useLoaderData } from 'react-router-dom';
import { LocationOrEpisodeResponse, Location } from '../types';
import Title from './Title';

const SingleLocation = () => {
  const singleLocation = (useLoaderData() as LocationOrEpisodeResponse)
    .singleLocation as Location;

  const { name, type, dimension, created } = singleLocation;

  return (
    <>
      <Title title={name} />
      <div className='flex flex-col bg-slate-900 text-white rounded-3xl mb-10 mx-5 text-lg sm:text-2xl'>
        <p className='px-4 my-4'>Type : {type}</p>
        <p className='px-4 my-4'>Dimension : {dimension}</p>
        <p className='px-4 my-4'>
          Created :{' '}
          {`${new Date(created).getFullYear()}-${(
            new Date(created).getMonth() + 1
          )
            .toString()
            .padStart(2, '0')}-${new Date(created)
            .getDate()
            .toString()
            .padStart(2, '0')}`}
        </p>
      </div>
    </>
  );
};
export default SingleLocation;
