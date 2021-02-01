import React from "react";
import { SignUp as BaseSignUp } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import { RegisterForm } from "../views";

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
        console.log("signUpData: ", signUpData);
      })
      .catch((error) => {
        alert("Sign Up Error");
        console.log("SignIn error: ", error);
      });
  };

  showSignIn = () => {
    this.props.onStateChange("signIn");
  };

  render() {
    if (this.props.authState !== "signUp") {
      return null;
    }

    return (
      <div>
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
