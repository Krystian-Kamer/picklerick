import picklerick from '../assets/picklerick.png';
import { ToolsIcons } from '../components';

const Info = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row sm:pr-5 pb-6'>
      <img
        src={picklerick}
        className='object-cover pb-6 sm:w-1/2 lg:max-w-full'
        alt='image of Pickle Rick'
      />
      <div className='mx-3 lg:max-w-full text-slate-900'>
        <h2 className='text-3xl md:text-4xl font-semibold '>
          Welcome in my dimension.
        </h2>
        <p className='text-2xl py-8'>
          My name is Pickle Rick. So I explain to you quickly, Morty, how this
          page works. Page is created by my slave - Krystian. This is a project
          created by him to test his skills, but mostly, because I gave him that
          order and he is not smart enough to desert. He is using:
        </p>
        <ToolsIcons />
      </div>
    </div>
  );
};
export default Info;
