import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useEffect, useRef, useState, useContext } from "react";
import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import apis from "../apis/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextAPI } from "../context/AuthContext";

const VerificationScreen = ({ navigation, route }: any) => {
  const [otpCode, setOTPCode] = useState<string>("");
  const [isPinReady, setIsPinReady] = useState<boolean>(false);
  const inputRef = useRef<TextInput | null>(null);
  const maximumCodeLength = 4;
  const boxArray = new Array(maximumCodeLength).fill(0);
  const [phoneNumber] = useState(route.params.phoneNumber);
  const [isError, setIsError] = useState<boolean>(false);
  const { setAuthenticated }: any = useContext(AuthContextAPI);

  const boxDigit = (_: any, index: number) => {
    const emptyInput = "";
    const digit = otpCode[index] || emptyInput;

    return (
      <View
        style={[
          styles.SplitBoxes,
          isError && otpCode.length === 4 && { borderColor: `red` },
        ]}
        key={index}
      >
        <Text style={styles.SplitBoxText}>
          {digit && <Octicons name="dot-fill" size={24} color="black" />}
        </Text>
      </View>
    );
  };

  const handleCheckVerification = async () => {
    if (parseInt(otpCode) !== 1234) {
      setIsError(true);
      return;
    }
    await apis
      .verifyOTP({
        phone: phoneNumber,
        otp: parseInt(otpCode),
      })
      .then(async (res) => {
        setIsError(false);
        await AsyncStorage.setItem("token", res.data.token);
        setAuthenticated(true);
        navigation.reset({
          index: 0, // The index of the screen to navigate to (0 is the first screen)
          routes: [{ name: "Home" }], // The new stack of screens to reset to
        });
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    if (isPinReady) {
      handleCheckVerification();
    }
  }, [isPinReady]);

  useEffect(() => {
    // update pin ready status
    setIsPinReady(otpCode.length === maximumCodeLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [otpCode]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} />
        <Text style={styles.gettingStarted}>Enter 4-digits code</Text>
        <Text style={styles.title}>
          We sent the OTP code in an SMS to xxx xxx4868.
        </Text>
        <View
          style={{
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <View style={styles.SplitOTPBoxesContainer}>
            {boxArray.map(boxDigit)}
          </View>
          <TextInput
            style={{
              width: 300,
              borderColor: `#e5e5e5`,
              borderWidth: 1,
              borderRadius: 5,
              padding: 15,
              position: `absolute`,
              opacity: 0,
            }}
            keyboardType="number-pad"
            value={otpCode}
            onChangeText={setOTPCode}
            maxLength={maximumCodeLength}
            ref={inputRef}
          />
        </View>
        <View style={styles.resendRowOTP}>
          <Text style={styles.resend}>
            Resend OTP after <Text style={styles.timeout}>00:59</Text>
          </Text>
          <Text style={styles.attempt}>5 attempts left</Text>
        </View>
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
    fontSize: 14,
    lineHeight: 22,
    color: "#686767",
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `#C5C6CC`,
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 16,
    alignSelf: `stretch`,
    marginTop: 10,
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
  SplitOTPBoxesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  SplitBoxes: {
    borderColor: "#b4b4b4",
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    minWidth: 60,
  },
  SplitBoxText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
  },
  resendRowOTP: {
    flex: 1,
    flexDirection: `row`,
    width: `90%`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  resend: {
    fontSize: 14,
    lineHeight: 22,
    color: "#9c9c9c",
  },
  attempt: {
    fontSize: 14,
    lineHeight: 22,
    color: "#9c9c9c",
  },
  timeout: {
    color: `#262626`,
  },
});

export default VerificationScreen;
