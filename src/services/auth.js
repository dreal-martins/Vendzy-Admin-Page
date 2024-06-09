import apiService from "./api";

const loginService = (data) => {
  return apiService("post", "admin/auth/a/login", data, false);
};

const forgotPasswordService = (data) => {
  return apiService(data, "admin/auth/a/forgot/password");
};

const verifyResetPasswordOtpService = (data) => {
  return apiService(data, "admin/auth/a/token/verify");
};

const resetPasswordService = (data) => {
  return apiService(data, "admin/auth/a/password/new/create");
};

export {
  loginService,
  forgotPasswordService,
  verifyResetPasswordOtpService,
  resetPasswordService,
};
