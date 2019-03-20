import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
  return <Text style={styles.viewStyles}>{props.title}</Text>
};
const styles = {
  viewStyles : {
    margin: 9,
    padding: 9,
    fontSize: 32,
    shadowColor: '#ddd',
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: '#fff',
    borderBottomWidth: 4,
  }
}
export default Header;