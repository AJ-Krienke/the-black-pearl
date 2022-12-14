import Button from '../../Components/ButtonComponent/Button';
import React, { useContext } from 'react';

import styles from './Hero.module.css';
import SignupContext from '../../Contexts/SignupContext';

const Hero = props => {
  const [isSignedUp] = useContext(SignupContext);
  return (
    <section
      className={`${styles['hero-section']} grid grid--hero`}
      name='Welcome to the Black Pearl.'
    >
      <div
        className={styles['heading-wrapper']}
        role='presentation'
      >
        <h1 className={styles['hero-heading']}>The Black Pearl.</h1>
      </div>
      <div
        className={styles['button-wrapper']}
        role='presentation'
      >
        <Button
          className={styles['call-to-action']}
          onClick={props.onContactClick}
        >
          Contact Information.
        </Button>
        {!isSignedUp && (
          <Button
            className={styles['call-to-action']}
            onClick={props.onSignupClick}
          >
            Become a member.
          </Button>
        )}
      </div>
      {props.children}
    </section>
  );
};

export default Hero;
