import React from 'react';
import { useState, useRef } from 'react';

import Hero from './PageSections/HeroSection/Hero';
import Intro from './PageSections/IntroSection/Intro';
import Events from './PageSections/EventsSection/Events';
import Gallery from './PageSections/GallerySection/Gallery';
import SignupForm from './Forms/SignupForm/SignupForm';
import Menu from './PageSections/MenuSection/Menu';
import Contact from './PageSections/ContactSection/Contact/Contact';
import SignupContext from './Contexts/SignupContext';
import LoginButton from './Components/LoginButton/LoginButton';

const LandingPage = props => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const signupRef = useRef(null);
  const contactRef = useRef(null);

  const signupClickHandler = () => {
    signupRef.current.focus();
  };

  const contactClickHandler = () => {
    contactRef.current.scrollIntoView();
  };

  return (
    <React.Fragment>
      <SignupContext.Provider value={[isSignedUp, setIsSignedUp]}>
        <header>
          <Hero
            onContactClick={contactClickHandler}
            onSignupClick={signupClickHandler}
          >
            <LoginButton />
          </Hero>
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
      </SignupContext.Provider>
    </React.Fragment>
  );
};

export default LandingPage;
