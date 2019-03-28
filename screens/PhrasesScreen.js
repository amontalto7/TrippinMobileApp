import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem } from 'react-native-elements';
// import console = require("console");
// import Axios from "axios";
// import console = require("console");
// import console = require("console");
// const request = require("request");
// const uuidv4 = require("uuid/v4");
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

export default class PhrasesScreen extends React.Component {
  static navigationOptions = {
    title: "Phrases"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isReady: true
    };
  }

  componentWillMount() {
    fetch('https://trippin-api-2019.herokuapp.com/api/phrases_translated', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(`Translated data ${responseData}`);
        this.setState({ data: responseData, isReady: true }); //when response came change the status.
      })
      .done();
  }

  renderItem = ({ item }) => (
    <ListItem
      title={item.og_phrase}
      subtitle={item.tr_phrase}
      // leftAvatar={{
      //   // source: item.avatar_url && { uri: item.avatar_url },
      //   title: item.name[0]
      // }}
    />
  );

  render() {
    const { isReady } = this.state; //check the state if response is ready render view
    if (isReady) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.data}
          renderItem={this.renderItem}
        />
      );
    }
    return <View />;
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