import styles from './Recommendation.module.css';

const Recommendation = props => {
  // Recommendation app
  // this should be a database based query

  return (
    <section>
      <h2>Recommendations</h2>
      <h3>
        Select what you like and we'll find the best choice for your taste
      </h3>
      <div
        className={styles['picker-container']}
        role='presentation'
      >
        <div
          className={styles['choice-card']}
          role='presentation'
        >
          <button>Choice A</button>
        </div>
        <div
          className={styles['choice-card']}
          role='presentation'
        >
          <button>Choice B</button>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
