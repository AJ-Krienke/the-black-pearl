//
//
//
//
//
// TODO - work on response to submit click
//
//
//
//

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

  const emailChangeHandler = event => {
    if (/\S+@\S+\.\S+/.test(event.target.value.trim())) {
      dispatch({
        type: 'email_changed',
        enteredEmail: event.target.value.trim(),
      });
      setEmailIsValid(true);
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
      setButtonText('Sending...');
      // fetch(
      //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCErl_9VCiStpmzLgWSGe7GQIzWsZISweQ',
      //   {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       email: state.email,
      //       password: state.password,
      //       returnSecureToken: true,
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
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
        className={`${styles['form-wrapper']} grid grid--2col`}
        role='presentation'
      >
        <form>
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
          <Button onClick={onFormSubmitHandler}>{buttonText}</Button>
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
