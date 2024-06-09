import Cookies from "js-cookie";

const saveTokenToLocalStore = (accessToken, refreshToken, exp) => {
  //   // if (!accessToken || !refreshToken) return;
  if (!refreshToken) return;

  let expires = 1;
  if (exp) {
    const hours = parseInt(exp.replace("h", ""), 10);
    if (!isNaN(hours)) {
      expires = hours / 24;
    }
  }
  if (expires > 0) {
    Cookies.set("access_token", accessToken, {
      secure: true,
      expires,
    });
    Cookies.set("refresh_token", refreshToken, {
      secure: true,
      expires,
    });
  }
};

const getAccessTokenFromLocalStore = () => {
  return Cookies.get("access_token");
};

const getRefreshTokenFromLocalStore = () => {
  return Cookies.get("refresh_token");
};

const clearAllTokens = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};

export {
  saveTokenToLocalStore,
  clearAllTokens,
  getAccessTokenFromLocalStore,
  getRefreshTokenFromLocalStore,
};
