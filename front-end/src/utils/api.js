import axios from "axios";
import getConfig from "../utils/getConfig";
import config from "../utils/config";

const { API_BASE_URL } = config;
const api = axios.create({
  baseURL: API_BASE_URL,
});

//inyect the token to the header of the request
api.interceptors.request.use((config) => {
  const headers = getConfig().headers;
  config.headers = { ...headers };
  return config;
});

const USER_INFO_ENDPOINT = "/users/get-user-info";
const TRANSACTIONS_ENDPOINT = "/transactions/get-all-transactions-by-user";
const TRANSACTION_BY_ID_ENDPOINT = "/transactions/get-transaction-by-id";
const VERIFY_ACCOUNT_ENDPOINT = "/transactions/verify-account";
const TRANSFER_FUNDS_ENDPOINT = "/transactions/transfer-funds";

export const getUserInfo = async () => {
  const { data } = await api.post(USER_INFO_ENDPOINT).then((res) => res.data);
  return data;
};

export const getBalance = async () => {
  const { balance } = await getUserInfo();
  return balance;
};

export const getUserName = async () => {
  const { firstName } = await getUserInfo();
  return firstName;
};

export const getTransactions = async (maxNumber) => {
  const { data } = await api.post(TRANSACTIONS_ENDPOINT).then((res) => res.data);
  return data.slice(0, maxNumber);
};

export const getTransactionsById = async (id) => {
  const { data } = await api
    .post(TRANSACTION_BY_ID_ENDPOINT, { transactionId: id })
    .then((res) => res.data);
  return data;
};

export const verifyAccountEmail = async (email) => {
  const responseData = await api
    .post(VERIFY_ACCOUNT_ENDPOINT, { receiverEmail: email })
    .then((res) => res.data);
  return responseData;
};

export const verifyAccountId = async (id) => {
  const responseData = await api
    .post(VERIFY_ACCOUNT_ENDPOINT, { receiverId: id })
    .then((res) => res.data);
  return responseData;
};

export const transferFunds = async (transferData) => {
  const responseData = await api
    .post(TRANSFER_FUNDS_ENDPOINT, transferData)
    .then((res) => res.data);
  return responseData;
};
