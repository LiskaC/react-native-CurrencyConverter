import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Dimensions, 
  Text, 
  ScrollView } from "react-native";
import {format} from "date-fns";

import colors from "../constants/colors";

import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import {KeyboardSpacer} from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    alignItems: "center",
  },
  content: {
    paddingTop: screen.height * 0.2,
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
  bodyText: {
    color: colors.white,
  },
});

export default () => {
  const baseCurrency = "USD";
  const conversionRate = 0.343;
  const quoteCurrency = "GBP";
  const date = new Date();

  const [ scrollEnabled, setScrollEnabled ] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.blue}
      ></StatusBar>

      <View style={styles.content}>

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
        value="1jhghg3"
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

      <KeyboardSpacer 
      onToggle={keyboardIsVisible => setScrollEnabled(keyboardIsVisible)} />
      </View>
      </ScrollView>
    </View>
  );
};
