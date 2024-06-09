import apiService from "./api";

const getAllUserService = () => {
  return apiService("get", "/user/all", null, true);
};

export { getAllUserService };
