const signUp = ({
  email,
  password,
  firebaseMethod,
  formState,
  setFormState,
  setIsSignedUp,
  setModal,
}) => {
  // It is perfectly safe to have the API key here, remote clients need this API key to access the signup API for this project
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${firebaseMethod}?key=AIzaSyCErl_9VCiStpmzLgWSGe7GQIzWsZISweQ`;

  const INIT = {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    }), // End body
  }; // End INIT

  const HEADERS = {
    'Content-Type': 'application/json',
  }; // End HEADERS

  // If email and password are updated and valid
  if (email && password) {
    // Try to signup
    fetch(URL, INIT, HEADERS)
      .then(response => {
        // You can only extract the error message for
        // the next step if the response has been
        // parsed to json
        return response.json();
      }) // End response 'then'

      .then(data => {
        // If there is an error
        if (data.error) {
          // If the error is that the email exists
          if (data.error.message === 'EMAIL_EXISTS') {
            // try to signin with the same credentials
            signUp({
              email,
              password,
              firebaseMethod: 'signInWithPassword',
              formState,
              setFormState,
              setIsSignedUp,
            }); // End signin with signup function call

            // If the set modal function exists
            // This is called from the signin modal
            // close it on successful signup
            setModal && setModal(false);
          } else {
            // if firebase returned an error that wasn't
            // email exists, create an error state
            setFormState({
              ...formState,
              error: true,
            });
            // ensure no isSignedUp state exists
            setIsSignedUp(false);
            // Create an error
            throw new Error('Unsuccessful signin');
          } // End if data.error.message === 'EMAIL_EXISTS'
        } // End if data.error
        else {
          // If there isn't an error signup
          // was successful
          setIsSignedUp(true);
          setFormState({
            ...formState,
            disabled: true,
            error: false,
            submitting: false,
          });
        }
      }) // End data then

      .catch(e => {
        console.error(e);
      }); // End catch and promise chain
  } // End valid email and password check
};

export default signUp;
