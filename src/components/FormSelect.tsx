import type { Location } from '../types';

type FormProps = { data: Location[] };

const handleSelectChange = () => {
  const hiddenSubmitButton = document.querySelector(
    '.hidden'
  ) as HTMLButtonElement;
  hiddenSubmitButton.click();
};

const FormSelect = ({
  data,
  name,
  idOfLocation,
}: FormProps & { name: string } & { idOfLocation: string }) => {
  return (
    <select
      className=' bg-slate-900 border-2 border-lime-200 rounded-lg px-1 sm:px-4 sm:text-xl capitalize focus:outline-none w-full py-1 sm:py-0 lg:w-96'
      name={name}
      onChange={handleSelectChange}
      defaultValue={idOfLocation}
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
