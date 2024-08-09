import type { Location } from '../types';

type FormProps = { data: Location[] };

const FormSelect = ({ data }: FormProps) => {
  return (
    <select className=' bg-slate-900 border-2 border-lime-200 rounded-lg px-1 sm:px-4 sm:text-xl capitalize focus:outline-none w-full py-1 sm:py-0 lg:w-96'>
      {data.map((item) => {
        const { id, name } = item;
        return (
          <option key={id} value={id}>
            {id} - {name}
          </option>
        );
      })}
    </select>
  );
};
export default FormSelect;
