import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const screenHeight: any = Dimensions.get("window").width;

const half: number = parseInt(screenHeight) * 0.5 - 42;
const halfIcon: number = parseInt(screenHeight) * 0.5 - 10;

const Navbar = () => {
  return (
    <View style={styles.newProductNavBar}>
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
      <View
        style={{
          flex: 1,
          flexDirection: `row`,
          width: `100%`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <View
          style={{
            flexDirection: `row`,
            width: `50%`,
            gap: 15,
          }}
        >
          <TouchableOpacity
            style={{
              width: `30%`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: `30%`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/offers.png")}
            />
            <Text>Offers</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: `row`,
            width: `50%`,
            justifyContent: `center`,
            gap: 15,
          }}
        >
          <TouchableOpacity
            style={{
              width: `30%`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/wallet.png")}
            />
            <Text>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: `30%`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/settings.png")}
            />
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barChildPosition: {
    width: `100%`,
    position: "absolute",
  },

  iconLayout: {
    height: 24,
    width: 24,
  },

  newProductNavBarChild: {
    top: -26,
    height: 108,
  },
  newProductNavBarItem: {
    top: -51,
    left: half,
    width: 88,
    height: 88,
    position: "absolute",
  },
  vuesaxoutlinescanIcon: {
    top: -25,
    left: halfIcon,
  },

  home: {
    top: 28,
    color: `#0f0f0f`,
    lineHeight: 18,
    fontSize: 12,
    left: 0,
  },
  vuesaxbulkcategoryIcon: {
    left: 4,
    top: 0,
  },

  newProductNavBar: {
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
    width: `100%`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
});

export default Navbar;
