import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
} from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  buttonText: {

  }
});


export const Button = ({text, onPress}) => {
return (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Image style={styles.buttonIcon}/>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)
};