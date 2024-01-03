// import { applyMiddleware, createStore } from 'redux';
// import reducers from './reducers';
// import { thunk } from 'redux-thunk';


// export const store = createStore(reducers, {}, applyMiddleware(thunk))

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const store = configureStore({
    reducer: rootReducer,
    // Other configuration options if needed
});

// export default store;

