import React, { Component } from "react";
import {
  BackHandler,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
  WebView,
  Button
} from "react-native";
// import { WebView } from "react-native-webview"; // New version of WebView- but doesn't work with Expo

const URL = `https://trippin-api-2019.herokuapp.com/api/travel_advisories`;

export default class TravelAdvisoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Alerts"
    // headerRight: (
    //   <Button onPress={() => navigation.navigate("Alerts")} title="Refresh" />
    // )
  });

  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: null, country: undefined };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    return fetch(URL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.countriesList
        });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    return true;
  };

  clearCountry() {
    this.setState({
      country: undefined
    });
    // this.props.navigation.goBack("TravelAdvisoryScreen");
  }

  showCountry(country) {
    this.setState({
      country
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    if (this.state.country) {
      return (
        <View style={{ flex: 1 }}>
          <WebView
            style={{ flex: 1 }}
            source={{ html: this.state.country.content }}
          />
          <Button title="Back" onPress={() => this.clearCountry()} />
        </View>
      );
    }
    const travel_advisories = this.state.dataSource.map(item => {
      return (
        <View key={item.country} style={styles.item}>
          <Text style={styles.text}>{item.country}</Text>
          <Text onPress={() => this.showCountry(item)} />
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
    flexDirection: "column",
    flex: 0.5,
    bottom: 0,
    padding: 0,
    paddingBottom: 50,
    alignContent: "center",
    // alignItems: "center",
    textAlign: "center"
  },

  text: {
    fontWeight: "bold"
  },
  item: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#DDD",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
