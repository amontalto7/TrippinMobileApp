import React from 'react'
import { Text, View, TextInput } from 'react-native';

const input = (props) => {
  return (
    <View style={styles.viewStyles} >
      <Text style={styles.textStyles}> {props.label} </Text>
      <TextInput value={props.value} style={styles.textInputStyles}
        placeholder={props.placeholder}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText} 
      />
    </View>
  )
}

const styles = {
  viewStyles: {
    margin: 9,
    padding: 9,
    paddingTop: 14,
    borderColor: '#fff',
    height: 50,
    flex: 3,
    flexDirection: "row",
    alignItems: "center"
  },
  textStyles: {
    flex: 1,
    fontSize: 20
  },
  textInputStyles: {
    height: 50,
    flex: 2
  }
}

export default input;
