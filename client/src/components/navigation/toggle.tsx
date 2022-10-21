import './toggle.scss';
import Resizable, { ResizableProps, ResizableState } from '../util/resizeable';
import React from 'react';
import $ from 'jquery';

type Props = {
    icons:{checked:JSX.Element,
    unchecked:JSX.Element},
};

type State = {
    checked:Boolean
};

export default class Toggle extends React.Component<Props,State>{
    constructor(props: Props) {
		super(props);
        this.state = {checked:false}
	}

    getRoot = (): JQuery<HTMLElement> => {
		return $(':root');
	};

    onClick = (e:any) => {
        this.setState((state)=>{return {checked:!state.checked}})
		let root = this.getRoot()[0];
		root.dataset.theme = this.state.checked ? '':'light';
    }

	render() {
		return (
            <div className="toggle">
                <div className="toggle-track"  onClick={(e)=>this.onClick(e)}>
                    <div className={`toggle-thumb ${(this.state.checked) ? "checked": "" }`}></div>
                    <div className='check icon'>{this.props.icons.checked}</div>
                    <div className='x icon'>{this.props.icons.unchecked}</div>
                </div>
            </div>
		);
	}
}
