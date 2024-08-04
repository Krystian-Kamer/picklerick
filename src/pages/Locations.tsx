import { LocationsFilter, Title } from '../components';

export const loader = async () => {
  return null;
};

const Locations = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='search & browse cool locations' />
        <LocationsFilter />
      </article>
    </div>
  );
};
export default Locations;
