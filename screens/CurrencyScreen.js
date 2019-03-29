import React, { Component } from "react";
import { View, Text } from "react-native";
import InputWithButton from "../components/TextInput/InputWithButton";
const TEMP_BASE_CURRENCY = "USD";
const TEMP_CURRENT_CURRENCY = "EUR";
const BASE = 100;
const EXCHANGE = 88.76;

class CurrencyScreen extends Component {
  // state = {
  //   BASE: null,
  //   conversion: null
  // };
  // CurrencySearch = () => {
  //   axios.get(BASEURL).then(res => {
  //     this.setState({
  //       Base: res.data.rates.USD,
  //       conversion: res.data.rates.EUR
  //     });
  //   });
  // };
  handlePressBaseCurrency = () => {
    console.log("press base");
  };

  handlePressExchangeCurrency = () => {
    console.log("press quote");
  };

  handleTextChange = text => {
    console.log("change text", text);
  };
  render() {
    return (
      <View>
        <Text>CURRENCY CONVERTER</Text>
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={BASE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_CURRENT_CURRENCY}
          onPress={this.handlePressExchangeCurrency}
          editable={false}
          defaultValue={EXCHANGE}
        />
      </View>
    );
  }
}

export default CurrencyScreen;
