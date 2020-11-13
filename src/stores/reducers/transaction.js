import { CHANGE_LOAD, GET_TRANSACTIONS, NEW_TRANSACTION } from "../types";

const initialState = {
  listTransactions: [],
  loading: false,
};

export default function transactions(state = initialState, actions) {
  const { payload } = actions;
  switch (actions.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        listTransactions: payload,
      };
    case NEW_TRANSACTION:
      return {
        ...state,
        listTransactions: [...state.listTransactions, payload],
      };
    case CHANGE_LOAD:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
}
