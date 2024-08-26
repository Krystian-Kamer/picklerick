import { useLoaderData } from 'react-router-dom';
import { EpisodeResponse, Episode } from '../types';
import Title from './Title';

const SingleEpisode = () => {
  const singleEpisode = (useLoaderData() as EpisodeResponse)
    .singleEpisode as Episode;

  const { name, created, air_date, episode } = singleEpisode;

  return (
    <>
      <Title title={name} />
      <div className='flex flex-col bg-slate-900 text-white rounded-3xl mb-10 mx-5 text-lg sm:text-2xl'>
        <p className='px-4 my-4'>Episode: {episode}</p>
        <p className='px-4 my-4'>Air date: {air_date}</p>
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
export default SingleEpisode;
