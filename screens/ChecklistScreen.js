import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon, CheckBox } from "react-native-elements";
import { Constants } from "expo";
import LogoTitle from "../components/LogoTitle";

import "@expo/vector-icons";

export default class ChecklistScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    title: "Checklist"
  };

  state = {
    checked: false
  };

  toggle;

  render() {
    return (
      <ScrollView style={styles.container}>
        <CheckBox
          title="Click Here"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  }
});
