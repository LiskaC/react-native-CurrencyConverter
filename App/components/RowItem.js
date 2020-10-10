import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "green",
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

export const RowItem = ({ rightIcon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;
