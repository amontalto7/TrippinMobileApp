import PropTypes from 'prop-types';
import { Text, TextInput, View, TouchableHighlight} from "react-native";
import axios from 'axios';
const BASEURL = `https://api.exchangeratesapi.io/latest?base=USD`;
export default class CurrencyConverter extends React.Component {
   state 

   search=()=> {
      axios.get(BASEURL).then(res => {
        // console.log(res.data.rates);
      });
    }
    
    search();
    
    render () {
(
        <View>
        <View>
            <Text>USD</Text><TextInput placeholder="Enter amount"></TextInput>
        </View>
        <View>
            <Text>EUR</Text><TextInput placeholder="Enter amount"></TextInput>
        </View>
        </View>
        )
    }
}