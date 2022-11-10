import React from 'react';

import Navigation from '../../sections/Navigation/Navigation';
import Hero from '../../sections/Hero/Hero';

const Header = props => {
  return (
    <React.Fragment>
      <nav>
        <Navigation />
      </nav>
      <section>
        <Hero />
      </section>
    </React.Fragment>
  );
};

export default Header;
