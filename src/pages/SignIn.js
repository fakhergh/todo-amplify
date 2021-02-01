import React from "react";
import { SignIn as BaseSignIn } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import { LoginForm } from "../views";

const styles = {
  signUpButton: {
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
    this.props.onStateChange("signUp");
  };

  render() {
    if (this.props.authState !== "signIn") {
      return null;
    }

    return (
      <div>
        <LoginForm onSubmit={this.onSubmit} />
        <button
          style={styles.signUpButton}
          type="button"
          onClick={this.showSignUp}
        >
          Don't have account? Sign up
        </button>
      </div>
    );
  }
}

export default SignIn;
