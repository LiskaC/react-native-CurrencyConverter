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
    backgroundColor: "#838dfd",
    padding: 10,
    borderRadius: 5,
  },
  buttonIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
  }
});


export const Button = ({text, onPress}) => {
return (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Image source={require("../assets/images/reverse.png")} style={styles.buttonIcon}/>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)
};