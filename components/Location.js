import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import Axios from "axios";
import { ACCUWEATHER_API_KEY } from "react-native-dotenv";

export default class Location extends Component {
  // state = {
  //   lat: null,
  //   lon: null,
  //   // location: null,
  //   city: null,
  //   message: "..."
  // };

  // componentDidMount() {
  //   this.findCoordinates();
  // }

  // findCoordinates = () => {
  //   // Get latitude / longitude based on your current location
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       // const location = JSON.stringify(position);
  //       // this.setState({ location });
  //       this.setState({
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude
  //       });

  //       const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${
  //         process.env.ACCUWEATHER_API_KEY
  //       }&q=${this.state.lat}%2C${this.state.lon}`;

  //       console.log(url);

  //       Axios.get(url)
  //         .then(response => {
  //           this.setState({
  //             city: response.data.AdministrativeArea.EnglishName,
  //             message: `Welcome to ${
  //               response.data.AdministrativeArea.EnglishName
  //             }!`
  //           });
  //           // console.log(response.data.AdministrativeArea.EnglishName);
  //         })
  //         .catch(err => {
  //           console.log("API error:");
  //           console.log(err);
  //         });

  //       // console.log(url);
  //     },
  //     error => Alert.alert(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={this.findCoordinates}> */}
        <Text style={styles.welcome}>{this.props.message}</Text>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginBottom: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
