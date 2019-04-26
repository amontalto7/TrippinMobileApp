import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from "../components/common";

class LoginScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Log in"
  };

  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: true
    });
    {
      this.props.navigation.navigate("Home");
    }
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed",
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      // return <Spinner size="small" />;
    }

    return (
      <Button title="Go to home page" onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  //   <Button
  //   title="Go to Signup screen"
  //   // eslint-disable-next-line react/destructuring-assignment
  //   // eslint-disable-next-line react/prop-types
  //   onPress={() => this.props.navigation.navigate("Home")}
  // > Sign Up Here!
  // </Button>

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="abcd@email.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
        <CardSection>
          <Button
            title="Go to Signup screen"
            // eslint-disable-next-line react/destructuring-assignment
            // eslint-disable-next-line react/prop-types
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            {" "}
            Sign Up Here!
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginScreen;
