//----------------TODO
//
// Refactor form component
// Finalize modal
//
//------------End TODO

import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';

import SignupContext from '../../Contexts/SignupContext';
import SignupForm from '../../Forms/SignupForm/SignupForm';

import Button from '../ButtonComponent/Button';
import styles from './LoginButton.module.css';

const LoginButton = props => {
  const [isSignedIn, setIsSignedIn] = useContext(SignupContext);
  const [modal, setModal] = useState(false);

  return (
    <>
      {!isSignedIn && (
        <Button
          type='button'
          className={styles['login-button']}
          disabled
          title='Login process under construction'
        >
          Login
        </Button>
      )}
      {modal &&
        createPortal(
          <div className={styles.modal}>
            <SignupForm buttonText='Login' />
          </div>,
          document.body
        )}
    </>
  );
};

export default LoginButton;
