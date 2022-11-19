import images from './images';
import Image from '../../Components/ImageComponent/Image';

import styles from './Gallery.module.css';

// Temporary fix for gallery issue
// TODO - Find a way to work with gallery images dynamically

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
