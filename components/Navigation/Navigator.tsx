import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import VerificationScreen from "../../screens/VerificationScreen";
import { AuthContextAPI } from "../../context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { loading, authenticated }: any = useContext(AuthContextAPI);
  if (loading) return;
  return (
    !loading &&
    (!authenticated ? (
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: `red`,
            },
          }}
        />
      </Stack.Navigator>
    ))
  );
};

export default Navigator;
