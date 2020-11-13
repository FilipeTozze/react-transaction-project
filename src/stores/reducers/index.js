import { combineReducers } from 'redux';
import transactions from './transaction';

const rootReducer = combineReducers({
    transactions: transactions,
});

export default rootReducer;