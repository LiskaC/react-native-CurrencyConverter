import React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, Button } from "react-native";
import {format} from "date-fns";

import colors from "../constants/colors";

import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width * 0.5,
    height: screen.width * 0.5,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  header :{
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  body: {
    color: colors.white,
  },
});

export default () => {
  const baseCurrency = USD;
  const conversionRate = 0.343;
  const quoteCurrency = GBP;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.blue}
      ></StatusBar>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

<Text style={styles.header}>Currency Converter</Text>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("helllllloooo")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("helllllloooo")}
        editable={false}
      />

      <Text style={styles.bodyText}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, "MMMM do, yyyy")}`}
        </Text>

        <Button text="Reverse Currencies" onPress={() => alert("todo!")}/>
    </View>
  );
};
