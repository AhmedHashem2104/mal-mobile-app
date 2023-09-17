import instance from "../config/axios";
import { SendOTP, VerifyOTP } from "./api.types";

export default {
  sendOTP: async (data: SendOTP) => {
    return await instance.post(`/auth/otp`, data);
  },
  verifyOTP: async (data: VerifyOTP) => {
    return await instance.post(`/auth/otp/verify`, data);
  },
  logout: async () => {
    return await instance.post(`/auth/logout`);
  },
  me: async () => {
    return await instance.get(`/auth/me`);
  },
};
