import React, { useCallback } from "react";
import { Authenticator } from "aws-amplify-react";

import { AuthState } from "../constants";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ConfirmSignUp from "./ConfirmSignUp";

const Auth = function ({ history }) {
  const onStateChange = useCallback(
    (state) => {
      if (state === AuthState.SIGNED_IN) {
        history.push("/");
      }
    },
    [history]
  );

  return (
    <div>
      <Authenticator hideDefault={true} onStateChange={onStateChange}>
        <SignIn />
        <SignUp />
        <ConfirmSignUp />
        <ForgotPassword />
        <ResetPassword />
      </Authenticator>
    </div>
  );
};

export default Auth;
