const signUp = ({
  email,
  password,
  firebaseMethod,
  state,
  setState,
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

  // If email and password are updated/valid
  if (email && password) {
    // Try to signup
    fetch(URL, INIT, HEADERS)
      // Parse JSON from response
      .then(response => response.json())

      // use data object to verify signup
      .then(data => {
        // Check for error signing up
        if (data.error) {
          // If there is any error with either
          // signup or signin, this will exit
          // and setSignedUp will be skipped
          throw data.error;
        } else if (
          data.kind === 'identitytoolkit#VerifyPasswordResponse' &&
          firebaseMethod === 'signInWithPassword'
        ) {
          // For security, only after login
          // with user email succeeds
          // Log a message with a timer to let
          // user know that they are being
          // signed in
          alert(
            `
You are already a member
We'll sign you in instead
`
          );
        }
        setIsSignedUp(true);

        // return successful signup object
        return data;
      })

      .catch(error => {
        // If email used to signup exists
        if ((error.message = 'EMAIL_EXISTS')) {
          // try to login
          signUp({
            email,
            password,
            firebaseMethod: 'signInWithPassword',
            state,
            setState,
            setIsSignedUp,
          });
        } else {
          setState({
            ...state,
            error: true,
            disabled: true,
          });
        }
      });

    setState({
      ...state,
      disabled: true,
      submitting: true,
    });
  }
};

export default signUp;
