import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }: any) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChange = (text: string) => {
    setDisabled(text ? false : true);
    setPhoneNumber(text);
  };

  const handleSubmit = async () => {
    setDisabled(true);
    navigation.push("Verification");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} />
        <Text style={styles.gettingStarted}>Getting Started</Text>
        <Text style={styles.title}>Phone Number</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={handleChange}
          style={styles.input}
          keyboardType="number-pad"
        />

        <TouchableOpacity
          disabled={disabled}
          style={[
            styles.button,
            {
              backgroundColor: `rgba(0, 0, 51, ${disabled ? 0.3 : 1})`,
            },
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>By creating an account you agree to our</Text>
        <Text style={styles.footerTermsAndConditions}>Terms & Conditions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `90%`,
    marginLeft: `auto`,
    marginRight: `auto`,
  },
  header: {
    alignItems: `center`,
    position: `absolute`,
    top: 50,
    gap: 15,
    width: `100%`,
  },
  footer: {
    position: `absolute`,
    width: `100%`,
    bottom: 20,
    alignItems: `center`,
    gap: 10,
  },
  gettingStarted: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "500",
    color: "#0f0f0f",
    marginTop: 10,
  },
  title: {
    alignSelf: "stretch",
    lineHeight: 18,
    fontWeight: "500",
    color: "#0f0f0f",
    textAlign: "left",
    marginTop: 10,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `#C5C6CC`,
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 16,
    alignSelf: `stretch`,
  },
  button: {
    height: 50,
    width: `100%`,
    borderRadius: 12,
    border: `none`,
    backgroundColor: `#003`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  footerTermsAndConditions: {
    color: `black`,
    fontWeight: `bold`,
  },
});

export default RegisterScreen;
