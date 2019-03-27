import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import { Ionicons as Icon } from "@expo/vector-icons";
import Axios from "axios";
import { ACCUWEATHER_API_KEY } from "react-native-dotenv";
import LogoTitle from "../components/LogoTitle";
import MainDrawer from "../drawers/MainDrawer";
import Location from "../components/Location";

import { MonoText } from "../components/StyledText";
import WeatherContainer from "../components/WeatherContainer";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <LogoTitle />,
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("DrawerToggle");
          console.log(navigation);
        }}
      >
        <Icon
          name="ios-menu"
          side={30}
          iconStyle={{
            padding: 15,
            paddingTop: Platform.OS === "ios" ? 13 : 7
          }}
        />
      </TouchableOpacity>
    )
  });

  state = {
    lat: null,
    lon: null,
    // location: null,
    city: null,
    message: "New York"
  };

  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = () => {
    // Get latitude / longitude based on your current location
    navigator.geolocation.getCurrentPosition(
      position => {
        // const location = JSON.stringify(position);
        // this.setState({ location });
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });

        const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_API_KEY}&q=${
          this.state.lat
        }%2C${this.state.lon}`;

        console.log(url);

        Axios.get(url)
          .then(response => {
            this.setState({
              city: response.data.AdministrativeArea.EnglishName,
              message: `Welcome to ${
                response.data.AdministrativeArea.EnglishName
              }!`
            });
            // console.log(response.data.AdministrativeArea.EnglishName);
          })
          .catch(err => {
            console.log("API error:");
            console.log(err);
          });

        // console.log(url);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/robot-dev.png")
                  : require("../assets/images/robot-prod.png")
              }
              style={styles.welcomeImage}
            />
            <Location message={this.state.message} />
            <WeatherContainer />
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
