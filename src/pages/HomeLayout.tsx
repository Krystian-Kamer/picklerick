import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Footer, Loading } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
 
  return (
    <div className='flex flex-col'>
      <Header />
      <Navbar />
      {isPageLoading ? <Loading/> : <Outlet />}
      <Footer />
    </div>
  );
};
export default HomeLayout;
