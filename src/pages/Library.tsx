import { redirect } from 'react-router-dom';
import { ListOfCharacters, Title } from '../components';
import { toast } from 'react-toastify';
import { AppStore } from '../store';
import { customFetch, scrollToTop } from '../utils';
import { Character } from '../types';

export const loader = (store: AppStore) => async () => {
  const user = store.getState().user.username;
  scrollToTop();

  if (!user) {
    toast.warn('You must be logged in to enter Library');
    return redirect('/login');
  }

  const userCharacters = store.getState().user.characters;
  const response = await customFetch(
    `/character/${userCharacters.length === 0 ? 1 : userCharacters}`
  );
  const characters: Character[] = response.data;
  return { characters };
};

const Library = () => {
  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400 min-h-[980px]'>
      <article className='min-h-96 max-w-7xl mx-auto mt-12'>
        <Title title='Your favorite characters' />
        <ListOfCharacters />
      </article>
    </div>
  );
};
export default Library;
