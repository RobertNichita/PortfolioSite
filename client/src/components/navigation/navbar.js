import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
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
            <Navbar class="nav-contain side" bg="light">
                <Nav.Link><FontAwesomeIcon icon=""/>About Me</Nav.Link>
                <Nav.Link><FontAwesomeIcon icon=""/>Projects</Nav.Link>
                <Nav.Link><FontAwesomeIcon icon=""/>Experience</Nav.Link>
                <Nav.Link><FontAwesomeIcon icon=""/>Hobbies</Nav.Link>
                <Toggle icons={{checked: <FontAwesomeIcon icon={faMoon} color="#289db8"/>, unchecked : <FontAwesomeIcon icon={faSun} color="#dee856"/>}}/>
            </Navbar>
        )
    }
}
class iconWrapper {
    
}