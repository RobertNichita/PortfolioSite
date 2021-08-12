import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import $ from 'jquery';
import { useSelector } from 'react-redux';
import { getWindowSizeSelector } from '../../redux/Slices/WindowSize';
import store from '../../redux/Store/store';

export type ResizableProps = {
	hPercent: number[];
	wPercent: number[];
};

export type ResizableState = {
	width: string;
	height: string;
};

export default class Resizeable<innerProps, innerState> extends React.Component<any, any> {
	hPercent: number[];
	wPercent: number[];
	unsubscribe: Function;
	constructor(props: ResizableProps) {
		super(props);
		this.state = {
			width: '0px',
			height: '0px',
		};
		this.wPercent = props.wPercent;
		this.hPercent = props.hPercent;

		this.unsubscribe = store.subscribe(() => {
			let storeState = store.getState();
			let landscape = isLandscape(storeState.w, storeState.h);
			console.log(`storeState:${JSON.stringify(storeState)}`);
			this.setState({
				width: (storeState.w * (!landscape ? this.wPercent[0] : this.wPercent[1]) * 0.01).toString() + 'px',
				height: (storeState.h * (!landscape ? this.hPercent[0] : this.hPercent[1]) * 0.01).toString() + 'px',
			});
		});

		const isLandscape = (width: number, height: number): boolean => {
			return width > height;
		};
	}

	getStyle = () => {
		return { height: this.state.height, width: this.state.width };
	};
}
