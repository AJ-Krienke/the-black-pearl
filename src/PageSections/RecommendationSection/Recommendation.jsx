// ------ TODO -----------
//
// Create a context to hold the
// user signin token. Update the
// sign in functioanlity to use it
// use that signed in token for the
// fetch request to get the wines
//
// Create context with DB info
// Fetch wine list from DB
// Add Cocktail List to DB
//
// ------ END TODO -------
import { useReducer, useState, useEffect, useContext } from 'react';

import SignupContext from '../../Contexts/SignupContext';
import styles from './Recommendation.module.css';

// Data to use in the fetch operation
const URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCErl_9VCiStpmzLgWSGe7GQIzWsZISweQ';

// `https://firestore.googleapis.com/v1/projects/the-black-pearl-a24dd/databases/wines`;

const HEADERS = {
  'Content-Type': 'application/json',
}; // End HEADERS

const wineList = () => {};

const wineListReducer = (state, action) => {
  // This reducer takes the selected
  // type, characteristic, or body
  // and filters the winelist to only
  // items with the selected attributes
  // if the action type is reset, the
  // reducer returns the original full
  // wine list
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
  const { secureToken } = useContext(SignupContext);
  const INIT = {
    method: 'POST',
    body: JSON.stringify({
      token: secureToken,
      returnSecureToken: true,
    }), // End body
  }; // End INIT
  const [wines, updateWineList] = useReducer(wineListReducer, wineList);
  const [options, setOptions] = useState({
    type: [],
    characteristic: [],
    body: [],
  });
  // Recommendation app
  // this should be a database based query

  // fetch(URL, INIT, HEADERS)
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  useEffect(() => {
    // Displayed list needs to update
    // each time a user makes a
    // selection so we create the lists
    // of wine type, character, and
    // body
    const typeList = [];
    const characteristicList = [];
    const bodyList = [];

    wines.forEach(wine => {
      // We use seperate if statements
      // so that every wine in the list
      // is evaluated for all of it's
      // attributes. if the attribute
      // isn't already in the array,
      // add it for each wine in the
      // wine list
      if (!typeList.includes(wine.type)) typeList.push(wine.type);
      if (!characteristicList.includes(wine.characteristic))
        characteristicList.push(wine.characteristic);
      if (!bodyList.includes(wine.body)) bodyList.push(wine.body);
    });

    // Once our arrays are complete
    // we update the state to reflect
    // the updated lists
    setOptions({
      type: [...typeList],
      characteristic: [...characteristicList],
      body: [...bodyList],
    });
  }, [wines]); // This will re-run
  // anytime the wines list is changed
  // causing the buttons on screen to
  // rerender which will always
  // reflect the options available to
  // the user for their given choices

  const handleChoiceClick = event => {
    updateWineList({
      type: event.target.className,
      value: event.target.textContent,
    });
  };

  const handleResetClick = event => updateWineList({ type: 'reset' });

  return (
    <section>
      <h2>Recommendations.</h2>
      <h3>
        Select what you like and we'll find the best choice for your personal
        taste.
      </h3>

      <div className={`${styles['recommendation-wrapper']} grid grid--2col`}>
        <div
          className={styles['list-wrapper']}
          role='presentation'
        >
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
        </div>
        <div
          className={styles['button-wrapper']}
          role='presentation'
        >
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
        </div>
        <button
          className={styles.reset}
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Recommendation;
