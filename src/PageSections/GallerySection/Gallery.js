import Image from '../../Components/ImageComponent/Image';

import styles from './Gallery.module.css';

// --------------------- TODO

// Temporary fix for gallery issue
//Find a way to work with gallery images dynamically

import images from './images';
const galleryImages = images.map(image => {
  return (
    <Image
      key={image.id}
      title={image.title}
      src={image.src}
      alt={image.alt}
      className={styles.image}
    />
  );
});

//----------------- End TODO

const Gallery = props => {
  return (
    <section name='gallery'>
      <h2>We're so much more than a restaurant</h2>
      <h3>Membership with us is a lifestyle choice</h3>
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
