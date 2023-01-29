import './hamburger.scss';
import React from 'react';

type Props = {
	visible: Boolean
};

type State = {};

export default class Hamburger extends React.Component<Props, State> {

	render() {
		return (
            <div className="hamburger" style={{visibility:(this.props.visible?"visible":"hidden")}}>
				<a href="#aboutme" className="hamText ham">
					<div>About</div>
				</a>
				<a href="#projects" className="hamText ham">
					<div>Projects</div>
				</a>
				<a href="#experience" className="hamText ham">
					<div>Experience</div>
				</a>
				<a href="#hobbies" className="hamText ham">
					<div>Hobbies</div>
				</a>
            </div>
		);
	}
}
