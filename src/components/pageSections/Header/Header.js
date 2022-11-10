import React from 'react';

import Navigation from '../../sections/Navigation/Navigation';
import Hero from '../../sections/Hero/Hero';

const Header = props => {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
    </React.Fragment>
  );
};

export default Header;
