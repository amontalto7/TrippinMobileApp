import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import axios from "axios";
import Location from "./Location";
import { ACCUWEATHER_API_KEY } from "react-native-dotenv";
const BASEURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCUWEATHER_API_KEY}=${Location}`;
export default class WeatherContainer extends Component {
  state = {
    locationKey: "",
    img: "",
    num: null,
    temp: ""
  };

  search = () => {
    axios.get(BASEURL).then(res => {
      locationKey = res.data[0].Key;
      this.setState({ locationKey: res.data[0].Key });

      this.weatherSearch(res.data[0].Key);
    });
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
  componentDidMount() {
    this.search();
  }
  // renderWeatherIcon(num) {
  //   switch (num) {
  //     case 1:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/01.jpg")} />
  //       );
  //     case 2:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/02.png")} />
  //       );
  //     case 3:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/03-s.png")} />
  //       );
  //     case 4:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 4:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 5:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );

  //     case 6:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );

  //     case 7:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 8:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 9:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 10:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 11:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 12:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 13:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );

  //     case 14:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 15:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 16:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 17:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 18:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 19:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 20:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 21:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 22:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 23:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );

  //     case 24:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 25:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 26:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 27:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 28:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 29:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 30:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 31:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 32:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 33:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //     case 34:
  //       return (
  //         <Image source={require("../assets/images/weatherIcons/04-s.png")} />
  //       );
  //   }
  // }
  render() {
    return (
      <View>
        <Text>{this.state.temp} Weather</Text>
        {/* <Image>{this.renderWeatherIcon(this.state.num)}</Image> */}
      </View>
    );
  }
}
