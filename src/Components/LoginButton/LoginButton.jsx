import { useContext } from 'react';
import SignupContext from '../../Contexts/SignupContext';
import Button from '../ButtonComponent/Button';
import styles from './LoginButton.module.css';
import React from 'react';

const LoginButton = props => {
  const [isSignedIn] = useContext(SignupContext);

  return (
    <>
      {!isSignedIn && (
        <Button
          type='button'
          className={styles['login-button']}
          onClick={props.onClick}
          title='Already a member? Login here'
        >
          Login
        </Button>
      )}
    </>
  );
};

export default LoginButton;
