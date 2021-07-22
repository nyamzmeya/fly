import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
const { default: flyReducer } = require("./fly-reducer");


let reducers = combineReducers({
    flyPage: flyReducer,
    authPage: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store;