import { useLoaderData } from 'react-router-dom';
import { LocationResponse, Location } from '../types';
import Title from './Title';

const SingleLocation = () => {
  const singleLocation = (useLoaderData() as LocationResponse)
    .singleLocation as Location;

  const { name, type, dimension, created } = singleLocation;

  return (
    <>
      <Title title={name} />
      <div className='flex flex-col bg-slate-900 text-white rounded-3xl mb-10 mx-5 text-2xl'>
        <p className='ml-10 my-4'>Type : {type}</p>
        <p className='ml-10 my-4'>Dimension : {dimension}</p>
        <p className='ml-10 my-4'>Created : {created}</p>
      </div>
    </>
  );
};
export default SingleLocation;
