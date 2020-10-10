import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 20,
    color: colors.text,
  },
});

export const RowItem = ({ rightIcon, label }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>{label}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};
