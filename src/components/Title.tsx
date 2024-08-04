import { type Title } from '../types';

const Title = ({ title }: Title) => {
  return (
    <div className='capitalize text-3xl md:text-4xl font-bold text-slate-900 tracking-wider py-8 pl-6'>
      {title}
    </div>
  );
};
export default Title;
