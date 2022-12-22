//----------------TODO
//
// Modal needs to cover page or
// prevent scrolling, etc
//
//------------End TODO

import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';

import SignupContext from '../../Contexts/SignupContext';
import EmailPasswordForm from '../../Forms/EmailPasswordForm/EmailPasswordForm';

import Button from '../ButtonComponent/Button';
import styles from './LoginButton.module.css';

const LoginButton = props => {
  const [isSignedIn] = useContext(SignupContext);
  const [modal, setModal] = useState(false);

  const loginClickHandler = event => {
    setModal(true);
  };

  return (
    <>
      {!isSignedIn && (
        <Button
          type='button'
          className={styles['login-button']}
          onClick={loginClickHandler}
          title='Already a member? Login here'
        >
          Login
        </Button>
      )}
      {modal &&
        createPortal(
          <div
            className={styles.modal}
            role='presentation'
          >
            <div
              className={styles['modal-content']}
              role='presentation'
            >
              <EmailPasswordForm
                setModal={setModal}
                text={'Sign in now.'}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default LoginButton;
