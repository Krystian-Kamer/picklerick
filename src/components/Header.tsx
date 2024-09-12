import { Link } from 'react-router-dom';
import pixelrick from '../assets/pixelrick.png';
import { scrollToTop } from '../utils';
import { useAppSelector, useAppDispatch } from '../reduxHooks';
import { logout } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const user = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();

  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <div className='flex justify-end gap-x-5 max-w-7xl mx-auto h-[30px]'>
        {user ? (
          <Link
            to='/'
            className='bg-slate-900 text-lime-200 rounded-lg px-4 mt-1 uppercase font-semibold selection:bg-slate-800'
            onClick={() => {
              dispatch(logout());
              toast.success(`${user} logged out successfully`);
            }}
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to='/login'
              className='bg-slate-900 text-lime-200 rounded-lg px-4 mt-1 uppercase font-semibold selection:bg-slate-800 hover:scale-105 duration-700'
              onClick={() => scrollToTop()}
            >
              Login
            </Link>
            <Link
              to='/register'
              className='bg-slate-900 text-lime-200 rounded-lg px-4 mt-1 uppercase font-semibold selection:bg-slate-800 hover:scale-105 duration-700'
              onClick={() => scrollToTop()}
            >
              Register
            </Link>
          </>
        )}
      </div>
      <div>
        <div className='flex max-w-7xl mx-auto  sm:justify-evenly items-center py-2'>
          <Link className='w-32 h-32 mb-[10px] hover:scale-110' to='/'>
            <img src={pixelrick} alt='image of pixel Rick' />
          </Link>
          <h1 className='pl-4 sm:pl-0 text-xl sm:text-3xl text-slate-900  font-bold box-decoration-slice selection:bg-slate-900 selection:text-lime-200'>
            Hello there,{' '}
            <span className='capitalize'> {user ? user : 'stranger'}...</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
