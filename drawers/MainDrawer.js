import React from "react";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginForm";
import NotificationsScreen from "../screens/NotificationsScreen";

const RootDrawer = createDrawerNavigator(
  {
    Notifications: {
      screen: NotificationsScreen
    },
    Login: {
      screen: LoginForm
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

export default class MainDrawer extends React.Component {
  render() {
    return <RootDrawer />;
  }
}
