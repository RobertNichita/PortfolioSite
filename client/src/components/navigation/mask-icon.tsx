import './mask-icon.scss';
import React from 'react';

type Props = {
    iconName: string
};

type State = {};

export default class NavIcon extends React.Component<Props, State> {
    links: {[index:string]:string}  = {
        "github":"https://github.com/RobertNichita",
        "linkedin":"https://www.linkedin.com/in/robert-nichita-846075115/",
        "brand":"#aboutme",
    }
    mask: string = `url(/assets/Icons/Social/${this.props.iconName}_transparent.svg)`

	render() {
		return (
            <a href={this.links[`${this.props.iconName}`]} target={this.props.iconName === "brand"? "" : `_blank`} className="navIcon" rel="noreferrer" style={{WebkitMaskImage: this.mask , maskImage:this.mask}}>
            </a>
		);
	}
}
