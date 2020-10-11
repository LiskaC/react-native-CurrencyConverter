import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  input: {
    flex: 1,
    padding: 10,
    color: colors.textLight,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  );
};
