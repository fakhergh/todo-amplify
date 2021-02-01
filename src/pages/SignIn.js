import React from "react";
import { SignIn as BaseSignIn } from "aws-amplify-react";

class SignIn extends BaseSignIn {
  render() {
    if (this.props.authState === "signIn") {
      return <div>sign in</div>;
    }

    return null;
  }
}

export default SignIn;
