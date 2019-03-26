import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

import t from "tcomb-form-native";
import firebase from "firebase";
import { FIREBASE_API_KEY } from "react-native-dotenv";
// import Database from '../components/Database';

// firebase.initializeApp({
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: "trippin-7b858.firebaseapp.com",
//   databaseURL: "https://trippin-7b858.firebaseio.com",
//   projectId: "trippin-7b858",
//   storageBucket: "trippin-7b858.appspot.com",
//   messagingSenderId: "111072986505"
// });

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
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
      error: "Please enter a password"
    },
    terms: {
      label: "Agree to Terms"
    }
  },
  stylesheet: formStyles
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      terms: false,
      username: ''

    }
    this.writeUserData = this.writeUserData.bind(this);
    this.readUserData = this.readUserData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(e) {
  //   this.setState({
  //     name: e.nativeEvent.text
  //   });
  // }
  // handleSubmit() {
  //   console.log(this.state.email)
  // }
  
  writeUserData = () => {
    const { email, password, terms, username } = this.state;
    console.log('WRITING USER DATA', email);
    firebase
      .database()
      .ref("Users/")
      .set({
        email,
        password,
        terms,
        username
      })
      .then(data => {
        //success callback => this could be the data I just wrote
        console.log("data ", data);
        this.readUserData();
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
      .once("value", function(snapshot) {
        console.log('readUserData SNAPSHOT', snapshot.val());
      });
  };

  handleSubmit() {
    // const { email, password, terms, username } = this.state;
    console.log('HANDLE SUBMIT', this.state);

    this.setState({ error: "", loading: true });

    // if (email && password && terms && username) {
      this.writeUserData();
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <Button title="Sign Up!" onPress={this.handleSubmit} />
        {/* <Database /> */}
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

// <!DOCTYPE html>
// <html lang="en-us">

// <head>

//   <meta charset="UTF-8">
//   <title>Click Button with Firebase!</title>

//   <!-- Firebase JavaScript Link -->
//   <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>

// </head>

// <body>

//   <!-- Text with spanID that gets filled with content -->
//   <h1>Ouch! You've clicked me
//     <span id="click-value"></span> times!</h1>

//   <!-- Button -->
//   <button id="click-button">Click Me!!!!</button>

//   <!-- JQuery -->
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//   <!-- ================================================================================== -->

//   <script>

//     // Initialize Firebase
//     // This is the code we copied and pasted from our app page
//     var config = {
//       apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
//       authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
//       databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
//       storageBucket: "fir-click-counter-7cdb9.appspot.com"
//     };

//     firebase.initializeApp(config);

//     // VARIABLES
//     // --------------------------------------------------------------------------------

//     // Get a reference to the database service
//     var database = firebase.database();

//     // Setting initial value of our click counter variable to 0
//     var clickCounter = 0;

//     // FUNCTIONS + EVENTS
//     // --------------------------------------------------------------------------------

//     // On Click of Button
//     $("#click-button").on("click", function() {

//       // Add to clickCounter
//       clickCounter++;

//       //  Store Click Data to Firebase in a JSON property called clickCount
//       // Note how we are using the Firebase .set() method
//       database.ref().set({
//         clickCount: clickCounter
//       });
//     });

//     // MAIN PROCESS + INITIAL CODE
//     // --------------------------------------------------------------------------------

//     // Using .on("value", function(snapshot)) syntax will retrieve the data
//     // from the database (both initially and every time something changes)
//     // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
//     database.ref().on("value", function(snapshot) {

//       // Then we console.log the value of snapshot
//       console.log(snapshot.val());

//       // Then we change the html associated with the number.
//       $("#click-value").text(snapshot.val().clickCount);

//       // Then update the clickCounter variable with data from the database.
//       clickCounter = snapshot.val().clickCount;

//       // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
//       // Again we could have named errorObject anything we wanted.
//     }, function(errorObject) {

//       // In case of error this will print the error
//       console.log("The read failed: " + errorObject.code);
//     });

//   </script>

// </body>

// </html>
