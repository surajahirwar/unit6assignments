import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { dataReducer } from "./Fetchdata/reducer";
import  thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: dataReducer,
})

export const store  = legacy_createStore(rootReducer, applyMiddleware(thunk));