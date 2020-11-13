import axios from "axios";

import { API } from "./Api";
const CancelToken = axios.CancelToken;

export const getTransactions = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response = null;

      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);

      response = await API.get(`transactions`, {
        cancelToken: source.token,
      }).then((listTransaction) => resolve(listTransaction.data));
    } catch (error) {
      reject(false);
    }
  });
};

export const saveTransactions = async (transaction) => {
  return new Promise(async (resolve, reject) => {
    try {
      const source = CancelToken.source();
      let response = null;

      setTimeout(() => {
        if (response == null) {
          source.cancel();
        }
      }, 15000);

      response = await API.post(`transactions`, transaction, {
        cancelToken: source.token,
      }).then((createTransaction) => resolve(createTransaction.data));
    } catch (error) {
      reject(false);
    }
  });
};
