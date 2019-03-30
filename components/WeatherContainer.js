import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ACCUWEATHER_API_KEY } from "react-native-dotenv";
import Location from "./Location";
import weatherIcons from "../assets/images/weatherIcons/weatherIcons";

export default class WeatherContainer extends Component {
  state = {
    locationKey: "",
    img: "",
    num: null,
    temp: ""
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    const BASEURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCUWEATHER_API_KEY}&q=11211`;
    // console.log(BASEURL)

    axios
      .get(BASEURL)
      .then(res => {
        locationKey = res.data[0].Key;
        this.setState({ locationKey: res.data[0].Key });

        this.weatherSearch(res.data[0].Key);
      })
      .catch(err => console.log(err));
  };

  weatherSearch = locationKey => {
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ACCUWEATHER_API_KEY}`
      )
      .then(data => {
        console.log(data.data[0].Temperature.Imperial.Value);
        this.setState({
          temp: `${data.data[0].Temperature.Imperial.Value} ${
            data.data[0].Temperature.Imperial.Unit
          }`,
          num: data.data[0].WeatherIcon
        });
        console.log(this.state.temp);
      })
      .catch(err => console.log(err));
  };

  renderWeatherIcon(num) {
    return <Image source={weatherIcons[num]} style={styles.weatherImage} />;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.num && this.renderWeatherIcon(this.state.num)}
        <Text>
          Current temperature:
          <Text style={styles.temperature}> {this.state.temp}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  temperature: {
    fontSize: 20,
    fontWeight: "bold"
  },
  weatherImage: {
    width: 60,
    height: 60
  }
});
