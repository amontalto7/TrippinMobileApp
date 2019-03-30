import React from "react";
import { Icon } from "expo";
import { StyleSheet, View, Text, Picker } from "react-native";

import Colors from "../constants/Colors";

export default class LanguagePicker extends React.Component {
  state = {
    language: null
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Picker
          selectedValue={this.state.language}
          style={{
            height: 50,
            width: 150
          }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="French" value="fr" />
        </Picker>
        <Text> ⇄ </Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="French" value="fr" />
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
        </Picker>
      </View>
    );
  }
}
