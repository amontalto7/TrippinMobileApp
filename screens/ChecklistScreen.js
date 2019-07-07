import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import { Constants } from "expo";
import Axios from "axios";
import LogoTitle from "../components/LogoTitle";
import Input from "../components/Input";

import "@expo/vector-icons";

export default class ChecklistScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Checklist"
  };

  state = {
    checklist: [],
    isReady: false
  };

  componentWillMount() {
    this.getChecklist();
  }

  componentDidUpdate() {
    this.getChecklist();
  }

  renderItem = ({ item }) => (
    <CheckBox
      title={item.item}
      checked={item.checked}
      onPress={() => this.setState({ checked: !checked })}
    />
  );

  getChecklist = async () => {
    const res = await Axios.get(
      "http://trippin-api-2019.herokuapp.com/api/checklist"
    );
    const { data } = res;

    this.setState({ checklist: data, isReady: true });
  };

  toggleItem = (id, value) => {
    Axios.put(`http://trippin-api-2019.herokuapp.com/api/checkitem/${id}`, {
      checked: value
    }).then(res => console.log(res.data));
    // const { data } = res;
    // console.log(`DATA ${data}`);
  };

  addChecklistItem = text => {
    Axios.post("http://trippin-api-2019.herokuapp.com/api/addchecklist", {
      item: text
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  handleCheck = id => {
    let checkListCopy = [...this.state.checklist];
    checkListCopy = checkListCopy.map(checkboxitem => {
      if (checkboxitem._id === id) {
        checkboxitem.checked = !checkboxitem.checked;
        this.toggleItem(id, checkboxitem.checked);
        return checkboxitem;
      }
      return checkboxitem;
    });
    // console.log(checkListCopy);
    this.setState({ checklist: checkListCopy });
  };

  handleDelete = id => {
    Axios.delete(
      `http://trippin-api-2019.herokuapp.com/api/delchecklist/${id}`
    ).then(res => console.log(res.data));
  };

  _onLongPress = (id, text) => {
    Alert.alert("Delete item:", `"${text}"?`, [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => this.handleDelete(id) }
    ]);
  };

  render() {
    const { isReady, checklist } = this.state;
    if (isReady) {
      // console.log("checklist: ", checklist);

      return (
        <View style={styles.container}>
          <Input
            placeholder="Add an item"
            onSubmitEditing={this.addChecklistItem}
            style={styles.inputBox}
          />

          <ScrollView contentContainerStyle={styles.contentContainer}>
            {checklist.map(checklistItem => (
              <CheckBox
                key={checklistItem._id}
                title={checklistItem.item}
                checked={checklistItem.checked}
                onPress={() => this.handleCheck(checklistItem._id)}
                onLongPress={() =>
                  this._onLongPress(checklistItem._id, checklistItem.item)
                }
              />
            ))}
          </ScrollView>
        </View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  contentContainer: {}
});
