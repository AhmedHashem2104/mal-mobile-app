import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { primaryColor } from "./utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import { useState, useEffect } from "react";

import AuthContext from "./context/AuthContext";
import Navigator from "./components/Navigation/Navigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <AuthContext>
      <View style={styles.container}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
          ) : (
            <Navigator />
          )}
          {/* Rest of your app code */}
        </NavigationContainer>
        <StatusBar style="light" />
      </View>
    </AuthContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});
