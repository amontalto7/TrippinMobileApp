import React, { Component } from "react";
import {
  BackHandler,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View,
  WebView,
  Button,
  Text
} from "react-native";

import { ListItem, SearchBar } from "react-native-elements";
// import { WebView } from "react-native-webview"; // New version of WebView- but doesn't work with Expo

const URL = `https://trippin-api-2019.herokuapp.com/api/travel_advisories`;

export default class TravelAdvisoryScreen extends Component {
  // eslint-disable-next-line no-unused-vars
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
      origData: null,
      noData: null,
      stateText: null
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    // eslint-disable-next-line no-undef
    return fetch(URL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.countriesList,
          origData: [...responseJson.countriesList]
        });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroudColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
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
    const { stateText } = this.state;
    this.searchFilterFunction(stateText);
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

  searchFilterFunction(text) {
    const { dataSource, origData } = this.state;

    let textVar = text;
    this.setState({
      value: null,
      dataSource: [...origData],
      stateText: textVar
    });

    let filteredResults = dataSource.filter(item => {
      const itemData = `${item.country.toUpperCase()}`;
      const textData = textVar.toUpperCase();
      return itemData.includes(textData);
    });

    if (!text || text === "" || dataSource.length === 0) {
      this.setState({
        dataSource: origData
      });
    } else if (
      !Array.isArray(filteredResults) &&
      filteredResults.length === 0
    ) {
      filteredResults = origData;
      textVar = "";
      this.setState({
        dataSource: origData,
        stateText: textVar
      });
    } else if (Array.isArray(filteredResults)) {
      this.setState({
        dataSource: filteredResults
      });
    }
  }

  render() {
    const { isLoading, country, dataSource, noData } = this.state;
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
        {noData ? (
          <Text>NoData</Text>
        ) : (
          <FlatList
            data={[...dataSource]}
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
        )}
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
