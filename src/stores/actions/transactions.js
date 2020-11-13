import { CHANGE_LOAD, GET_TRANSACTIONS, NEW_TRANSACTION } from "../types";

export function getTransactionsAction(transactions) {
  return {
    type: GET_TRANSACTIONS,
    payload: transactions,
  };
}

export function changeLoad() {
  return { type: CHANGE_LOAD, };
}

export function newTransactionAction(transaction) {
  return {
    type: NEW_TRANSACTION,
    payload: transaction,
  };
}
