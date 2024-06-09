import { jwtDecode } from "jwt-decode";
import {
  getAccessTokenFromLocalStore,
  getRefreshTokenFromLocalStore,
} from "../services";

const checkTokenExpiry = (tokenStr, expTime) => {
  let expireTime = expTime || 0;
  if (!expTime || expireTime === 0) {
    try {
      const token = tokenStr
        ? tokenStr
        : getAccessTokenFromLocalStore() || getRefreshTokenFromLocalStore();
      const { exp } = jwtDecode(token || "");
      expireTime = exp;
    } catch (error) {
      expireTime = 0;
    }
  }
  return Date.now() >= expireTime * 1000;
};

export { checkTokenExpiry };
