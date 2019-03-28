import React, { Component } from "react";
import {
  List,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";

const URL = `http://192.168.0.5:3001/api/travel_advisories`;

export default class TravelAdvisoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null };
  }

  componentDidMount() {
    return fetch(URL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    let travel_advisories = this.state.dataSource.map(item => {
      return (
        <View key={item.countryIndex} style={styles.item}>
          <Text>{item.country}</Text>
          <Text>Threat Level: {item.level}</Text>
        </View>
      );
    });

    return (
      <ScrollView style={styles.container}>{travel_advisories}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignContent: "center",
    // alignItems: "center",
    textAlign: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
