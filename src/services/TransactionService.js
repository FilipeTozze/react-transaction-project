import axios from 'axios';

import { API } from "./Api";
const CancelToken = axios.CancelToken;

export const getTransactions = async () => {
  try {
    const source = CancelToken.source();
    let response = null;

    setTimeout(() => {
      if (response == null) {
        source.cancel();
      }
    }, 15000);

    response = await API.get(`transactions`,{cancelToken: source.token}).then(listTransaction => {
        console.log(listTransaction);
        return listTransaction.data;
    })
    .catch(error => {
        console.log("error ", error);
    })
    return response;
  } catch (error) {

  }
};
