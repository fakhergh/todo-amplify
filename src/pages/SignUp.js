import React from "react";
import { SignUp as BaseSignUp } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import { RegisterForm } from "../views";
import { AuthState } from "../constants";

const styles = {
  signUpButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
};

class SignUp extends BaseSignUp {
  onSubmit = (values) => {
    const data = {
      username: values.username,
      password: values.password,
      attributes: {
        email: values.email,
        phone_number: values.phoneNumber,
      },
    };

    Auth.signUp(data)
      .then((signUpData) => {
        this.props.onStateChange(AuthState.CONFIRM_SIGN_UP, {
          username: signUpData.user.getUsername(),
        });
      })
      .catch((error) => {
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

    return (
      <div>
        <h1>Sign Up</h1>
        <RegisterForm onSubmit={this.onSubmit} />

        <button
          style={styles.signUpButton}
          type="button"
          onClick={this.showSignIn}
        >
          Back to login
        </button>
      </div>
    );
  }
}

export default SignUp;
