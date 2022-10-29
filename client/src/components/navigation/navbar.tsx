import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import Toggle from './toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import { useSelector } from 'react-redux';
import { getWindowSizeSelector } from '../../redux/Slices/WindowSize';
import store from '../../redux/Store/store';
import Resizable, { ResizableProps, ResizableState } from '../util/resizeable';
import NavIcon from './mask-icon'

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





	render() {
		return (
			<div className="nav-contain clamp" style={this.getStyle()}>
				<a href="#home" className="navbarHamburger nav">
					<div></div>
					<div></div>
					<div></div>	
				</a>
				<a href="#aboutme" className="navbarText nav">
					<div>About</div>
				</a>
				<a href="#projects" className="navbarText nav">
					<div>Projects</div>
				</a>
				<a href="#experience" className="navbarText nav">
					<div>Experience</div>
				</a>
				<a href="#hobbies" className="navbarText nav">
					<div>Hobbies</div>
				</a>
				
				<div className='icons'>
					<NavIcon iconName="github" ></NavIcon>
					<NavIcon iconName="linkedin"></NavIcon>
					<NavIcon iconName="brand"></NavIcon>
				</div>

				<Toggle
					icons={{
						checked: <FontAwesomeIcon icon={faMoon} color="#ecffe6" style={{height:"300%", width:"300%"}}/>,
						unchecked: <FontAwesomeIcon icon={faSun} color="#b8c415" style={{height:"300%", width:"300%"}}/>,
					}}
				/>
			</div>
		);
	}
}
