import { Link } from 'react-router-dom';
import pixelrick from '../assets/pixelrick.png';

const Header = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <div className='flex max-w-7xl mx-auto justify-center sm:justify-evenly items-center py-2'>
        <Link className='w-32 h-32 hover:scale-105' to='/'>
          <img src={pixelrick} alt='image of pixel Rick' />
        </Link>
        <h1 className='text-xl sm:text-3xl text-slate-900  font-bold box-decoration-slice selection:bg-lime-400'>
          Hello there, stranger...
        </h1>
      </div>
    </div>
  );
};
export default Header;
