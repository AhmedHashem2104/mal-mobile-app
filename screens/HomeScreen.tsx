import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerBackground}
          source={require("../assets/EllipseHeader.png")}
        />
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Hello, Aya!</Text>
          <TouchableOpacity>
            <Text
              style={styles.headerText}
              onPress={() =>
                navigation.reset({
                  index: 0, // The index of the screen to navigate to (0 is the first screen)
                  routes: [{ name: "Register" }], // The new stack of screens to reset to
                })
              }
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.balance}>
          <Text style={styles.headerText}>Your Wallet Balance is</Text>
          <TouchableOpacity>
            <Image source={require("../assets/info-circle.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.amount}>
          <Text style={styles.headerTextAmount}>SAR</Text>
          <Text style={styles.headerAmount}>100</Text>
        </View>
      </View>
      <View style={styles.invoiceContainer}>
        <View style={styles.leftInvoice}>
          <View style={styles.invoiceText}>
            <Text style={styles.invoiceText}>
              Scan invoice QR code and get your
            </Text>
            <Text style={styles.invoiceCachback}>CASHBACK</Text>
          </View>
          <TouchableOpacity style={styles.invoiceButton}>
            <Text style={styles.invoiceButtonText}>Know More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightInvoice}>
          <Image source={require("../assets/invoiceImg.png")} />
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
  amount: {
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    marginTop: 10,
    gap: 9,
  },
  headerTextAmount: {
    fontSize: 12,
    fontWeight: "400",
    color: `white`,
  },
  headerAmount: {
    fontSize: 24,
    fontWeight: "500",
    color: `white`,
  },
  invoiceContainer: {
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    backgroundColor: `white`,
    borderRadius: 15,
    marginLeft: `auto`,
    marginRight: `auto`,
    width: `90%`,
    marginTop: -50,
    paddingVertical: 25,
    paddingHorizontal: 12,
  },
  leftInvoice: {
    paddingLeft: 25,
    width: `60%`,
  },
  rightInvoice: {
    width: `40%`,
  },
  invoiceText: {
    flexDirection: `column`,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: 18,
    fontStyle: `normal`,
    color: `#0F0F0F`,
  },
  invoiceCachback: {
    fontWeight: "800",
    lineHeight: 25,
    fontSize: 18,
    fontStyle: `normal`,
    textTransform: `uppercase`,
    color: `#0F0F0F`,
  },
  invoiceButton: {
    width: `70%`,
    height: 40,
    justifyContent: `center`,
    alignItems: `center`,
    borderRadius: 12,
    backgroundColor: `#003`,
    marginTop: 10,
  },
  invoiceButtonText: {
    color: `white`,
    fontWeight: "400",
  },
  headerBackground: {
    position: `absolute`,
    width: `60%`,
    height: `100%`,
    right: 0,
  },
});

export default HomeScreen;
