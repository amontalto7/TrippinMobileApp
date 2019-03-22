import React from "react";
import { Icon } from "expo";
import { Image } from "react-native";

import Colors from "../constants/Colors";

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("../assets/images/logo.png")}
        style={{ height: 30 }}
      />
    );
  }
}
