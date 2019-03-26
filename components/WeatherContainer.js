import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import axios from "axios";
import { ACCUWEATHER_API_KEY } from "react-native-dotenv";
import Location from "./Location";

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
          temp: `${data.data[0].Temperature.Imperial.Value}
              ${data.data[0].Temperature.Imperial.Unit}`,
          num: data.data[0].WeatherIcon
        });
      })
      .catch(err => console.log(err));
  };

  renderWeatherIcon(num) {
    let number = 0;
    console.log("------" + this.state.num);
    num === null ? console.log("hi") : console.log((number = num));
    number < 10 ? console.log(`0${number}`) : console.log(number);
    return <Image source={require(`../assets/images/weatherIcons/01-s.png`)} />;
  }

  render() {
    return (
      <View>
        <Text>{this.state.temp} Weather</Text>
        {this.renderWeatherIcon(this.state.num)}
      </View>
    );
  }
}
