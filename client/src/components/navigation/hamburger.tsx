import './hamburger.scss';
import React from 'react';
import $ from 'jquery';

type Props = {
	opened: Boolean
};

type State = {visible:boolean};

export default class Hamburger extends React.Component<Props, State> {
	constructor(props:Props){
		super(props);
		this.state={visible:false};
	}

	componentDidMount(): void {
		$(".hamburger").on("focusout",(e)=>{
			console.log('a');
			this.setState((state)=>{
				return {...state, visible:false}
			});
		});
	}
	
	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
		if(prevProps.opened === false && this.props.opened === true){
			this.setState((state)=>{
				return {...state, visible:true}
			},()=>{
				console.log('b');
				$(".hamburger").get()[0].focus();
			})
		}
	}

	render() {
		return (
            <div tabIndex={-1} className="hamburger" 
				style={{visibility:(this.state.visible?"visible":"hidden")}}>
				<div className="hamText ham" onClick={()=> {$('html, body').animate({scrollTop:0},250)}}>
					About
				</div>
				<div id="d" className="hamText ham">
					Projects
				</div>
				<div id="e" className="hamText ham">
					Experience
				</div>
				<div id="f" className="hamText ham">
					Hobbies
				</div>
            </div>
		);
	}
}
