import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';

import styles from './Contact.module.css';

const Contact = props => {
  return (
    <section name='contact'>
      <h2>Contact Us</h2>
      <h3>
        Call us, email us, or drop by anytime for reservations, inquiries, and
        more
      </h3>
      <div
        className={styles['contact-wrapper']}
        role='presentation'
      >
        <div
          className={styles['address-wrapper']}
          role='presentation'
        >
          <p>Come visit us at:</p>
          <div
            className={styles.card}
            role='presentation'
          >
            <svg
              className={styles.icon}
              role='presentation'
              xmlns='http://www.w3.org/2000/svg'
              width='60'
              height='60'
              fill='#000000'
              viewBox='0 0 256 256'
            >
              <rect
                width='256'
                height='256'
                fill='none'
              ></rect>
              <circle
                cx='128'
                cy='104'
                r='32'
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></circle>
              <path
                d='M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z'
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></path>
            </svg>
            <p className={styles.address}>
              108 Fancy Ln <br />
              Shop 5 <br />
              Snootsville &mdash; NC <br /> 26504
            </p>
          </div>
        </div>
        <div
          className={styles['email-wrapper']}
          role='presentation'
        >
          <p>Email us at:</p>
          <a
            href='mailto:front-desk@theblackpearl.com'
            title='Opens in your default email app'
          >
            <div
              className={styles.card}
              role='presentation'
            >
              <svg
                className={styles.icon}
                role='presentation'
                xmlns='http://www.w3.org/2000/svg'
                width='60'
                height='60'
                fill='#000000'
                viewBox='0 0 256 256'
              >
                <rect
                  width='256'
                  height='256'
                  fill='none'
                ></rect>
                <polyline
                  points='224 56 128 144 32 56'
                  fill='none'
                  stroke='#000000'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></polyline>
                <path
                  d='M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z'
                  fill='none'
                  stroke='#000000'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></path>
                <line
                  x1='110.5'
                  y1='128'
                  x2='34.5'
                  y2='197.7'
                  fill='none'
                  stroke='#000000'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></line>
                <line
                  x1='221.5'
                  y1='197.7'
                  x2='145.5'
                  y2='128'
                  fill='none'
                  stroke='#000000'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></line>
              </svg>
              <p>front-desk@theblackpearl.com</p>
            </div>
          </a>
        </div>
        <div
          className={styles['phone-wrapper']}
          role='presentation'
        >
          <p>Call us at:</p>
          <a
            href='tel:3365552615'
            title='Opens in your default phone app'
          >
            <div
              className={styles.card}
              role='presentation'
            >
              <svg
                className={styles.icon}
                role='presentation'
                xmlns='http://www.w3.org/2000/svg'
                width='60'
                height='60'
                fill='#000000'
                viewBox='0 0 256 256'
              >
                <rect
                  width='256'
                  height='256'
                  fill='none'
                ></rect>
                <path
                  d='M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z'
                  fill='none'
                  stroke='#000000'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></path>
              </svg>
              <p>(336) 555 - 2615</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
