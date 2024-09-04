import { setLocOrEpParamToFirst } from '../utils';

const PageButton = ({
  currentPage,
  action,
}: {
  currentPage: number;
  action: 'prev' | 'next';
}) => {
  return (
    <button
      type='submit'
      name='page'
      value={action === 'prev' ? currentPage - 1 : currentPage + 1}
      onClick={() => setLocOrEpParamToFirst()}
      className='bg-lime-200 text-slate-900 uppercase rounded-lg w-full py-1 text-center font-bold lg:px-3 hover:scale-105 duration-700'
    >
      page {action === 'prev' ? currentPage - 1 : currentPage + 1}
    </button>
  );
};
export default PageButton;
