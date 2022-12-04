// ------------------ TODO
//
// Handle Signup Error
// Handle already a member error
// Add login button
//
// ---------------END TODO

import { useState, forwardRef, useContext } from 'react';

import Button from '../../Components/ButtonComponent/Button';
import FormSuccess from '../../Components/FormSuccess/FormSuccess';
import Image from '../../Components/ImageComponent/Image';
import SignupContext from '../../Contexts/SignupContext';

import styles from './SignupForm.module.css';

const SignupForm = forwardRef((props, ref) => {
  const [isSignedUp, setIsSignedUp] = useContext(SignupContext);

  const [formFields, setFormFields] = useState({
    email: null,
    password: null,
  });

  const [formState, setFormState] = useState({
    submitting: false,
    disabled: false,
    error: false,
  });

  const emailChangeHandler = event => {
    if (/\S+@\S+\.\S+/.test(event.target.value.trim())) {
      setFormFields({
        ...formFields,
        email: event.target.value.trim(),
      });
    } else {
      setFormFields({
        ...formFields,
        email: null,
      });
    }
  };

  const passwordChangeHandler = event => {
    if (
      event.target.value.trim().length > 4 &&
      /[!?.,@#$%^&*|\\/]/.test(event.target.value.trim())
    ) {
      setFormFields({
        ...formFields,
        password: event.target.value.trim(),
      });
    } else {
      setFormFields({
        ...formFields,
        password: null,
      });
    }
  };

  const onFormSubmitHandler = event => {
    event.preventDefault();
    setFormState({
      ...formState,
      disabled: true,
      submitting: true,
    });
    fetch(
      // Based on googles firbase docs, it is perfectly safe to have the key here because permissions are set in the firebase dashboard
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCErl_9VCiStpmzLgWSGe7GQIzWsZISweQ',
      {
        method: 'POST',
        body: JSON.stringify({
          email: formFields.email,
          password: formFields.password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(() => {
        setIsSignedUp(true);
        props.signUpRef.current.scrollIntoView();
      });
  };

  return (
    <section
      name='Sign Up'
      id='signup'
    >
      {isSignedUp ? (
        <>
          <h2>You are a member</h2>
          <h3>Congratulations, you signed up successfully</h3>
          <FormSuccess />
        </>
      ) : (
        <>
          <h2>Become a member</h2>
          <h3>All fields are required</h3>
          <div
            className={styles['form-wrapper']}
            role='presentation'
          >
            <form className={styles.form}>
              <label
                htmlFor='email'
                disabled={formState.disabled}
              >
                Email *
              </label>
              <div
                className={formFields.email ? styles.correct : styles.incorrect}
                role='presentation'
              >
                <input
                  disabled={formState.disabled}
                  ref={ref}
                  onChange={emailChangeHandler}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='me@example.com'
                  autoComplete='off'
                  required
                />
              </div>
              <label
                htmlFor='password'
                disabled={formState.disabled}
              >
                Password *
              </label>
              <div
                className={
                  formFields.password ? styles.correct : styles.incorrect
                }
                role='presentation'
              >
                <input
                  disabled={formState.disabled}
                  onChange={passwordChangeHandler}
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter a password'
                  minLength='6'
                  autoComplete='off'
                  required
                />
              </div>
              <Button
                onClick={onFormSubmitHandler}
                disabled={
                  // If the email and password are valid and the formstate has been set to disabled, set html disabled to true, otherwise false.
                  formFields.email && formFields.password && formState.disabled
                    ? true
                    : false
                }
              >
                {formState.submitting ? 'Submitting...' : 'Sign up now'}
              </Button>
            </form>
            <Image
              src={require('./media/member-enjoying-cocktails.jpg')}
              role='presentation'
              className={styles['form-image']}
            />
          </div>
        </>
      )}
    </section>
  );
});

export default SignupForm;
