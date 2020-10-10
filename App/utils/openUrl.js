import React from "react";
import { Linking, Alert } from "react-native";

export const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert(
      "Sorry, something went wrong.",
      "Please try again whilst praying to the universe."
    );
  });
};
