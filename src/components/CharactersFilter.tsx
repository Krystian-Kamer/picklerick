

// Available parameters:
// name: filter by the given name.
// status: filter by the given status (alive, dead or unknown).
// species: filter by the given species.
// type: filter by the given type.
// gender: filter by the given gender (female, male, genderless or unknown).


const CharactersFilter = () => {
  return (
    <form className='flex flex-col items-center bg-slate-900 text-white rounded-3xl mb-10 mx-4'>
      <div>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-semibold py-8 px-4'>
          Find what you want, dig in, Morty
        </h2>
      </div>
    </form>
  );
};
export default CharactersFilter;
