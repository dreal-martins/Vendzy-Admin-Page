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
  requestData = null,
  protectedRoute = false,
  headers = {},
  baseURL = process.env.REACT_APP_BASE_URL || ""
) => {
  if (protectedRoute) {
    // const accessToken = getAccessTokenFromLocalStore();
    const refreshToken = getRefreshTokenFromLocalStore();

    // if (!accessToken || checkTokenExpiry(accessToken)) {
    if (!refreshToken || checkTokenExpiry(refreshToken)) {
      clearAllTokens();
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
    baseURL,
    headers,
  });
  return data;
};

export default apiService;
