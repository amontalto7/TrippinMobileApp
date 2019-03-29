import React, { Component } from "react";
import axios from 'axios'; 
import { View, Text } from "react-native";
import InputWithButton from "../components/TextInput/InputWithButton";
const BASEURL = "https://api.exchangeratesapi.io/latest?base=USD"
const TEMP_BASE_CURRENCY = "USD";
const TEMP_CURRENT_CURRENCY = "EUR";
const BASE = 100;
const EXCHANGE = 88.76;

class CurrencyScreen extends Component {
  state = {
    BASE: null,
    conversion: null,
    change: null,
    text:null
  };
  CurrencySearch = () => {
    axios.get(BASEURL).then(res => {
     
      this.setState({
        
        Base: res.data.rates.USD,
        conversion: res.data.rates.EUR
      });

      console.log(this.state.Base, this.state.conversion);
    });
  };
  handlePressBaseCurrency = () => {
    console.log("press base");
  };

  handlePressExchangeCurrency = () => {
    this.CurrencySearch()
    console.log('press exchange');
    console.log(this.state.text+ 'hi');
    change = this.state.text * this.state.conversion
    console.log(change+'yo')
    this.setState({change:change})
      
    
  };

  handleTextChange = text => {
 this.setState({text:text})
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
        buttonText = {TEMP_CURRENT_CURRENCY }
          onPress={this.handlePressExchangeCurrency}
          editable={false}
          defaultValue={EXCHANGE}
        /><Text>{this.state.change}</Text>
      </View>
    );
  }
}

export default CurrencyScreen;
