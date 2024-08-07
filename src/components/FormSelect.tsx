import type { Location, Genders, Status } from '../types';

type FormProps = { data: Location[] };

const FormSelect = ({ data }: FormProps) => {
  return (
    <select className=' bg-slate-900 border-2 border-lime-200 rounded-lg px-4 text-xl capitalize w-full focus:outline-none'>
      {data.map((item) => {
        const { id, name } = item;
        return (
          <option key={id} value={id}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
export default FormSelect;
