import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'filterStr') {
    return { ...state, filter: action.payload };
  }

  if (action.type === 'addUser') {
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  return state;
};

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(reducer, enhancer);

export const store = createStore(reducer, initialState);

store.dispatch({ type: 'filterStr', payload: 'string' });

console.log(store.getState());

store.dispatch({ type: 'addUser', payload: 'Vasya' });

console.log(store.getState());

//store.getState();

//export const store = createStore(rootReducer);
