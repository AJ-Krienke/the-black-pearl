import Header from '../pageSections/Header/Header';
import MainContent from '../pageSections/MainContent/MainContent';
import Footer from '../pageSections/Footer/Footer';
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
