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

  // componentWillMount() {
  //   this.checkFirebase = setInterval(this.initializeFirebase, 100); 
  // }

  // componentWillUnMount() {
  //   clearInterval(this.checkFirebase);
  // }


  initializeFirebase() {
    if(!this.state.firebaseInitialized){
      // if(firebase.app()){
        console.log("firebase loaded");
      //   firebase.initializeApp({
      //     apiKey: "AIzaSyClgUPqnDDpbVXrvcUmpbe48koNFPKCItU",
      //     authDomain: "trippin-7b858.firebaseapp.com",
      //     databaseURL: "https://trippin-7b858.firebaseio.com",
      //     projectId: "trippin-7b858",
      //     storageBucket: "trippin-7b858.appspot.com",
      //     messagingSenderId: "111072986505"
      //   });
      //   firebase.auth().onAuthStateChanged(user => {
      //     if (user) {
      //       this.setState({ loggedIn: true });
      //     } else {
      //       this.setState({ loggedIn: false });
      //     }
      //   });
  //       this.setState({ firebaseInitialized:true }, () => {clearInterval(this.checkFirebase)});
  //     // }
  //   }else{
  //     clearInterval(this.checkFirebase)
  //   }
   
  // }

  

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
