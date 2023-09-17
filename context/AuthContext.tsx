import { View, Text } from "react-native";
import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import apis from "../apis/apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  children: React.ReactNode;
}

type ContextAPITypes = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  logout: () => Promise<void>; // Add the logout function type
};

export const AuthContextAPI = createContext<ContextAPITypes | null>(null);

const AuthContext: React.FC<AuthContextProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await apis.me();
        setAuthenticated(true);
      } catch (err) {
        // Handle the error, e.g., redirect to a login screen or show an error message
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  const logout = async () => {
    try {
      await apis.logout().then(async () => await AsyncStorage.clear());
      setAuthenticated(false);
    } catch (err) {
      // Handle the logout error
    }
  };

  return (
    <AuthContextAPI.Provider
      value={{
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
        logout,
      }}
    >
      {children}
    </AuthContextAPI.Provider>
  );
};

export default AuthContext;
