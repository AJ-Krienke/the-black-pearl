import { useContext } from 'react';

import SignupContext from '../../Contexts/SignupContext';
import styles from './Events.module.css';

const Events = props => {
  const [isSignedUp] = useContext(SignupContext);
  return (
    <section name='events'>
      <h2>Upcoming Events.</h2>
      <h3>
        {isSignedUp
          ? 'Checkout our exclusive events that you can attend as a member now.'
          : 'By signing up for a free membership, you will get access to these exclusive member-only events.'}
      </h3>
      <div
        className={`${styles['event-wrapper']} grid grid--2col`}
        role='presentation'
      >
        <div
          className={`${styles['event-card']} ${styles['chef-class']}`}
          role='presentation'
        >
          <h4>Chef Class.</h4>
          <time dateTime='2053-06-20T18-30-00'>June 20 @ 6:30pm.</time>
          {/* prettier-ignore */}
          <p>
            Join our head chef, Basil, for a chance to learn to cook like the professionals.
          </p>
          {/* prettier-ignore */}
          <p>Limited space available so be sure to book early.</p>
        </div>
        <div
          className={`${styles['event-card']} ${styles['cocktail-class']}`}
          role='presentation'
        >
          <h4>Cocktail Master Class.</h4>
          <time dateTime='2053-06-27T18-30-00'>June 7 @ 6:30pm.</time>
          {/* prettier-ignore */}
          <p>
            Join our master mixologist, Salty, to learn how to make your own cocktails at home.
          </p>
          {/* prettier-ignore */}
          <p>
            No experience needed to get the most out of this class. We will teach you everything you need to know to be able to start making cocktails which will impress anyone who comes to visit.
          </p>
        </div>
        <div
          className={`${styles['event-card']} ${styles['social-media-class']}`}
          role='presentation'
        >
          <h4>Social Media Workshop.</h4>
          <time dateTime='2053-07-03T18-30-00'>July 03 @ 6:30pm.</time>
          {/* prettier-ignore */}
          <p>
            Join us to learn the tricks of the trade, and market your product, your idea, or even yourself on social media.
          </p>
          {/* prettier-ignore */}
          <p>
            In this class you will learn valuable basics, like marketing, design, and content creation to help you better create your space on
            the web.
          </p>
        </div>
        <div
          className={`${styles['event-card']} ${styles['wine-class']}`}
          role='presentation'
        >
          <h4>World of Wine.</h4>
          <time dateTime='2053-07-10T18-30-00'>July 10 @ 6:30pm.</time>
          {/* prettier-ignore */}
          <p>
            Climb aboard with our Sommellier, Brandy, as you explore the world of wines.
          </p>
          {/* prettier-ignore */}
          <p>
            Your new found knowledge will give you the skills to impress all of your friends, old and new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
