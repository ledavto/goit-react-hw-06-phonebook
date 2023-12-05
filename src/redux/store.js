import { createStore } from "redux";

const initialState = {
{
  contacts: [],
  filter: ""
}};

const rootReducer = (state = initialState, action) => {  
return state;
 };

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore (rootReducer, enhancer);

//export const store = createStore(rootReducer);