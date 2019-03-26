// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
// import LoginScreen from "../screens/LoginScreen";
// import SignupScreen from "../screens/SignupScreen";

// class LoginScreenPg extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {/* <Text>Home Screen</Text> */}
//         <LoginScreen />
//         <Button
//           title="Not signed up yet, click here"
//           onPress={() => {
//             this.props.navigation.dispatch(StackActions.reset({
//               index: 0,
//               actions: [
//                 NavigationActions.navigate({ routeName: 'Details' })
//               ],
//             }))
//           }}
//         />
//       </View>
//     );
//   }  
// }

// class SignupScreenPg extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <SignupScreen />
//         {/* <Text>Details Screen</Text> */}
//       </View>
//     );
//   }  
// }

// const AppNavigator = createStackNavigator({
//   Login: {
//     screen: LoginScreenPg,
//   },
//   Signup: {
//     screen: SignupScreenPg,
//   },
// }, {
//     initialRouteName: 'Login',
// });

// export default createAppContainer(AppNavigator);