import { configureStore } from '@reduxjs/toolkit';
import { WindowSizeReducer } from '../Slices/WindowSize';

const store = configureStore({
	reducer: WindowSizeReducer,
});

export default store;
