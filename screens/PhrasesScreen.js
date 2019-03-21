import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Axios from "axios";
// import { TRANSLATOR_TEXT_KEY } from "react-native-dotenv";
// const request = require("request");
// const uuidv4 = require("uuid/v4");

require("../utils/languageRecognition");
// const request = require("request");
// replace request with Axios

/* Checks to see if the subscription key is available
as an environment variable. If you are setting your subscription key as a
string, then comment these lines out.
If you want to set your subscription key as a string, replace the value for
the Ocp-Apim-Subscription-Key header as a string. */

// const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;
const subscriptionKey = "76d35fa20cc84ccbaeb7bf7a1cc48f86";

const phrases = ["Hello", "Good morning", "Please", "How much money"];

// Translate function

function translate(language) {
  for (i = 0; i < phrases.length; i++) {
    if (!subscriptionKey) {
      throw new Error(
        "Environment variable for your subscription key is not set."
      );
    }

    const options = {
      // method: "POST",
      baseUrl: "https://api.cognitive.microsofttranslator.com/",
      url: "translate",
      qs: {
        "api-version": "3.0",
        to: language
      },
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
        // ,"Content-type": "application/json",
        // "X-ClientTraceId": uuidv4().toString()
      },
      body: [
        {
          text: phrases[i]
        }
      ],
      json: true
    };

    // request(options, function(err, res, body) {
    //   console.log(JSON.stringify(body, null, 5));
    //   console.log("--------------------------------");
    // });

    axios.post(options, function(err, res, body) {
      console.log(JSON.stringify(body, null, 5));
      console.log("--------------------------------");
    });
  }
}

export default class PhrasesScreen extends React.Component {
  static navigationOptions = {
    title: "Phrases"
  };

  render() {
    return (
      <View>
        <Text>PHRASES</Text>
        <Text>foo is equal to ${process.env.foo}</Text>
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
    backgroundColor: "#fff"
  }
});

// translate("es", phrases);

// module.exports = translate;
