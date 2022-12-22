import { useContext, forwardRef } from 'react';

import FormSuccess from '../../Components/FormSuccess/FormSuccess';
import Image from '../../Components/ImageComponent/Image';
import SignupContext from '../../Contexts/SignupContext';
import EmailPasswordForm from '../EmailPasswordForm/EmailPasswordForm';

import styles from './SignupForm.module.css';

const SignupForm = forwardRef((props, ref) => {
  const [isSignedUp] = useContext(SignupContext);

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
            <EmailPasswordForm
              text={'Sign up now.'}
              ref={ref}
            />
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
