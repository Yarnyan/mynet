import { configureStore, combineReducers,  } from '@reduxjs/toolkit';
import toolkitSlice from './reducer/toolkitSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../services/postAPI.js';

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    [postApi.reducerPath]: postApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch);

export default store;