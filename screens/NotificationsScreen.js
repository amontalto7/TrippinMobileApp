import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Axios from "axios";

export default class PhrasesScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Notifications"
  };

  render() {
    return (
      <View>
        <Text>Notifications</Text>
      </View>
    );
  }
}
