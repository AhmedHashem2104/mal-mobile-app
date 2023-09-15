import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { primaryColor } from "../utils/colors";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ellipse1}
        source={require("../assets/Ellipse1.png")}
      />
      <Image source={require("../assets/logoSplash.png")} />
      <Image
        style={styles.ellipse2}
        source={require("../assets/Ellipse2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#003`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  ellipse1: {
    width: `100%`,
    position: `absolute`,
    top: 0,
  },
  ellipse2: {
    width: `100%`,
    position: `absolute`,
    bottom: 0,
  },
});

export default SplashScreen;
