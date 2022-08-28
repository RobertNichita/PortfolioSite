import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import Toggle from 'react-toggle';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import { useSelector } from 'react-redux';
import { getWindowSizeSelector } from '../../redux/Slices/WindowSize';
import store from '../../redux/Store/store';
import Resizable, { ResizableProps, ResizableState } from '../util/resizeable';

type Props = ResizableProps;

type innerState = {
	isToggled: boolean;
};

type State = ResizableState & innerState;

export default class Navigation extends Resizable<Props, State> {
	constructor(props: Props) {
		super(props);
		this.setState({ ...this.state, isToggled: false });
	}

	getRoot = (): JQuery<HTMLElement> => {
		return $(':root');
	};

	handleToggle: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>): void => {
		let theme: string = e.target.checked ? 'light' : '';
		let root = this.getRoot()[0];
		root.dataset.theme = theme;
	};

	render() {
		console.log('rerendered navbar');
		return (
			<div className="nav-contain clamp" style={this.getStyle()}>
				<a href="#home" className="navbarIcon nav">
					RN
				</a>
				<a href="#aboutme" className="navbarText nav">
					About
				</a>
				<a href="#projects" className="navbarText nav">
					Projects
				</a>
				<a href="#experience" className="navbarText nav">
					Experience
				</a>
				<a href="#hobbies" className="navbarText nav">
					Hobbies
				</a>
				<Toggle
					onChange={this.handleToggle}
					icons={{
						checked: <FontAwesomeIcon icon={faMoon} color="#289db8" />,
						unchecked: <FontAwesomeIcon icon={faSun} color="#dee856" />,
					}}
				/>
			</div>
		);
	}
}
