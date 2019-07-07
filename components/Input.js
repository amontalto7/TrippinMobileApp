import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class Input extends Component {
  state = {
    text: ""
  };

  onChangeText = text => this.setState({ text });

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props;
    const { text } = this.state;

    if (!text) return; // Don't submit if empty

    onSubmitEditing(text);
    this.setState({ text: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    height: 40,
    marginTop: -10,
    fontSize: 18,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
