import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";

import { RowItem, RowSeparator } from "../components/RowItem";
import { openUrl } from "../utils/openUrl";

const styles = StyleSheet.create({
  app: {
    paddingTop: 40,
    paddingBottom: 40,
  },
});

export default () => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <RowItem
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => openUrl("todo!")}
          label="Theme"
        />

        <RowSeparator />

        <RowItem
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openUrl("todo!")}
          label="Thing 2"
        />

        <RowSeparator />

        <RowItem
          rightIcon={
            <Entypo name="chevron-down" size={20} color={colors.blue} />
          }
          onPress={() => alert("yeahhhhh!")}
          label="Thing 3"
        />

        <RowSeparator />

        <RowItem
          rightIcon={
            <Entypo name="chevron-down" size={20} color={colors.blue} />
          }
          onPress={() => alert("yeahhhhh!")}
          label="HELLO ROBERTA"
        />

        <RowSeparator />

        <RowItem
          rightIcon={
            <Entypo name="chevron-down" size={20} color={colors.blue} />
          }
          onPress={() => alert("yeahhhhh!")}
          label="KEEP GOING"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
