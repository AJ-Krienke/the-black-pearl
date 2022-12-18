import React from 'react';
import Button from '../ButtonComponent/Button';

import styles from './FormSuccess.module.css';

const FormSuccess = props => {
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
        title='Page currently still under construction'
      >
        <span className={styles['button-icon']}>
          <svg
            role='presentation'
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path d='M3 3v-2h3v2h12v-2h3v2h3v10h-3v9h2v1h-22v-1h2v-9h-3v-10h3zm3 10v9h12v-9h-12zm0-8h-2l-2 6h2l2-6zm8 0h-2l-2 6h2l2-6zm8 0h-2l-2 6h2l2-6zm-12 0h-2l-2 6h2l2-6zm8 0h-2l-2 6h2l2-6z' />
          </svg>
        </span>
        <span className={styles['buton-text']}>
          Head over to the member page to learn more
        </span>
      </Button>
    </div>
  );
};

export default FormSuccess;
