import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// import console = require("console");
// import Axios from "axios";
// import console = require("console");
// import console = require("console");
// const request = require("request");
// const uuidv4 = require("uuid/v4");

export default class PhrasesScreen extends React.Component {
  static navigationOptions = {
    title: "Phrases"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isReady: false
    };
  }

  componentWillMount() {
    fetch('http://localhost:3001/api/phrases_translated', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(response);
        this.setState({ data: responseData, isReady: true }); //when response came change the status.
      })
      .done();
  }

  render() {
    const { isReady } = this.state; //check the state if response is ready render view
    if (isReady)
      return (
        <View>
          <Text>PHRASES</Text>
          <Text>foo is equal to ${this.state.data}</Text>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

// translate("es", phrases);

// module.exports = translate;
