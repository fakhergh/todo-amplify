import React from "react";
import { Auth } from "aws-amplify";
import { RequireNewPassword } from "aws-amplify-react";

import ResetPasswordForm from "../views/ResetPasswordForm";
import { AuthState } from "../constants";
import { Layout, Typography } from "antd";

class ResetPassword extends RequireNewPassword {
  onSubmit = values => {
    const { username } = this.props.authData;

    Auth.forgotPasswordSubmit(username, values.code, values.password)
      .then(() =>
        this.props.onStateChange(AuthState.SIGN_IN, {
          message: "Your password is changed"
        })
      )
      .catch(console.log);
  };

  render() {
    if (this.props.authState !== AuthState.RESET_PASSWORD) return null;
    const { Title } = Typography;

    return (
      <Layout style={{ padding: 30 }}>
        <Title>Reset Password</Title>
        <ResetPasswordForm onSubmit={this.onSubmit} />
      </Layout>
    );
  }
}

export default ResetPassword;
