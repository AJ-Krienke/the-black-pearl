const signUp = ({
  email,
  password,
  firebaseMethod,
  formState,
  setFormState,
  setIsSignedUp,
}) => {
  // It is perfectly safe to have the API key here, remote clients need this API key to access the signup API
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${firebaseMethod}?key=AIzaSyCErl_9VCiStpmzLgWSGe7GQIzWsZISweQ`;

  const INIT = {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    }),
  };

  const HEADERS = {
    'Content-Type': 'application/json',
  };

  // If email and password are updated and valid
  if (email && password) {
    // Try to signup
    fetch(URL, INIT, HEADERS)
      // Parse JSON from response
      .then(response => {
        // Throw error early to short circuit
        // other tests
        if (!response.ok) {
          throw new Error('Bad response from network');
        }
        return response.json();
      })

      // use data object to verify signup
      .then(data => {
        if (!data.ok) {
          throw new Error('Bad Response: ' + data);
        }
        // Handling the error previously
        // means this will only execute
        // if the fetch and json parse
        // is successful
        if (
          // if the kind of data returned from
          // firebase identity toolkit
          data.kind === 'identitytoolkit#VerifyPasswordResponse' &&
          // and the REST api used was to sign in
          firebaseMethod === 'signInWithPassword'
        ) {
          // For security, only after login
          // is succesful, log a message to
          // let user know that they are being
          // signed in to protect against brute
          // force attacks on the email input
          alert(
            `
        You are already a member
        -------------------------
        You will now be signed in
        `
          );
        }
        //         setIsSignedUp(true);
        console.log(data);
      })

      .catch(error => {
        // if the email doesn't exist
        // throw the error
        if (error.message === 'EMAIL_EXISTS') {
          // If email used to signup exists
          // try to login instead
          signUp({
            email,
            password,
            firebaseMethod: 'signInWithPassword',
            formState,
            setFormState,
            setIsSignedUp,
          });
        }
      });
  }
};

export default signUp;
