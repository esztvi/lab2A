import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Greeting = (props) => {
  return <Text>Hello {props.nominee}. Today the weather is {props.weather}</Text>;
};
export default Greeting;
