/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/no-string-refs */
import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import t from "tcomb-form-native";
import firebase from "firebase";
import { FIREBASE_API_KEY } from "react-native-dotenv";
import HomeScreen from "./HomeScreen";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: "blue",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    email: {
      error: "Oops, seems like you forgot to enter an email"
    },
    password: {
      error: "Please enter a password",
      secureTextEntry: true
    },
    terms: {
      label: "Agree to Terms"
    }
  },
  stylesheet: formStyles
};

export default class App extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Sign up"
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      terms: false
    };
    this.writeUserData = this.writeUserData.bind(this);
    this.readUserData = this.readUserData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(e) {
  //   this.setState({
  //     email: e.nativeEvent.text
  //   });
  // }
  // handleSubmit() {
  //   console.log(this.state.email);
  // }

  writeUserData = ({ email, password, terms }) => {
    console.log( email);
    firebase
      .database()
      .ref("Users/")
      .push({
        email,
        password,
        terms
      })
      .then(data => {
        // success callback => this could be the data I just wrote
        // console.log("data ", data);
        this.readUserData(email);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  };

  readUserData = () => {
    firebase
      .database()
      .ref("Users/")
      // eslint-disable-next-line func-names
      .once("value", function(snapshot) {
        // console.log(snapshot.val().email);
      });
  };

  handleSubmit() {
    // const { email, password, terms, username } = this.state;
    // console.log('HANDLE SUBMIT', this.state);
    const value = this.refs.form.getValue();
    console.log(value);
    this.setState({ error: "", loading: true });

    // if (email && password && terms && username) {
    this.writeUserData(value);
    {
      this.props.navigation.navigate("Home");
    }
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form ref="form" type={User} options={options} />
        <Button title="Sign Up!" onPress={this.handleSubmit} />
        {/*Button to go to the next activity*/}
        {/* <Button
          title=""
          // Button Title
          onPress={() =>
            this.props.navigation.navigate("Home", {
              JSON_ListView_Clicked_Item: this.state.email
            })
          }
          //On click of the button we will send
          //the data as a Json from here to the Second Screen using navigation prop
        >
          {" "}
          Welcome: {this.state.email}
        </Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
