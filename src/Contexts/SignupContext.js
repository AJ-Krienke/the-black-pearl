import { createContext } from 'react';

const SignupContext = createContext({
  isSignedUp: false,
  setIsSignedUp: () => {},
});

export default SignupContext;
