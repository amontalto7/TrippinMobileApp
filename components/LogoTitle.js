import React from "react";
import { Icon } from "expo";
import { Image } from "react-native";
import { Header } from "react-navigation";

import Colors from "../constants/Colors";

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        // eslint-disable-next-line global-require
        source={require("../assets/images/trippin.png")}
        // style={styles.logoPic}
      />
    );
  }
}

const styles = {
  logoPic: {
    marginTop: 20,
    height: Header.HEIGHT
  }
};
