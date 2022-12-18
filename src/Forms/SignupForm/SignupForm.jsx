// ------------------ TODO
//
// Refactor form to be reused in modal
// clean up conditional rendering
//
// ---------------END TODO

import { useState, forwardRef, useContext } from 'react';

import Button from '../../Components/ButtonComponent/Button';
import FormSuccess from '../../Components/FormSuccess/FormSuccess';
import Image from '../../Components/ImageComponent/Image';
import SignupContext from '../../Contexts/SignupContext';
import signUp from '../signUp';

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
    // The signin state is currently non persistent
    // That is intentional because the users
    // are expected to be testing it, not actually
    // using the site

    event.preventDefault();
    signUp({
      email: formFields.email,
      password: formFields.password,
      firebaseMethod: 'signUp',
      formState,
      setFormState,
      setIsSignedUp,
    });
  };

  return (
    <section
      name='Sign Up'
      id='signup'
    >
      {isSignedUp ? (
        <>
          {/* Render sign in success if signed in */}
          <h2>You are a member.</h2>
          <h3>You are logged in.</h3>
          <FormSuccess />
        </>
      ) : (
        // only render form if not signed in
        <>
          <h2>Become a member.</h2>
          <h3>All fields are required.</h3>
          <div
            className={styles['form-wrapper']}
            role='presentation'
          >
            <form className={styles.form}>
              {/* Render a warning if signin unsuccessful */}
              {formState.error && (
                <a
                  href='mailto:front-desk@theblackpearl.com'
                  title='Opens in your default mail app'
                  className={styles.error}
                >
                  There was an error signing you up, please contact us by email.
                </a>
              )}
              <label
                htmlFor='email'
                disabled={formState.disabled}
              >
                Email.
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
                  placeholder='me@example.com.'
                  autoComplete='off'
                  required
                />
              </div>
              <label
                htmlFor='password'
                disabled={formState.disabled}
              >
                Password.
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
                  placeholder='Enter a password.'
                  minLength='6'
                  autoComplete='off'
                  required
                />
              </div>
              <Button
                onClick={onFormSubmitHandler}
                disabled={
                  // If the email and password aren't
                  // valid, you can't submit
                  // or if the form is submitting
                  // you also cant submit
                  (formFields.email && formFields.password) ||
                  formState.submitting
                    ? false
                    : true
                }
              >
                {formState.submitting ? 'Submitting...' : 'Sign up now.'}
              </Button>
            </form>
            <Image
              loading='eager'
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
