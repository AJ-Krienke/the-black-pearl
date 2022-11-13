import Image from '../../Components/ImageComponent/Image';
import Button from '../../Components/ButtonComponent/Button';
import React from 'react';
import heroImage from './media/hero-image.jpg';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      className='hero-section grid grid--hero'
      name='Welcome to the Black Pearl'
    >
      <div
        className={styles['heading-wrapper']}
        role='presentation'
      >
        <h1 className={styles['hero-heading']}>The Black Pearl</h1>
      </div>
      <div
        className={styles['button-wrapper']}
        role='presentation'
      >
        <Button className={styles['call-to-action']}>Become a member</Button>
      </div>
      <div
        className={styles.overlay}
        role='presentation'
      ></div>
      <Image
        className={styles['hero-image']}
        src={heroImage}
        role='presentation'
      />
    </section>
  );
};

export default Hero;
