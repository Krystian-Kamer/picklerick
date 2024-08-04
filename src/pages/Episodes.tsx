import { EpisodesFilter, Title } from '../components';

export const loader = async () => {
  return null;
};

const Episodes = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='search by episodes' />
        <EpisodesFilter/>
      </article>
    </div>
  );
};
export default Episodes;
