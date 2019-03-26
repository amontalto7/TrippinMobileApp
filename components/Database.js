// import React from 'react';
// import ReactNative from 'react-native';
// import firebase from 'firebase';


// class Database extends Component {
//     state = {
//       email: "",
//       password: "",
//       terms: false,
//       username: ""
//     };
  
//     onButtonPress() {
//       const { email, password, terms, username } = this.state;
  
//       this.setState({ error: "", loading: true });

//       writeUserData(email,password,terms, username){
//         firebase.database().ref('Users/').set({
//             email,
//             password,
//             terms,
//             username
//         }).then((data)=>{
//             //success callback
//             console.log('data ' , data)
//         }).catch((error)=>{
//             //error callback
//             console.log('error ' , error)
//         })
//     }
  
//     readUserData() {
//         firebase.database().ref('Users/').once('value', function (snapshot) {
//             console.log(snapshot.val())
//         });
//     }