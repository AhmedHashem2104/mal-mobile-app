import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={[styles.newProductNavBar, styles.zShadowBox]}>
      <Image
        style={[styles.newProductNavBarChild, styles.barChildPosition]}
        resizeMode="cover"
        source={require("../assets/navbar-background.png")}
      />
      <TouchableOpacity>
        <Image
          style={styles.newProductNavBarItem}
          resizeMode="cover"
          source={require("../assets/circle-navbar.png")}
        />
        <Image
          style={[styles.vuesaxoutlinescanIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/circle-navbar-icon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.home01Parent, styles.parentLayout1]}>
        <View style={[styles.homeParent, styles.parentLayout1]}>
          <Text style={styles.home}>Home</Text>
          <Image
            style={[styles.vuesaxbulkcategoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.vuesaxbulkmoneysParent, styles.parentLayout]}
      >
        <Image
          style={[styles.vuesaxbulkawardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/offers.png")}
        />
        <Text style={[styles.offers, styles.offersPosition]}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.vuesaxbulkrepeatCircleParent, styles.parentLayout]}
      >
        <Image
          style={[styles.vuesaxbulkawardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/wallet.png")}
        />
        <Text style={[styles.wallet, styles.offersPosition]}>Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.vuesaxbulksetting2Parent, styles.parentLayout1]}
      >
        <Image
          style={styles.vuesaxbulksetting2Icon}
          resizeMode="cover"
          source={require("../assets/settings.png")}
        />
        <Text style={[styles.offers, styles.offersPosition]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  barChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },

  zShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },

  parentLayout1: {
    height: 46,
    position: "absolute",
  },
  iconPosition: {
    top: 11,
    height: 24,
    width: 24,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  parentLayout: {
    width: 34,
    height: 46,
    top: 12,
    position: "absolute",
  },
  offersPosition: {
    color: `#a6a6a6`,
    top: 28,
    lineHeight: 18,
    fontSize: 12,
    left: 0,
    position: "absolute",
  },

  newProductNavBarChild: {
    top: -26,
    height: 108,
  },
  newProductNavBarItem: {
    top: -31,
    left: 144,
    width: 88,
    height: 88,
    position: "absolute",
  },
  vuesaxoutlinescanIcon: {
    top: -5,
    left: 176,
  },
  home01Icon: {
    left: 34,
  },
  home: {
    top: 28,
    color: `#0f0f0f`,
    lineHeight: 18,
    fontSize: 12,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  vuesaxbulkcategoryIcon: {
    left: 4,
    top: 0,
  },
  homeParent: {
    width: 33,
    height: 46,
    left: 0,
    top: 0,
  },
  home01Parent: {
    width: 33,
    height: 46,
    top: 12,
    left: 20,
  },
  vuesaxbulkmoneysIcon: {
    top: 12,
    left: 111,
    display: "none",
  },
  vuesaxbulkawardIcon: {
    left: 5,
    top: 0,
  },
  offers: {
    textAlign: "left",
  },
  vuesaxbulkmoneysParent: {
    left: 106,
  },
  vuesaxbulkrepeatCircleIcon: {
    left: 251,
    top: 12,
    display: "none",
  },
  wallet: {
    textAlign: "center",
  },
  vuesaxbulkrepeatCircleParent: {
    left: 246,
  },
  analyticsIcon: {
    left: 320,
  },
  userIcon: {
    left: 312,
  },
  vuesaxbulksetting2Icon: {
    left: 11,
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  vuesaxbulksetting2Parent: {
    left: 308,
    width: 47,
    top: 12,
  },
  newProductNavBar: {
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    height: 65,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default Navbar;
