import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
