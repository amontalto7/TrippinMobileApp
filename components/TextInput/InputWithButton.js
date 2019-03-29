import PropTypes from "prop-types";
import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";


const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;
    const containerStyles = [styles.container];
    if (editable === false) {
      containerStyles.push(styles.containerDisabled);
    }

  return (
    <View>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
        <Text>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput  {...props}  />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};
const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    backgroundColor: "#fff",
    width: "90%",
    height: 48,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 11
    //   paddingTop: 15,
    //   backgroundColor: "#CCCCCC",
    //   width: "100%",
    //   paddingTop: 50
  },
  containerDisabled: {
    backgroundColor: "#FF0000"
  },
  buttonContainer: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 16,
    color: "#777"
  },
  input: {
    flex: 1,
    zIndex:99,
    fontSize: 18,
    paddingHorizontal: 8,
    color: "green",
    width: 90,
    height:90
  },
  border: {
    height: 50,
    backgroundColor: "#AAA"
  }
});

export default InputWithButton;
