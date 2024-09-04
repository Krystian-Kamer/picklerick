const genders = ['all', 'Male', 'Female', 'Genderless', 'unknown'];
const status = ['all', 'Alive', 'Dead', 'unknown'];

const CharacterFormSelect = ({
  category,
}: {
  category: 'gender' | 'status';
}) => {
  return (
    <>
      <label
        htmlFor={category}
        className='uppercase w-32 selection:bg-slate-800 selection:text-lime-200'
      >
        {category === 'gender' ? 'By Gender' : 'By Status'}
      </label>
      <select
        className='bg-slate-900 border-2 border-lime-200 rounded-lg px-4 text-xl capitalize w-full focus:outline-none'
        name={category}
      >
        {category === 'gender' &&
          genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        {category === 'status' &&
          status.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
      </select>
    </>
  );
};

export default CharacterFormSelect;
