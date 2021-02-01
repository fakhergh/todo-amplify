import React, { useCallback } from "react";
import { Authenticator } from "aws-amplify-react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = function ({ history }) {
  const onStateChange = useCallback(
    (state) => {
      if (state === "signedIn") {
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
      </Authenticator>
    </div>
  );
};

export default Auth;
