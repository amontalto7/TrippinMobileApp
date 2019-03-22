import React, { Component } from "react";
import { WebView } from "react-native";
import Axios from "axios";
import console = require("console");

const travelAdvisoryApiUrl =
  "http://localhost:3001/api/travel_advisories" ||
  process.env.TravelAdvisoryAPI_URL;
function()

Axios.get(travelAdvisoryApiUrl).then(response => {
    console.log(response)
});

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={["*"]}
        source={{ html: "<h1>Hello world</h1>" }}
      />
    );
  }
}
