import React from "react";
import { SignIn as BaseSignIn } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import { LoginForm } from "../views";
import { AuthState } from "../constants";

const styles = {
  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
};

class SignIn extends BaseSignIn {
  onSubmit = (values) => {
    Auth.signIn(values).catch((error) => {
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

    return (
      <div>
        <h1>Sign In</h1>
        <LoginForm onSubmit={this.onSubmit} />
        <button style={styles.button} type="button" onClick={this.showSignUp}>
          Don't have account? Sign up
        </button>
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
      </div>
    );
  }
}

export default SignIn;
