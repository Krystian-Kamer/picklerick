import type { Location } from '../types';

type FormProps = { data: Location[] };

const FormSelect = ({ data }: FormProps) => {
  return (
    <select className='bg-slate-900'>
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
