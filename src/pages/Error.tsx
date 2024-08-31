import { Header, Navbar, Footer, Title } from '../components';
import errorimg from '../assets/errorimg.png';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';

const Error = () => {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Navbar />

      <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
        <article className='min-h-96 max-w-7xl mx-auto flex flex-col items-center text-slate-900'>
          <Title title='Something went wrong...' />
          <h2 className='text-3xl py-12 mx-5 selection:bg-slate-800 selection:text-lime-200'>
            It looks like the page you are looking for is not avaliable.
          </h2>
          <img
            src={errorimg}
            alt='this is error image'
            className='h-96 mb-12'
          />
          <p className='text-3xl mb-8 selection:bg-slate-800 selection:text-lime-200'>
            Rick, I don't like this place!
          </p>
          <div className='flex items-center flex-col sm:flex-row gap-x-3 gap-y-6 pt-2 pb-24'>
            <p className='text-3xl font-bold self selection:bg-slate-800 selection:text-lime-200'>
              Let's go back to
            </p>
            <Link
              to='/'
              className='flex items-center py-2 px-4 sm:px-2 lg:px-4 w-fit gap-x-4 sm:gap-x-1 lg:gap-x-4 bg-slate-900 text-lime-200 rounded-3xl sm:rounded-xl lg:rounded-3xl hover:scale-105 duration-500'
            >
              <IoHome className='w-14 h-14 sm:w-8 sm:h-8 lg:w-12 lg:h-12' />
              <span className='text-xl sm:text-sm lg:text-xl tracking-wider'>
                Home
              </span>
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};
export default Error;
