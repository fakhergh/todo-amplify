import React, { useCallback } from "react";
import { Authenticator, ConfirmSignUp } from "aws-amplify-react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AlwaysOn = (props) => {
  return (
    <div>
      <div>I am always here to show current auth state: {props.authState}</div>
      <button onClick={() => props.onStateChange("signUp")}>
        Show Sign Up
      </button>
    </div>
  );
};

const Auth = function () {
  const onStateChange = useCallback((state) => {
    if (state === "signedIn") {
      /* Do something when the user has signed-in */
    }
  }, []);

  return (
    <Authenticator hideDefault={true} onStateChange={onStateChange}>
      <SignIn authState="signIn" />
      <SignUp authState="signUp" />
      <ConfirmSignUp />
      <AlwaysOn />
    </Authenticator>
  );
};

export default Auth;
