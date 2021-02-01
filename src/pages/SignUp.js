import React from "react";
import { SignUp as BaseSignUp } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import { RegisterForm } from "../views";
import { AuthState } from "../constants";
import { Button, Layout } from "antd";

const styles = {
  signUpButton: {
    backgroundColor: "transparent",
    borderWidth: 0
  }
};

class SignUp extends BaseSignUp {
  onSubmit = values => {
    const data = {
      username: values.username,
      password: values.password,
      attributes: {
        email: values.email,
        phone_number: values.phoneNumber
      }
    };

    Auth.signUp(data)
      .then(signUpData => {
        this.props.onStateChange(AuthState.CONFIRM_SIGN_UP, {
          username: signUpData.user.getUsername()
        });
      })
      .catch(error => {
        alert("Sign Up Error");
        console.log("SignIn error: ", error);
      });
  };

  showSignIn = () => {
    this.props.onStateChange(AuthState.SIGN_IN);
  };

  render() {
    if (this.props.authState !== AuthState.SIGN_UP) {
      return null;
    }
    const { Header, Footer, Content } = Layout;

    return (
      <Layout style={{ padding: 30 }}>
        <Header style={{ backgroundColor: "white" }}>
          Please register to use the app
        </Header>
        <Content>
          <RegisterForm onSubmit={this.onSubmit} />
        </Content>
        <Footer>
          <Button
            style={styles.signUpButton}
            type="button"
            onClick={this.showSignIn}
          >
            Back to login
          </Button>
        </Footer>
      </Layout>
    );
  }
}

export default SignUp;
