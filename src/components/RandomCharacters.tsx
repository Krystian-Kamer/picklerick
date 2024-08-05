import { useLoaderData } from 'react-router-dom';
import Title from './Title';
import { Character } from '../types';

const RandomCharacters = () => {
  const characters = useLoaderData() as Character[]

  return (
    <>
      <Title title='random characters' />
      {characters.map((character)=> {
        return <img src={character.image}/>
      })}
    </>
  );
};
export default RandomCharacters;
