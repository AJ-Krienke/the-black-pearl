import React from 'react';
import { useRef } from 'react';

import Hero from './PageSections/HeroSection/Hero';
import Intro from './PageSections/IntroSection/Intro';
import Events from './PageSections/EventsSection/Events';
import Gallery from './PageSections/GallerySection/Gallery';
import SignupForm from './Forms/SignupForm/SignupForm';
import Menu from './PageSections/MenuSection/Menu';
import Contact from './PageSections/ContactSection/Contact/Contact';

const LandingPage = props => {
  const signupRef = useRef();
  const contactRef = useRef();

  const signupClickHandler = () => {
    signupRef.current.focus();
  };

  const contactClickHandler = () => {
    contactRef.current.scrollIntoView();
  };

  return (
    <React.Fragment>
      <header>
        <Hero
          onContactClick={contactClickHandler}
          onSignupClick={signupClickHandler}
        />
      </header>
      <main>
        <Intro />
        <Events />
        <Gallery />
      </main>
      <aside>
        <SignupForm ref={signupRef} />
      </aside>
      <footer>
        <Menu />
        <Contact ref={contactRef} />
      </footer>
    </React.Fragment>
  );
};

export default LandingPage;
