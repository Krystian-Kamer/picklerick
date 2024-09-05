import { redirect } from 'react-router-dom';
import { Title } from '../components';
import { toast } from 'react-toastify';
import { AppStore } from '../store';

export const loader = (store: AppStore) => () => {
  const user = store.getState().user.username;
  if (!user) {
    toast.warn('You must be logged in to enter Library');
    return redirect('/login');
  }
  return null;
};

const Library = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400 min-h-[800px]'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='Your favorite characters' />
      </article>
    </div>
  );
};
export default Library;
