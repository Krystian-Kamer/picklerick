import { Title, Info, Categories } from '../components';

const Landing = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='about this project' />
        <Info />
        <Categories/>
      </article>
    </div>
  );
};
export default Landing;
