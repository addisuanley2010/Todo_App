import counterReducer from "./Counter";
import loggedReducer from "./isLoggedIn";
import { combineReducers } from "redux";

const allReducer=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,

})
export default allReducer