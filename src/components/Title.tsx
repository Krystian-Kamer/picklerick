type Title = {
  title: string;
};

const Title = ({ title }: Title) => {
  return (
    <div className='capitalize text-2xl md:text-4xl font-bold text-slate-900 tracking-wider py-6'>{title}</div>
  );
};
export default Title;
