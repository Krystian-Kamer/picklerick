import { Link } from 'react-router-dom';
import pixelrick from '../assets/pixelrick.png';

const Header = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <div className='flex max-w-7xl mx-auto  sm:justify-evenly items-center py-2'>
        <Link className='w-32 h-32 hover:scale-105' to='/'>
          <img src={pixelrick} alt='image of pixel Rick' />
        </Link>
        <h1 className='pl-4 sm:pl-0 text-xl sm:text-3xl text-slate-900  font-bold box-decoration-slice selection:bg-slate-900 selection:text-lime-200'>
          Hello there, stranger...
        </h1>
      </div>
    </div>
  );
};
export default Header;
