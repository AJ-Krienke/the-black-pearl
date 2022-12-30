import React, { useState, useRef } from 'react';

// ---------- Page Sections

import Hero from './PageSections/HeroSection/Hero';
import Intro from './PageSections/IntroSection/Intro';
import Events from './PageSections/EventsSection/Events';
import Gallery from './PageSections/GallerySection/Gallery';
import SignupForm from './Forms/SignupForm/SignupForm';
import Menu from './PageSections/MenuSection/Menu';
import Contact from './PageSections/ContactSection/Contact/Contact';

// -------End Page Sections

// ---------- Page Elements

import SignupContext from './Contexts/SignupContext';
import LoginButton from './Components/LoginButton/LoginButton';
import Modal from './Components/Modal/Modal';
import EmailPasswordForm from './Forms/EmailPasswordForm/EmailPasswordForm';

// -------End Page Elements

const LandingPage = props => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [modal, setModal] = useState(false);

  const signupRef = useRef(null);
  const contactRef = useRef(null);

  const signupClickHandler = () => {
    signupRef.current.focus();
  };

  const contactClickHandler = () => {
    // contactRef is a non-focusable element
    // scroll to it instead
    contactRef.current.scrollIntoView();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <SignupContext.Provider value={[isSignedUp, setIsSignedUp]}>
        {!modal ? (
          <>
            <LoginButton onClick={toggleModal} />
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
          </>
        ) : (
          <>
            <Modal>
              <EmailPasswordForm
                toggleModal={toggleModal}
                text='Log in now.'
                ref={signupRef}
                autoFocus={true}
              />
            </Modal>
          </>
        )}
      </SignupContext.Provider>
    </React.Fragment>
  );
};

export default LandingPage;
