import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View>
        <Text>Sign-In</Text>
        <Input
             placeholder='Email'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
        />
        <Input
             placeholder='Password'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
        />
        <Button title="Sign-in" />

        <Button title="Google button" />
        
        <Button title="Facebook button" />
            <Text>Register</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
