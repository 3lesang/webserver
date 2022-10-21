import { Outlet } from 'react-router-dom';
import Head from './Head';
import Footer from './Footer';
function Layout() {
  return (
    <div>
      <Head />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
