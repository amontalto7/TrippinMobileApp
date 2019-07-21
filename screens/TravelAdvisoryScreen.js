import React, { Component } from "react";
import {
  BackHandler,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View,
  WebView,
  Button
} from "react-native";

import { ListItem, SearchBar } from "react-native-elements";
// import { WebView } from "react-native-webview"; // New version of WebView- but doesn't work with Expo

const URL = `https://trippin-api-2019.herokuapp.com/api/travel_advisories`;
let origData = fetch(URL)
  .then(response => response.json())
  .then(responseJson => {
    // console.log(responseJson);
    this.setState({
      isLoading: false,
      dataSource: responseJson.countriesList
    });
  })
  .catch(err => console.log(err));

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
    this.state = {
      isLoading: true,
      dataSource: null,
      country: undefined,
      searchterm: undefined
    };
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

  searchFilterFunction = text => {
    this.setState({
      value: text,
      dataSource: origData
    });

    const filteredResults = this.state.dataSource.filter(item => {
      const itemData = `${item.country.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: filteredResults
    });
  };

  renderHeader = () => {
    const { value } = this.state;
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => {
          this.searchFilterFunction(text);
        }}
        autoCorrect={false}
        value={value}
      />
    );
  };

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
    const { isLoading, country, dataSource } = this.state;
    origData = dataSource;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    if (country) {
      return (
        <View style={{ flex: 1 }}>
          <WebView style={{ flex: 1 }} source={{ html: country.content }} />
          <Button title="Back" onPress={() => this.clearCountry()} />
        </View>
      );
    }
    // const travelAdvisories = dataSource.map(item => {
    //   return (
    //     <ListItem key={} style={styles.item}>
    //       <Text style={styles.text}>{item.country}</Text>
    //       <Text onPress={() => this.showCountry(item)} />
    //       <Text></Text>
    //     </ListItem>
    //   );
    // });

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.country}`}
              subtitle={` Threat Level: ${item.level} `}
              onPress={() => this.showCountry(item)}
            />
          )}
          keyExtractor={item => item.country}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
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
