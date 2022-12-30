import { useContext, useState, forwardRef } from 'react';

import signUp from '../signUp';
import SignupContext from '../../Contexts/SignupContext';
import Button from '../../Components/ButtonComponent/Button';
import styles from './EmailPasswordForm.module.css';

const EmailPasswordForm = forwardRef((props, ref) => {
  const [isSignedUp, setIsSignedUp] = useContext(SignupContext);
  const toggleModal = props.toggleModal;

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
      toggleModal,
    });
  };

  return (
    <>
      {!isSignedUp && (
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
              autoFocus={props.autoFocus}
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
            className={formFields.password ? styles.correct : styles.incorrect}
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
              (formFields.email && formFields.password) || formState.submitting
                ? false
                : true
            }
          >
            {formState.submitting ? 'Submitting...' : props.text}
          </Button>
          {toggleModal && <Button onClick={toggleModal}>Close.</Button>}
        </form>
      )}
    </>
  );
});

export default EmailPasswordForm;
