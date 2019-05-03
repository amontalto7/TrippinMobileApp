// @flow
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop:40,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#f8f8f8',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

export { CardSection };
