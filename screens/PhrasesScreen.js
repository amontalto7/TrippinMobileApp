require("dotenv").config();
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TRANSLATOR_TEXT_KEY} from 'react-native-dotenv';
const request = require("request");
const uuidv4 = require("uuid/v4");



// const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;
let phrases = ["Hello", "Good morning", "Please", "How much money"];

//Translate function

function translate(language, phrases) {
  for (let i = 0; i < phrases.length; i++) {

    if (!subscriptionKey) {
      throw new Error("Environment variable for your subscription key is not set.");
    }

    let options = {
      method: "POST",
      baseUrl: "https://api.cognitive.microsofttranslator.com/",
      url: "translate",
      qs: {
        "api-version": "3.0",
        "to": language

      },
      headers: {
        "Ocp-Apim-Subscription-Key": TRANSLATOR_TEXT_KEY,
        "Content-type": "application/json",
        "X-ClientTraceId": uuidv4().toString()
      },
      body: [{
        "text": phrases[i],
      }],
      json: true,
    };

    request(options, function (err, res, body) {
      console.log(JSON.stringify(body, null, 5));
      console.log("--------------------------------");
    });
  }
}

export default class PhrasesScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View> 
        <Text>PHRASES</Text>

      
      </View>
    );
  }
}

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             { key: phrases[0] },
//             { key: phrases[1] },
//             { key: phrases[2] },
//             { key: phrases[3] },

//           ]}
//           renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

// translate("es", phrases);



