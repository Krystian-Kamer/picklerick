import { useLocation } from 'react-router-dom';
import type { Location, Episode } from '../types';

type FormProps = { data: Location[] | Episode[] };

const handleSelectChange = () => {
  const hiddenSubmitButton = document.querySelector(
    '.hidden'
  ) as HTMLButtonElement;
  hiddenSubmitButton.click();
};

const FormSelect = ({ data, name }: FormProps & { name: string }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idOfLocation: string = searchParams?.get('location') ?? '1';
  const idOfEpisode: string = searchParams?.get('episode') ?? '1';

  return (
    <select
      className='select bg-slate-900 border-2 border-lime-200 rounded-lg px-1 sm:px-2 sm:text-xl capitalize focus:outline-none w-full py-1 sm:py-0 lg:w-96 tracking-tighter'
      name={name}
      onChange={handleSelectChange}
      value={name === 'episode' ? idOfEpisode : idOfLocation}
    >
      {data.map((item, index) => {
        const { id, name } = item;
        return (
          <option key={id} value={index + 1}>
            {'episode' in item ? item.episode : item.id} - {name}
          </option>
        );
      })}
    </select>
  );
};
export default FormSelect;
