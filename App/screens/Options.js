import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";

import { RowItem } from "../components/RowItem";

const styles = StyleSheet.create({
  app: {
    paddingTop: 40,
    paddingBottom: 40,
  },
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
});

export default () => {
  return (
    <SafeAreaView style={styles.app}>
      <RowItem
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
        onPress={() => alert("todo!")}
        label="Theme"
      />

      <View style={styles.separator} />

      <RowItem
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        onPress={() => alert("maybe!")}
        label="Thing 2"
      />

      <View style={styles.separator} />

      <RowItem
        rightIcon={<Entypo name="chevron-down" size={20} color={colors.blue} />}
        onPress={() => alert("yeahhhhh!")}
        label="Thing 3"
      />
    </SafeAreaView>
  );
};
