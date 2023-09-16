import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const CallUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.leftSideContainer}>
          <Text style={styles.title}>We’re here to help you</Text>
          <Text style={styles.description}>
            Contact us for more help or inquories
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Get Help</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Image source={require("../assets/CallUsIcon.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `row`,
    alignItems: `center`,
    backgroundColor: `white`,
    marginTop: 30,
    width: `90%`,
    marginLeft: `auto`,
    marginRight: `auto`,
    borderRadius: 15,
    padding: 20,
    marginBottom: 100,
  },
  leftSide: {
    width: `60%`,
  },
  rightSide: {
    width: `40%`,
  },
  leftSideContainer: {
    gap: 8,
  },
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: `center`,
    alignItems: `center`,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: `#003`,
    width: `50%`,
  },
  buttonText: {
    fontWeight: "400",
    fontSize: 12,
    fontStyle: `normal`,
    color: `white`,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    color: `#575656`,
    fontSize: 12,
    fontWeight: "300",
  },
});

export default CallUs;
