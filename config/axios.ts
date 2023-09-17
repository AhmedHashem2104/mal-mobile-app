import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://ngbnolwylc.execute-api.us-east-1.amazonaws.com/api/v1",
});

// Add an interceptor to set the Authorization header
instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // Handle error, e.g., token not found in AsyncStorage
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
