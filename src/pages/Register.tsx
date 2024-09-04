import { ActionFunctionArgs, Form, Link, redirect } from 'react-router-dom';
import { FormInput } from '../components';
import { toast } from 'react-toastify';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    toast.success('Account successfully created');
    return redirect('/login');
  } catch (error) {
    toast.error('something went wrong');
    return error;
  }
};

const Register = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400 mx-auto min-h-[900px] flex justify-center items-center'>
      <Form
        method='POST'
        className='bg-slate-900 text-white flex flex-col gap-y-7 h-[560px] mb-32 w-64 md:w-96  p-6 md:p-10 rounded-3xl'
      >
        <h2 className='text-2xl uppercase font-semibold tracking-widest mx-auto  border-b-2 border-b-lime-200 selection:text-lime-200 selection:bg-slate-800 animate-bounce'>
          register
        </h2>
        <FormInput
          text='username'
          placeholder='Enter your name'
          type='text'
          name='username'
        />
        <FormInput
          text='enter email'
          placeholder='Enter your email'
          type='email'
          name='email'
        />
        <FormInput
          text='password'
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
        <p>
          Already have an account?{' '}
          <Link
            className='text-lime-100 hover:border-b hover:border-b-lime-200'
            to='/login'
          >
            {' '}
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};
export default Register;
