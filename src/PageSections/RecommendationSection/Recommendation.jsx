import { useReducer } from 'react';

import styles from './Recommendation.module.css';

const options = {
  type: ['Red', 'White'],
  characteristic: ['Dry', 'Sweet'],
  body: ['Light', 'Medium', 'Full'],
};

const wineList = [
  {
    id: 0,
    name: 'Cabernet Sauvignon',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Full',
  },
  {
    id: 1,
    name: 'Merlot',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Medium',
  },
  {
    id: 2,
    name: 'Shiraz',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Full',
  },
  {
    id: 3,
    name: 'Sauvignon Blanc',
    type: 'White',
    characteristic: 'Dry',
    body: 'Medium',
  },
  {
    id: 4,
    name: 'Chardonnay',
    type: 'White',
    characteristic: 'Dry',
    body: 'Full',
  },
];

const wineListReducer = (state, action) => {
  switch (action.type) {
    case 'type':
      return state.filter(currentWine => currentWine.type === action.value);
    case 'characteristic':
      return state.filter(
        currentWine => currentWine.characteristic === action.value
      );
    case 'body':
      return state.filter(currentWine => currentWine.body === action.value);
    default:
      return;
  }
};

const Recommendation = props => {
  const [wines, updateWineList] = useReducer(wineListReducer, wineList);
  // Recommendation app
  // this should be a database based query

  const handleChoiceClick = event => {
    updateWineList({
      type: event.target.className,
      value: event.target.textContent,
    });
  };

  return (
    <section>
      <h2>Recommendations</h2>
      <h3>
        Select what you like and we'll find the best choice for your taste
      </h3>
      {wines.map(wine => {
        return (
          <p
            key={wine.id}
            className={styles.p}
          >
            {wine.name}
          </p>
        );
      })}

      <div className={styles.fieldsets}>
        <fieldset>
          <legend>Type</legend>
          {options.type.map(choice => (
            <button
              key={choice}
              className='type'
              onClick={handleChoiceClick}
            >
              {choice}
            </button>
          ))}
        </fieldset>
        <fieldset>
          <legend>Characteristic</legend>
          {options.characteristic.map(choice => (
            <button
              key={choice}
              className='characteristic'
              onClick={handleChoiceClick}
            >
              {choice}
            </button>
          ))}
        </fieldset>
        <fieldset>
          <legend>Body</legend>
          {options.body.map(choice => (
            <button
              key={choice}
              className='body'
              onClick={handleChoiceClick}
            >
              {choice}
            </button>
          ))}
        </fieldset>
      </div>
    </section>
  );
};

export default Recommendation;
