import PropTypes from "prop-types";
import React from "react";
import { Text, TextInput, View, TouchableHighlight, StyleSheet } from "react-native";
// const InputWithButton = ({ onPress, buttonText, editable } = true);

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;
//   const containerStyles = [styles.container];
//   if (editable === false) {
//     containerStyles.push(styles.containerDisabled);
//   }


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
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      width: "90%",
      height: 48,
      borderRadius: 4,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 11,
    //   paddingTop: 15,
    //   backgroundColor: "#CCCCCC",
    //   width: "100%",
    //   paddingTop: 50
    },
    containerDisabled: {
      backgroundColor: "#999"
    },
    buttonContianer: {
      height: 48,
      alignHeight: "center",
      justifyContent: "center",
      backgroundColor: "#ff"
    },
    buttonText: {
      fontWeight: "600",
      fontSize: 20,
      paddingHorizontal: 16,
      color: "#AAA"
    },
    input: {
      height: 48,
      flex: 1,
      fontSize: 18,
      paddingHorizontal: 8,
      color: "#AAA"
    },
    border: {
      height: 48,
      backgroundColor: "#123"
    }
  });
  

  

export default InputWithButton;
