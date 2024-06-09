import axios from "axios";
import { checkTokenExpiry } from "../utils/checks";
import {
  clearAllTokens,
  // getAccessTokenFromLocalStore,
  getRefreshTokenFromLocalStore,
} from "../services";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const apiService = async (
  method = "post",
  url,
  requestData = {},
  protectedRoute = false,
  headers = {},
  params = {}
) => {
  if (protectedRoute) {
    // const accessToken = getAccessTokenFromLocalStore();
    const refreshToken = getRefreshTokenFromLocalStore();

    // if (!accessToken || checkTokenExpiry(accessToken)) {
    if (!refreshToken || checkTokenExpiry(refreshToken)) {
      clearAllTokens();
      // window.location.href = "/auth";
      return;
    }
    // }

    if (refreshToken) {
      headers["bearerauth"] = refreshToken;
    }
  }

  if (typeof url !== "string") {
    throw new Error("URL must be a string");
  }

  const { data } = await axios({
    method,
    url,
    data: requestData,
    baseURL: process.env.REACT_APP_BASE_URL || "",
    headers,
    params,
  });
  return data;
};

export default apiService;
