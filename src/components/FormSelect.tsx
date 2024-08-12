import { useLocation } from 'react-router-dom';
import type { Location } from '../types';

type FormProps = { data: Location[] };

const handleSelectChange = () => {
  const hiddenSubmitButton = document.querySelector(
    '.hidden'
  ) as HTMLButtonElement;
  hiddenSubmitButton.click();
};

const FormSelect = ({ data, name }: FormProps & { name: string }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idOfLocation: string = searchParams?.get('location') ?? '0';

  return (
    <select
      className='selectLocation bg-slate-900 border-2 border-lime-200 rounded-lg px-1 sm:px-4 sm:text-xl capitalize focus:outline-none w-full py-1 sm:py-0 lg:w-96'
      name={name}
      onChange={handleSelectChange}
      value={idOfLocation}
    >
      {data.map((item, index) => {
        const { id, name } = item;
        return (
          <option key={id} value={index}>
            {id} - {name}
          </option>
        );
      })}
    </select>
  );
};
export default FormSelect;
