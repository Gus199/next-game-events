import React,{ useRouter } from 'react';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';


const Layout = ({ children }) => {
  // const router = useRouter();

  return (
    <div>
        <Header />
        <Showcase />
      {/* {router.pathname === '/' && <Showcase />} */}

      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
