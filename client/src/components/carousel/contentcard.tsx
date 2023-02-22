import './contentcard.scss';
import React from 'react';

export type CardProps = {
    description:string,
    picture:string,
    style:{[property: string]:string | undefined;},
    link:string,
    id?:number
};

type State = {};

export default class ContentCard extends React.Component<CardProps, State> {

    constructor(props:CardProps){
        super(props);
    }

    componentDidMount(){
    }

	render() {
		return (
            <a className="card" id={`${(this.props.id == null ? '' : this.props.id)}`} href={this.props.link? this.props.link: "#default"}>
                <div className="picture"  style={{...this.props.style ,backgroundImage: `url(${this.props.picture})`}}/>
                <div className="description">
                    {this.props.description}
                </div>
            </a>
		);
	}
}
