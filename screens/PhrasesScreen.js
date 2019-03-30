import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";
import Loader from "../components/Loader";

export default class PhrasesScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Phrases"
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      isReady: true
    };
  }

  componentWillMount() {
    const phrases = this.getPhrases();
  }

  // async getCoordinates() {
  //   console.log("start loading animation");
  // }

  async getPhrases() {
    this.setState({
      loading: true
    });

    try {
      const response = await fetch(
        "https://trippin-api-2019.herokuapp.com/api/phrases_translated",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(responseData => {
          console.log(`Translated data ${responseData}`);
          this.setState({ data: responseData, isReady: true }); // when response came change the status.
        })
        .done();
    } catch (e) {
      return {};
    }

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
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
    const { isReady } = this.state; // check the state if response is ready render view
    if (isReady) {
      return (
        <View style={styles.container}>
          <Loader loading={this.state.loading} />
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // display: "flex",
    // alignItems: "flex-start",
    // paddingTop: 15,
    backgroundColor: "#CCCCCC",
    height: Dimensions.get("window").height,
    width: "100%"
    // paddingTop: 50
  }
});

// translate("es", phrases);

// module.exports = translate;
