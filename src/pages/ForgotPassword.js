import React from "react";
import { Auth } from "aws-amplify";
import { ForgotPassword as BaseForgotPassword } from "aws-amplify-react";

import { ForgotPasswordForm } from "../views";
import { AuthState } from "../constants";

class ForgotPassword extends BaseForgotPassword {
  onSubmit = (values) => {
    Auth.forgotPassword(values.username)
      .then(() => {
        this.props.onStateChange(AuthState.RESET_PASSWORD, values);
      })
      .catch((error) => {
        console.log(error);
        alert("Sending code fail");
      });
  };

  showSignIn = () => {
    this.props.onStateChange(AuthState.SIGN_IN);
  };

  render() {
    if (this.props.authState !== AuthState.FORGOT_PASSWORD) return null;

    return (
      <div>
        <h1>Reset Password</h1>
        <ForgotPasswordForm onSubmit={this.onSubmit} />
        <button onClick={this.showSignIn}>Back to Sign In</button>
      </div>
    );
  }
}

export default ForgotPassword;
