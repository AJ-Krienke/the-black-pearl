import { useReducer, useState, useEffect } from 'react';

import styles from './Recommendation.module.css';

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
    name: 'Syrah',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Full',
  },
  {
    id: 3,
    name: 'Pinot Noir',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Light',
  },
  {
    id: 4,
    name: 'Sangiovese',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Full',
  },
  {
    id: 5,
    name: 'Red Blend',
    type: 'Red',
    characteristic: 'Dry',
    body: 'Full',
  },
  {
    id: 6,
    name: 'Sauvignon Blanc',
    type: 'White',
    characteristic: 'Dry',
    body: 'Full',
  },
  {
    id: 7,
    name: 'Chardonnay',
    type: 'White',
    characteristic: 'Dry',
    body: 'Medium',
  },
  {
    id: 8,
    name: 'Pinot Grigio',
    type: 'White',
    characteristic: 'Dry',
    body: 'Light',
  },
  {
    id: 9,
    name: 'Prosecco',
    type: 'Sparkling',
    characteristic: 'Dry',
    body: 'Light',
  },
  {
    id: 10,
    name: 'Champagne',
    type: 'Sparkling',
    characteristic: 'Dry',
    body: 'Full',
  },
];

const wineListReducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return wineList;
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
  const [options, setOptions] = useState({
    type: [],
    characteristic: [],
    body: [],
  });
  // Recommendation app
  // this should be a database based query

  useEffect(() => {
    const typeList = [];
    const characteristicList = [];
    const bodyList = [];

    wines.forEach(wine => {
      if (!typeList.includes(wine.type)) typeList.push(wine.type);
      if (!characteristicList.includes(wine.characteristic))
        characteristicList.push(wine.characteristic);
      if (!bodyList.includes(wine.body)) bodyList.push(wine.body);
    });

    setOptions({
      type: [...typeList],
      characteristic: [...characteristicList],
      body: [...bodyList],
    });
  }, [wines]); // This will re-run anytime the wines list is changed

  const handleChoiceClick = event => {
    updateWineList({
      type: event.target.className,
      value: event.target.textContent,
    });
  };

  const handleResetClick = event => updateWineList({ type: 'reset' });

  return (
    <section>
      <h2>Recommendations</h2>
      <h3>
        Select what you like and we'll find the best choice for your taste
      </h3>

      <ul className={styles.list}>
        {wines.map(wine => {
          return (
            <li
              key={wine.id}
              className={styles['list-item']}
            >
              {wine.name}
            </li>
          );
        })}
      </ul>

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
      <button
        className={styles.reset}
        onClick={handleResetClick}
      >
        Reset
      </button>
    </section>
  );
};

export default Recommendation;
