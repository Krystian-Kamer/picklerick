import { CharactersFilter, Title } from '../components';

export const loader = async () => {
  return null;
};

const Characters = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='checkout awesome characters' />
        <CharactersFilter />
      </article>
    </div>
  );
};
export default Characters;
