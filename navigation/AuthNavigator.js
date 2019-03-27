/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
// you can also import from @react-navigation/native
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

export default class AppContainer extends React.Component {
  render() {
    /* In the root component we are rendering the app navigator */
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
});

class AuthenticationScreen extends React.Component {
  static router = AuthenticationNavigator.router;

  render() {
    return (
      <AuthenticationNavigator navigation={this.props.navigation} />
    );
  }
}

// const AppNavigator = createSwitchNavigator({
//   Auth: AuthenticationScreen, // This screen renders a navigator!
//   Home: HomeScreen,
// });

// eslint-disable-next-line no-undef
// const AppContainer = createAppContainer(AppNavigator);