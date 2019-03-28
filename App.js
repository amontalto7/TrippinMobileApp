import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import firebase from "firebase";
import { FIREBASE_API_KEY } from "react-native-dotenv";
import DrawerNav from "./navigation/DrawerNav";
import AppNavigator from "./navigation/AppNavigator";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
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

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
