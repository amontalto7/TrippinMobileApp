import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import PhrasesScreen from "../screens/PhrasesScreen";
// import LinksScreen from "../screens/LinksScreen";
import ChecklistScreen from "../screens/ChecklistScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import CurrencyScreen from "../screens/CurrencyScreen"
import TravelAdvisoryScreen from "../screens/TravelAdvisoryScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
});

LoginStack.navigationOptions = {
  tabBarLabel: "Login",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-log-in" : "md-log-in"}
    />
  )
};

const PhrasesStack = createStackNavigator({
  Phrases: PhrasesScreen
});

PhrasesStack.navigationOptions = {
  tabBarLabel: "Phrases",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-swap" : "md-swap"}
    />
  )
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: "Links",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-link" : "md-link"}
//     />
//   )
// };

const ChecklistStack = createStackNavigator({
  Links: ChecklistScreen
});

ChecklistStack.navigationOptions = {
  tabBarLabel: "Pack",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-checkbox" : "md-checkbox"}
    />
  )
};

const AlertStack = createStackNavigator({
  Alerts: TravelAdvisoryScreen
});
AlertStack.navigationOptions = {
  tabBarLabel: "Alerts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-alert" : "md-alert"}
    />
  )
};

const CurrencyStack = createStackNavigator({
  Currency: CurrencyScreen
});

CurrencyStack.navigationOptions = {
  tabBarLabel: "Currency",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cash" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LoginStack,
  PhrasesStack,
  ChecklistStack,
  // LinksStack,
  AlertStack,
 CurrencyStack
});
