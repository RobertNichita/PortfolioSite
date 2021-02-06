import React, {useState} from 'react';
import Toggle from 'react-toggle'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss';

export default class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    

    

    render(){
        return (
            <div className="nav-contain clamp">
                <a href="#home">Robert Nichita</a>
                <a href="#aboutme">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Hobbies</a>
                <Toggle icons={{checked: <FontAwesomeIcon icon={faMoon} color="#289db8"/>, unchecked : <FontAwesomeIcon icon={faSun} color="#dee856"/>}}/>
            </div>
        )
    }
}
class iconWrapper {
    
}