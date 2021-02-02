import React from "react";
import { Auth } from "aws-amplify";
import { RequireNewPassword } from "aws-amplify-react";

import ResetPasswordForm from "../views/ResetPasswordForm";
import { AuthState } from "../constants";

class ResetPassword extends RequireNewPassword {
  onSubmit = (values) => {
    const { username } = this.props.authData;

    Auth.forgotPasswordSubmit(username, values.code, values.password)
      .then(() =>
        this.props.onStateChange(AuthState.SIGN_IN, {
          message: "Your password is changed",
        })
      )
      .catch(console.log);
  };

  render() {
    if (this.props.authState !== AuthState.RESET_PASSWORD) return null;

    return (
      <div>
        <h1>Reset Password</h1>
        <ResetPasswordForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default ResetPassword;
