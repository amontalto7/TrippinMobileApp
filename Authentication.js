import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginScreen from "./screens/LoginScreen";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false, 
      firebaseInitialized: false

    };

    this.initializeFirebase = this.initializeFirebase.bind(this);
  }


  initializeFirebase() {
    if(!this.state.firebaseInitialized){
      // if(firebase.app()){
        // console.log("firebase loaded");
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginScreen />
      </View>
    );
  }
}

export default App;
