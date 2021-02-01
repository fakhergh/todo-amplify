import React from "react";
import { SignIn as BaseSignIn } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import { LoginForm } from "../views";
import { AuthState } from "../constants";
import { Layout, Button } from "antd";

const styles = {
  button: {
    backgroundColor: "transparent",
    borderWidth: 0
  }
};

class SignIn extends BaseSignIn {
  onSubmit = values => {
    Auth.signIn(values).catch(error => {
      alert("Sign In Error");
      console.log("SignIn error: ", error);
    });
  };

  showSignUp = () => {
    this.props.onStateChange(AuthState.SIGN_UP);
  };

  showForgotPassword = () => {
    this.props.onStateChange(AuthState.FORGOT_PASSWORD);
  };

  render() {
    if (this.props.authState !== AuthState.SIGN_IN) {
      return null;
    }
    const { Header, Footer, Content } = Layout;
    return (
      <Layout style={{ padding: 30 }}>
        <Header style={{ backgroundColor: "white" }}>
          Please login to use the app
        </Header>
        <Content>
          <LoginForm onSubmit={this.onSubmit} />
        </Content>
        <Footer>
          <Button
            style={styles.signUpButton}
            type="button"
            onClick={this.showSignUp}
          >
            Don't have account? Sign up
          </Button>
          <button
            style={styles.button}
            type="button"
            onClick={this.showForgotPassword}
          >
            Forgot password?
          </button>

          {!!this.props.authData?.message && (
            <p style={{ color: "green" }}>{this.props.authData?.message}</p>
          )}
        </Footer>
      </Layout>
    );
  }
}

export default SignIn;
