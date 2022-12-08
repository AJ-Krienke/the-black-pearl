import Image from '../../Components/ImageComponent/Image';

import styles from './Intro.module.css';

import chef from './media/chef.webp';
import mixologist from './media/master-mixologist.jpg';
import sommellier from './media/sommellier.webp';

const Intro = props => {
  return (
    <section
      className={styles['intro-section']}
      name='Introduction'
    >
      <h2>The Black Pearl</h2>
      <h3>
        At "The Black Pearl" You can expect an experience of class, and a
        lifestyle of luxury.
      </h3>
      <div
        className={styles['intro-wrapper']}
        role='presentation'
      >
        <div
          className={styles['intro-text-wrapper']}
          role='presentation'
        >
          <p>
            Between our world-class chef, sommellier, and master mixologist, we
            have curated an experience of distinction.
          </p>
          <p>
            Fine international cuisine, wines from the top regions in the world,
            and cocktails that are inspired by the classics and given a modern
            twist. You will have a truly unique experience with us.
          </p>
        </div>
        <div
          className={styles['intro-team-wrapper']}
          role='presentation'
        >
          <figure>
            <figcaption>Our Experts</figcaption>
            <div
              className={styles['intro-images']}
              role='presentation'
            >
              <Image
                src={chef}
                height='110'
                title='Basil Pastason | Head Chef'
              />
              <Image
                src={mixologist}
                height='110'
                title='Salty Rimmington | Master Mixologist'
              />
              <Image
                src={sommellier}
                height='110'
                title='Brandy Winehouse | Sommellier'
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Intro;
