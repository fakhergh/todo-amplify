import React from "react";
import { Auth } from "aws-amplify";
import { ConfirmSignUp as BaseConfirmSignUp } from "aws-amplify-react";

import { ConfirmSignUpForm } from "../views";
import { AuthState } from "../constants";

class ConfirmSignUp extends BaseConfirmSignUp {
  onSubmit = (values) => {
    Auth.confirmSignUp(this.props.authData?.username, values.code)
      .then(() => {
        this.props.onStateChange(AuthState.SIGN_IN, {
          message: "Your account is verified",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Confirm Sign Up failed");
      });
  };

  render() {
    if (this.props.authState !== AuthState.CONFIRM_SIGN_UP) return null;

    return (
      <div>
        <h1>Confirm Sign Up</h1>
        <ConfirmSignUpForm
          username={this.props.authData?.username}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default ConfirmSignUp;
