import React, { Component } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import InputWithButton from "../components/TextInput/InputWithButton";

const BASEURL = "https://api.exchangeratesapi.io/latest?base=USD";
const TEMP_BASE_CURRENCY = "USD";
const TEMP_CURRENT_CURRENCY = "EUR";
const BASE = 100;
const EXCHANGE = 88.76;

class CurrencyScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#ACDDFE"
    },
    title: "Currency"
  };

  state = {
    BASE: null,
    conversion: null,
    change: null,
    text: null
  };

  CurrencySearch = () => {
    axios.get(BASEURL).then(res => {
      this.setState({
        Base: res.data.rates.USD,
        conversion: res.data.rates.EUR
      });

      // console.log(this.state.Base, this.state.conversion);
    });
  };

  handlePressBaseCurrency = () => {
    // console.log("press base");
  };

  handlePressExchangeCurrency = () => {
    this.CurrencySearch();
    change = this.state.text * this.state.conversion;
    fixedChange = change.toFixed(2);
    this.setState({ change: fixedChange });
  };

  handleTextChange = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Currency Converter</Text>
        <Text style={styles.currency}>$ USD ⇄ EUR €</Text>
        <InputWithButton
          style={styles.currency}
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={BASE.toString()}
          // keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          style={styles.currency}
          buttonText={TEMP_CURRENT_CURRENCY}
          onPress={this.handlePressExchangeCurrency}
          editable={false}
          defaultValue={
            this.state.change === null ? EXCHANGE.toString() : this.state.change
          }
        />
      </View>
    );
  }
}

export default CurrencyScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  title: {
    alignItems: "center",
    paddingBottom: 20,
    fontSize: 30,
    color: "blue",
    textAlign: "center"
  },
  currency: {
    alignItems: "center",
    paddingBottom: 10,
    fontSize: 20,
    // color: "green",
    textAlign: "center"
  }
});
