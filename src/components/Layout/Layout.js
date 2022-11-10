import Header from '../sections/Header/Header';
import MainContent from '../sections/MainContent/MainContent';
import Footer from '../sections/Footer/Footer';
import React from 'react';

const Layout = props => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
