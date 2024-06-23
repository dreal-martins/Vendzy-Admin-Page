import apiService from "./api";

const getAllMerchantService = () => {
  return apiService(
    "get",
    "/merchant/users",
    null,
    true,
    {},
    process.env.REACT_APP_MERCHANT_URL
  );
};

const getMerchantByIdService = (id) => {
  return apiService(
    "get",
    `/merchant/users/${id}`,
    null,
    true,
    {},
    process.env.REACT_APP_MERCHANT_URL
  );
};

const getMerchantDocsService = (id) => {
  return apiService(
    "get",
    `/merchant/owner/docs/${id}`,
    null,
    true,
    {},
    process.env.REACT_APP_MERCHANT_URL
  );
};

export {
  getAllMerchantService,
  getMerchantDocsService,
  getMerchantByIdService,
};
