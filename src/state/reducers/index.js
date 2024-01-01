import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    // name: reducer1,
    // name: reducer2,
    amount: amountReducer
})

export default reducers;