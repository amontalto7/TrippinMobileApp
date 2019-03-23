import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const RootDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Notifications: {
      screen: NotificationsScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    contentComponent: props => (
      <View>
        <Text>Trippin App</Text>
        <DrawerItems {...props} />
        <Text>Custom Footer</Text>
      </View>
    )
  }
);

export default class DrawerNav extends React.Component {
  render() {
    return <RootDrawer />;
  }
}
