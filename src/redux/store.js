import {reducer} from './reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';


// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(reducer, enhancer);

export const store = configureStore({reducer});

// store.dispatch({ type: 'filterStr', payload: 'string' });

// console.log(store.getState());

// store.dispatch({ type: 'addUser', payload: 'Vasya' });

// console.log(store.getState());

//store.getState();

//export const store = createStore(rootReducer);
