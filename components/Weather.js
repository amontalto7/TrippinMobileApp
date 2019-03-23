import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

import Axios from "axios";
import { ACCUWEATHER_API_KEY } from "react-native-dotenv";

export default class Location extends Component {
  state = {
    lat: null,
    lon: null,
    // location: null,
    city: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Weather info goes here</Text>
      </View>
    );
  }
}
