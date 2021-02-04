import React from "react";
import { Auth } from "aws-amplify";
import { ConfirmSignUp as BaseConfirmSignUp } from "aws-amplify-react";

import { ConfirmSignUpForm } from "../views";
import { AuthState } from "../constants";
import { Layout } from "antd";
import Title from "antd/lib/typography/Title";

class ConfirmSignUp extends BaseConfirmSignUp {
  onSubmit = values => {
    Auth.confirmSignUp(this.props.authData?.username, values.code)
      .then(() => {
        this.props.onStateChange(AuthState.SIGN_IN, {
          message: "Your account is verified"
        });
      })
      .catch(error => {
        console.log(error);
        alert("Confirm Sign Up failed");
      });
  };

  render() {
    if (this.props.authState !== AuthState.CONFIRM_SIGN_UP) return null;

    return (
      <Layout style={{ padding: 30 }}>
        <Title>Confirm Sign Up</Title>
        <ConfirmSignUpForm
          username={this.props.authData?.username}
          onSubmit={this.onSubmit}
        />
      </Layout>
    );
  }
}

export default ConfirmSignUp;
