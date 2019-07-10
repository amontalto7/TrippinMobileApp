import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Alert
} from "react-native";
import { ListItem } from "react-native-elements";
import Loader from "../components/Loader";
import LanguagePicker from "../components/LanguagePicker";
import Input from "../components/Input";

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
      style={{
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth
      }}
      title={item.og_phrase}
      subtitle={item.tr_phrase}
      // leftAvatar={{
      //   // source: item.avatar_url && { uri: item.avatar_url },
      //   title: item.name[0]
      // }}
    />
  );

  quickTranslate = () => {
    Alert.alert("Coming soon!");
  };

  render() {
    const { isReady } = this.state; // check the state if response is ready render view
    if (isReady) {
      return (
        <View style={styles.container}>
          <LanguagePicker />

          <Loader loading={this.state.loading} />
          <Input
            placeholder="Quick translate"
            onSubmitEditing={this.quickTranslate}
          />
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
    backgroundColor: "#EEEEEE",
    height: Dimensions.get("window").height,
    width: "100%"
    // paddingTop: 50
  }
});
