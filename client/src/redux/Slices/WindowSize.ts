import { createSelector, createSlice } from '@reduxjs/toolkit';

const WindowSize = createSlice({
	name: 'WindowSize',
	initialState: {
		w: 0,
		h: 0,
	},
	reducers: {
		updateSize: (state, action) => {
			state.w = action.payload.w;
			state.h = action.payload.h;
		},
	},
});

export const getWindowSizeSelector = (w: number, h: number) => {
	return (state: any) => {
		return { width: state.w * w * 0.1 + 'px', height: state.h * h * 0.1 + 'px' };
	};
};

export const WindowSizeReducer = WindowSize.reducer;
export const WindowSizeActions = WindowSize.actions;
