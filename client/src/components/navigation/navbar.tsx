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
import Hamburger from './hamburger'
import $ from 'jquery'

type Props = ResizableProps;

type innerState = {
	isToggled: boolean;
	hamburgerToggle: boolean;
};

type State = ResizableState & innerState;

export default class Navigation extends Resizable<Props, State> {
	constructor(props: Props) {
		super(props);
		this.setState({ ...this.state, isToggled: false, hamburgerToggle: false });
	}


	toggleHamburger = () => {
		this.setState((state:State) => {return {...state, hamburgerToggle:!state.hamburgerToggle}})
	}


	render() {
		return (
			<div className="nav-contain clamp" style={this.getStyle()}>
				<a href="#home" className="navbarHamburger nav" onClick={this.toggleHamburger}>
					<div></div>
					<div></div>
					<div></div>	
				</a>
				<Hamburger visible={this.state.hamburgerToggle}></Hamburger>
				<button className="navbarTextButton nav" id="Z" onClick={()=> {$('html, body').animate({scrollTop:0},250)}}>
					<div>About</div>
				</button>
				<button className="navbarTextButton nav" id="a">
					<div>Projects</div>
				</button>
				<button className="navbarTextButton nav" id="b">
					<div>Experience</div>
				</button>
				<button className="navbarTextButton nav" id="c">
					<div>Hobbies</div>
				</button>
				
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
