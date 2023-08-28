
import Footer from '../Reusable/Footer';
import { Outlet } from 'react-router-dom';
import ScrollTop from '../Reusable/ScrollTop';

const Main = () => {
  return (
    <div>
      <Outlet />
      <Footer />
      <ScrollTop />
     
    </div>
  );
};

export default Main;
