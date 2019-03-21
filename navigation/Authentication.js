import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
// import Header from '.screens/Header';
// import LoginScreen from '../screens/LoginScreen';
// import Config from './config';

export default class Authentication extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    let config = {
      apiKey: 'AIzaSyClgUPqnDDpbVXrvcUmpbe48koNFPKCItU',
    authDomain: "trippin-7b858.firebaseapp.com",
    databaseURL: "https://trippin-7b858.firebaseio.com",
    projectId: "trippin-7b858",
    storageBucket: "trippin-7b858.appspot.com",
    messagingSenderId: "111072986505"
    };

    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderComponent() {
    if (this.state.loggedIn) {
      return (<Button
        title="Sign out"
        onPress={() => firebase.auth().signOut()} />)
    } else {
      return (
        <LoginScreen />
      )
    }
  }
  render() {
    return (
      <View>
        <LoginScreen title='Authenticator' />
        {this.renderComponent()}
      </View>
    );
  }
}

export {Authentication};