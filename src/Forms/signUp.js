const signUp = ({
  email,
  password,
  firebaseMethod,
  formState,
  setFormState,
  setIsSignedUp,
  setSecureToken,
  toggleModal,
}) => {
  // It is perfectly safe to have the API key here, remote clients need this API key to access the signup API. The permissions to perform CRUD operations are set on the database itself so unless a bad actor were to secure the administrator credentials to sign in to firebase directly, they would be unable to perform any actions outside of the specified permissions.
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
              toggleModal,
            }); // End signin with signup function call
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
          setSecureToken(data.idToken);
          setFormState({
            ...formState,
            disabled: true,
            error: false,
            submitting: false,
          });
          if (toggleModal) {
            toggleModal();
          }
        }
      }) // End data then

      .catch(e => {
        console.error(e);
      }); // End catch and promise chain
  } // End valid email and password check
};

export default signUp;
