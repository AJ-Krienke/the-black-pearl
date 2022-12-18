import { useContext } from 'react';
import Image from '../../Components/ImageComponent/Image';
import SignupContext from '../../Contexts/SignupContext';

import styles from './Gallery.module.css';

// --------------------- TODO

// Temporary fix for gallery issue
//Find a way to work with gallery images dynamically

import images from './images';
const galleryImages = images.map(image => {
  return (
    <Image
      key={image.id}
      title={image.alt}
      src={image.src}
      alt={image.alt}
      name={image.name}
      className={styles.image}
    />
  );
});

//----------------- End TODO

const Gallery = props => {
  const [isSignedUp] = useContext(SignupContext);
  return (
    <section name='gallery'>
      <h2>We're so much more than a restaurant.</h2>
      <h3>
        {isSignedUp
          ? 'Come enjoy the exclusive lifestyle with us.'
          : 'Membership with us is a lifestyle choice.'}
      </h3>
      <div
        className={`${styles.gallery} grid grid--4col`}
        role='presentation'
      >
        {galleryImages}
      </div>
    </section>
  );
};

export default Gallery;
