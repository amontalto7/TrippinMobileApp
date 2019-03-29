import PropTypes from "prop-types";
import styles from "./styles.js";
import React from "react";
import { Text, TextInput, View, TouchableHighlight } from "react-native";
// const InputWithButton = ({ onPress, buttonText, editable } = true);

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  console.log(styles);
  return (
    <View>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
