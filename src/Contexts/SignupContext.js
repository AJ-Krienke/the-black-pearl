import { createContext } from 'react';

const SignupContext = createContext({
  isSignedUp: false,
  setIsSignedUp: () => {},
  secureToken: null,
  setSecureToken: () => {},
});

export default SignupContext;
