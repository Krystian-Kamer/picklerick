import { Outlet } from 'react-router-dom';
import { Header, Navbar, Footer } from '../components';

const HomeLayout = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
