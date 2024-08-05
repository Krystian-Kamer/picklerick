import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Character } from '../types';

export const loader = async (data: LoaderFunctionArgs) => {
  const id = data.params.id as string
  const response = await customFetch(`character/${id}`)
  const character = response.data as Character
  return character;
};

const SingleCharacter = () => {
const character = useLoaderData() as Character;

  return <div>
    <img src={character.image} alt="" />
    {character.name}
    </div>;
};
export default SingleCharacter;
