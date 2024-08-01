import { Title, ToolsIcons } from '../components';
import picklerick from '../assets/picklerick.png';

const Landing = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='about this project' />
        <div className='flex flex-col sm:flex-row'>
          <img src={picklerick} alt='image of Pickle Rick' />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium consequatur porro, perspiciatis neque cumque molestiae
              debitis earum accusamus, obcaecati, facere saepe quas. Qui
              expedita
            </p>
            <ToolsIcons />
          </div>
        </div>
      </article>
    </div>
  );
};
export default Landing;
