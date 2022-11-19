// --------------------- TODO
//
// Split form state to
// local and global state
//
// ----------------- End TODO

import { useReducer, useState } from 'react';
import Button from '../../Components/ButtonComponent/Button';
import Image from '../../Components/ImageComponent/Image';

import styles from './SignupForm.module.css';

const updateFormState = (state, action) => {
  switch (action.type) {
    case 'email_changed':
      return { ...state, email: action.enteredEmail };

    case 'password_changed':
      return { ...state, password: action.enteredPassword };

    default:
      throw new Error('Invalid action type');
  }
};

const SignupForm = props => {
  const [state, dispatch] = useReducer(updateFormState);

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);
  const [buttonText, setButtonText] = useState('Signup Now');
  const [disabled, setDisabled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const emailChangeHandler = event => {
    if (/\S+@\S+\.\S+/.test(event.target.value.trim())) {
      setEmailIsValid(true);
      dispatch({
        type: 'email_changed',
        enteredEmail: event.target.value.trim(),
      });
    } else if (emailIsValid) {
      setEmailIsValid(false);
    }
  };

  const passwordChangeHandler = event => {
    if (
      event.target.value.trim().length > 4 &&
      /[!?.,@#$%^&*|\\/]/.test(event.target.value.trim())
    ) {
      dispatch({
        type: 'password_changed',
        enteredPassword: event.target.value.trim(),
      });
      setPasswordIsValid(true);
    } else if (passwordIsValid) {
      setPasswordIsValid(false);
    }
  };

  const confirmPasswordChangeHandler = event => {
    if (state.password === event.target.value) {
      setConfirmPasswordIsValid(true);
    } else if (confirmPasswordIsValid) {
      setConfirmPasswordIsValid(false);
    }
  };

  const onFormSubmitHandler = event => {
    event.preventDefault();
    if (emailIsValid && passwordIsValid && confirmPasswordIsValid) {
      setButtonText('Signing you up...');
      setDisabled(true);
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCErl_9VCiStpmzLgWSGe7GQIzWsZISweQ',
        {
          method: 'POST',
          body: JSON.stringify({
            email: state.email,
            password: state.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  };
  return (
    <section
      name='Sign Up'
      id='signup'
    >
      <h2>Become a member</h2>
      <h3>All fields are required</h3>
      <div
        className={styles['form-wrapper']}
        role='presentation'
      >
        <form className={styles.form}>
          <label htmlFor='email'>Email*</label>
          <div
            className={emailIsValid ? styles.correct : styles.incorrect}
            role='presentation'
          >
            <input
              onChange={emailChangeHandler}
              type='email'
              id='email'
              name='email'
              placeholder='me@example.com'
              autofill='off'
              required
            />
          </div>
          <label htmlFor='password'>Password*</label>
          <div
            className={passwordIsValid ? styles.correct : styles.incorrect}
            role='presentation'
          >
            <input
              onChange={passwordChangeHandler}
              type='password'
              id='password'
              name='password'
              placeholder='Enter a password'
              minLength='6'
              required
            />
          </div>
          <label htmlFor='confirm-password'>Confirm Password*</label>
          <div
            className={
              confirmPasswordIsValid ? styles.correct : styles.incorrect
            }
            role='presentation'
          >
            <input
              onChange={confirmPasswordChangeHandler}
              type='password'
              id='confirm-password'
              name='confirm-password'
              placeholder='Confirm your password'
              required
            />
          </div>
          <Button
            onClick={onFormSubmitHandler}
            disabled={disabled}
          >
            {buttonText}
          </Button>
        </form>
        <Image
          src={require('./media/member-enjoying-cocktails.jpg')}
          role='presentation'
          className={styles['form-image']}
        />
      </div>
    </section>
  );
};

export default SignupForm;
