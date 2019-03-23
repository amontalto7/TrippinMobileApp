import React, { Component } from "react";
import { ListItem } from "react-native-elements";

export const List = ({ countries }) => {
  let ListView = countries.map(item => {
    return <ListItem key={item.country} title={item.title} />;
  });

  return ListView;
};
