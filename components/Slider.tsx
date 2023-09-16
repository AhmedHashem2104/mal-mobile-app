import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

// Calculate 85% of the screen width
const eightyFivePercentWidth = (85 / 100) * screenWidth;

const CardSeparator = () => {
  return <View style={{ width: 10 }} />; // Adjust the width to set the desired gap
};

const Card = () => (
  <View style={styles.card}>
    <Image
      style={styles.leftImgBackground}
      source={require("../assets/Polygon1.png")}
    />
    <Image
      style={styles.rightImgBackground}
      source={require("../assets/Polygon2.png")}
    />
    <View style={styles.cardLeft}>
      <View style={styles.cardHeader}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/sliderLogo.png")} />
        </View>
        <View style={styles.cardHeaderDiscount}>
          <Text style={styles.cardHeaderDiscountText}>5% Discount</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardBodyText}>
          Get 5% cashback on your whole amount
        </Text>
        <TouchableOpacity style={styles.offerButtonContainer}>
          <Text style={styles.offerButton}>Get this offer </Text>
          <AntDesign name="arrowright" size={12} color="white" />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.cardRight}>
      <Image source={require("../assets/sliderCardLogo.png")} />
    </View>
  </View>
);

const Slider = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Recently offers</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={Card}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          ItemSeparatorComponent={CardSeparator}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: `100%`,
    alignItems: `center`,
  },
  headerRow: {
    flexDirection: `row`,
    width: `90%`,
    justifyContent: `space-between`,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25,
  },
  cardContainer: {
    width: "95%",
    marginLeft: `auto`,
  },
  card: {
    width: eightyFivePercentWidth,
    flexDirection: `row`,
    borderRadius: 20,
    backgroundColor: `#003`,
    marginTop: 8,
    overflow: `hidden`,
  },
  leftImgBackground: {
    position: `absolute`,
    left: 0,
  },
  rightImgBackground: {
    position: `absolute`,
    right: 0,
  },
  cardHeader: {
    flexDirection: `row`,
    width: `100%`,
    marginTop: 10,
  },
  cardBody: {
    width: `90%`,
    marginLeft: `auto`,
    marginRight: `auto`,
    marginTop: 10,
  },
  logoContainer: {
    height: 40,
  },
  cardHeaderDiscount: {
    borderRadius: 8,
    backgroundColor: `#EA5455`,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginTop: `auto`,
  },
  cardHeaderDiscountText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
    fontStyle: "normal",
    color: `white`,
  },
  cardBodyText: {
    fontSize: 18,
    fontWeight: "500",
    color: `white`,
  },
  cardLeft: {
    width: `55%`,
  },
  cardRight: {
    justifyContent: `center`,
    alignItems: `center`,
    width: `45%`,
  },
  offerButtonContainer: {
    flexDirection: `row`,
    gap: 8,
    alignItems: `center`,
    marginTop: 20,
  },
  offerButton: {
    color: `white`,
    fontSize: 12,
    fontWeight: "400",
  },
});

export default Slider;
