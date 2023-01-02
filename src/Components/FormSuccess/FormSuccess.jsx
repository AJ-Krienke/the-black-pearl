import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ButtonComponent/Button';

import styles from './FormSuccess.module.css';

const FormSuccess = props => {
  const navigate = useNavigate();
  const handleMemberPageClick = () => {
    navigate('/member');
  };

  return (
    <div
      className={styles['success-wrapper']}
      role='presentation'
    >
      {/* prettier-ignore */}
      <p>
        The Black Pearl Restaurant is not just a place to eat. We are an experience, a lifestyle, and most importantly, a family.
      </p>
      {/* prettier-ignore */}
      <p>
        Your membership gives you unlimited access to our exclusive events where you can learn from our experts, have fun, and meet new people.
      </p>
      {/* prettier-ignore */}
      <p>
        Not sure what drinks to have? On your member page, you have access to our drink recommendation app that was tailor made to compliment our menus, and carefully curated by our experts to ensure the best match for your unique tastes.
      </p>
      <Button
        className={styles.button}
        title='Opens the member page'
        onClick={handleMemberPageClick}
      >
        Head over to the member page to learn more
      </Button>
    </div>
  );
};

export default FormSuccess;
