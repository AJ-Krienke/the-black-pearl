import styles from './Gallery.module.css';

const Gallery = props => {
  return (
    <section name='gallery'>
      <h2>We're so much more than a restaurant</h2>
      <h3>Membership with us is a lifestyle choice</h3>
      <div
        className={`${styles.gallery} grid grid--4col`}
        role='presentation'
      >
        <p className={styles['gallery-wrapper']}>Gallery goes here</p>
      </div>
    </section>
  );
};

export default Gallery;
