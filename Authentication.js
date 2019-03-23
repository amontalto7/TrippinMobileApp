import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';




class App extends Component {
    state = { loggedIn: false };
  
    componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyClgUPqnDDpbVXrvcUmpbe48koNFPKCItU",
        authDomain: "trippin-7b858.firebaseapp.com",
        databaseURL: "https://trippin-7b858.firebaseio.com",
        projectId: "trippin-7b858",
        storageBucket: "trippin-7b858.appspot.com",
        messagingSenderId: "111072986505"
      });
  
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }
  
    render() {
      return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
      );
    }
  }
  
  export default App;