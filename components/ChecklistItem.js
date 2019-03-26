import React from "react";
import { Icon } from "expo";
import { CheckBox } from "react-native-elements";

import Colors from "../constants/Colors";

export default class ChecklistItem extends React.Component {
  render(props) {
    return <CheckBox title={props.item} checked={props.checked} />;
  }
}
