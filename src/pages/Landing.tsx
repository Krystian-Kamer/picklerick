import {
  Title,
  Info,
  Categories,
  RandomCharacters,
  RandomEpisodes,
  RandomLocations,
} from '../components';

const Landing = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='about this project' />
        <Info />
        <Categories />
        <RandomCharacters />
        <RandomLocations />
        <RandomEpisodes />
      </article>
    </div>
  );
};
export default Landing;
