import { useRef } from 'react';
import { CharactersContainer, CharactersFilter, Title } from '../components';
import { LoaderFunctionArgs } from 'react-router-dom';
import { scrollToTop } from '../utils';

export const loader = async (data: LoaderFunctionArgs) => {
  const params = Object.fromEntries(
    Array.from(new URL(data.request.url).searchParams.entries()).filter(
      ([key, value]) => key === 'name' || value !== 'all'
    )
  );
  scrollToTop()
  return params;
};

const Characters = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  const scrollToTitle = () => {
    titleRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full bg-gradient-to-r from-lime-200 to-lime-400'>
      <article className='min-h-96 max-w-7xl mx-auto'>
        <Title title='checkout awesome characters' />
        <CharactersFilter scrollToTitle={scrollToTitle} />
        <div ref={titleRef}></div>
        <CharactersContainer />
      </article>
    </div>
  );
};
export default Characters;
