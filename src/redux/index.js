import {combineReducers} from "redux";
import {pageReducer,personReducer} from "./reducers";

const combinedReducers = combineReducers({
    pageReducer,
    personReducer
});

export default combinedReducers;