import { type Title } from '../types';

const Title = ({ title }: Title) => {


  return (
    <div className='capitalize text-3xl md:text-4xl font-bold text-slate-900 tracking-wider py-8 pl-6  selection:bg-slate-900 selection:text-lime-200'>
      {title}
    </div>
  );
};
export default Title;
