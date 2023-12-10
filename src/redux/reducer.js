// import { combineReducers } from "redux";
import { configureStore} from "@reduxjs/toolkit";

// import { filterReducer } from "./filter/reducer";
import { userReducer} from "./user/reducer";


// export const reducer = combineReducers({
//     user: userReducer,
//     filter: filterReducer
// })


export const reducer = configureStore({
    reducer: {
    user: userReducer,
    // filter: filterReducer
},});