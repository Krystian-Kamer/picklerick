import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const links = ['characters', 'locations', 'episodes'];
  const { pathname } = useLocation();

  return (
    <nav className='w-full bg-slate-900'>
      <div className='flex max-w-7xl mx-auto justify-evenly items-center py-3 text-white'>
        {links.map((link) => {
          return (
            <NavLink
              className='uppercase font-bold text-sm sm:text-lg lg:text-xl'
              style={
                link === pathname.substring(1)
                  ? { color: '#90e771' }
                  : { color: 'white' }
              }
              key={link}
              to={`/${link}`}
            >
              {link}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
