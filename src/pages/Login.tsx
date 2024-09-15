import { ActionFunctionArgs, Form, Link, redirect, useNavigate } from 'react-router-dom';
import { FormInput } from '../components';
import { toast } from 'react-toastify';
import { UserParams } from '../types';
import { db } from '../firebaseConfig';
import { ref, get } from 'firebase/database';
import { AppStore } from '../store';
import { login } from '../features/user/userSlice';
import { useAppDispatch } from '../reduxHooks';

export const action =
  (store: AppStore) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData) as {
      [key: string]: string;
    };
    if (!email || !password) {
      return toast.warn('Please complete all login fields');
    }
    try {
      const usersDatabase: UserParams[] = Object.values(
        (await get(ref(db, 'users'))).val()
      );
      const databaseKeys = Object.keys((await get(ref(db, 'users'))).val());
      const userIndex = usersDatabase.findIndex((user) => user.email === email);
      const databaseKey: string = databaseKeys[userIndex];
      const user = { ...usersDatabase[userIndex], firebaseKey: databaseKey };

      if (user) {
        if (user.password === password) {
          store.dispatch(login(user));
          toast.success('Successfully logged in');
          return redirect('/');
        } else {
          toast.warn('Wrong password');
          return null;
        }
      } else {
        toast.warn('User not found');
        return null;
      }
    } catch (error) {
      return toast.error('Something went wrong');
    }
  };

const Login = () => {
const dispatch = useAppDispatch()
const navigate = useNavigate()

const loginDemoUser = async (e: React.MouseEvent) => {
  e.preventDefault();
  const email = 'rick@gmail.com';
  const password = 'morty';
  try {
    const usersDatabase: UserParams[] = Object.values(
      (await get(ref(db, 'users'))).val()
    );
    const databaseKeys = Object.keys((await get(ref(db, 'users'))).val());
    const userIndex = usersDatabase.findIndex((user) => user.email === email);
    const databaseKey: string = databaseKeys[userIndex];
    const user = { ...usersDatabase[userIndex], firebaseKey: databaseKey };
    if (user) {
      if (user.password === password) {
        dispatch(login(user));
        toast.success('Successfully logged in');
        return navigate('/');
      } else {
        toast.warn('Wrong password');
        return null;
      }
    } else {
      toast.warn('User not found');
      return null;
    }
  } catch (error) {
    return toast.error('Something went wrong');
  }
};

  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400 mx-auto min-h-[900px] flex justify-center items-center'>
      <Form
        method='POST'
        className='bg-slate-900 text-white flex flex-col gap-y-7 h-[560px] mb-32 w-64 md:w-96  p-6 md:p-10 rounded-3xl'
      >
        <h2 className='text-2xl uppercase font-semibold tracking-widest mx-auto mt-10 border-b-2 border-b-lime-200 selection:text-lime-200 selection:bg-slate-800 animate-bounce'>
          Login
        </h2>
        <FormInput
          text='Enter email'
          placeholder='Enter your email'
          type='email'
          name='email'
        />
        <FormInput
          text='Password'
          placeholder='Enter your password'
          type='password'
          name='password'
        />
        <button
          type='submit'
          className='bg-lime-200 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold lg:px-3 hover:scale-105 duration-700'
        >
          login
        </button>
        <button
          type='button'
          className='bg-cyan-100 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold lg:px-3 hover:scale-105 duration-700'
          onClick={(e) => loginDemoUser(e)}
        >
          demo user
        </button>
        <p>
          Yu don't have an account?{' '}
          <Link
            className='text-lime-100 hover:border-b hover:border-b-lime-200'
            to='/register'
          >
            {' '}
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Login;
