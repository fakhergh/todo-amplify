import React from "react";
import { Auth } from "aws-amplify";
import { ForgotPassword as BaseForgotPassword } from "aws-amplify-react";

import { ForgotPasswordForm } from "../views";
import { AuthState } from "../constants";
import { Layout, Button, Typography } from "antd";

class ForgotPassword extends BaseForgotPassword {
  onSubmit = values => {
    Auth.forgotPassword(values.username)
      .then(() => {
        this.props.onStateChange(AuthState.RESET_PASSWORD, values);
      })
      .catch(error => {
        console.log(error);
        alert("Sending code fail");
      });
  };

  showSignIn = () => {
    this.props.onStateChange(AuthState.SIGN_IN);
  };

  render() {
    if (this.props.authState !== AuthState.FORGOT_PASSWORD) return null;
    const { Title } = Typography;
    return (
      <Layout style={{ padding: 30 }}>
        <Title>Reset Password</Title>
        <ForgotPasswordForm onSubmit={this.onSubmit} />
        <Button onClick={this.showSignIn}>Back to Sign In</Button>
      </Layout>
    );
  }
}

export default ForgotPassword;
