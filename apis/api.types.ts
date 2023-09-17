export type SendOTP = {
  phone: string;
};

export type VerifyOTP = {
  phone: string;
  otp: number;
};
