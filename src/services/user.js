import apiService from "./api";

const getAllUserService = () => {
  return apiService("get", "/user/all", null, true);
};

const getUserDocsService = (userId) => {
  return apiService("get", `/owner/docs/user/${userId}`, null, true);
};

const getUserById = (userId) => {
  return apiService("get", `/user/${userId}`, null, true);
};

export { getAllUserService, getUserDocsService, getUserById };
