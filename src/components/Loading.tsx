import picklerick from '../assets/picklerick.png';

const Loading = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400 min-h-[1000px]'>
      <div className='flex justify-center items-center my-20'>
        <img
          src={picklerick}
          className='w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-slate-900 bg-sky-300 animate-spin'
          alt='Image of Pickle Rick'
        />
        <p className='ml-5 text-2xl font-bold'>Loading...</p>
      </div>
    </div>
  );
};
export default Loading;
