const FormInput = ({
  text,
  placeholder,
  type,
  name,
}: {
  text: string;
  placeholder: string;
  type: string;
  name: string;
}) => {
  return (
    <>
      <label
        className='uppercase w-32 selection:bg-slate-800 selection:text-lime-200'
        htmlFor={name}
      >
        {text}
      </label>
      <input
        className='bg-slate-900 border-2 border-lime-200 rounded-lg placeholder-slate-400 focus:outline-none px-4 text-lg sm:text-xl w-full selection:text-lime-200 selection:bg-slate-800'
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
      />
    </>
  );
};
export default FormInput;
