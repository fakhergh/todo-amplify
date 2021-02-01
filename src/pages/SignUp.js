import React from "react";
import { SignUp as BaseSignUp } from "aws-amplify-react";

class SignUp extends BaseSignUp {
  render() {
    if (this.props.authState === "signUp") {
      return <div>sign up</div>;
    }

    return null;
  }
}

export default SignUp;
