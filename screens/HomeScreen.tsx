import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Hello, Aya!</Text>
          <TouchableOpacity>
            <Text style={styles.headerText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.balance}>
          <Text style={styles.headerText}>Your Wallet Balance is</Text>
          <TouchableOpacity>
            <Image source={require("../assets/info-circle.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: `#003`,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    border: null,
    height: `30%`,
  },
  headerRow: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    width: `90%`,
    marginLeft: `auto`,
    marginRight: `auto`,
    marginTop: 50,
  },
  headerText: {
    color: `white`,
    fontSize: 16,
    fontStyle: `normal`,
    fontWeight: "500",
    lineHeight: 25,
  },
  balance: {
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    marginTop: 30,
    gap: 10,
  },
});

export default HomeScreen;
