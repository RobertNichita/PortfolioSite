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
        let theme = localStorage.getItem('theme');
        this.state = {checked: theme === 'light'};
	}

    componentDidMount(): void {
        this.setTheme();
    }

    getRoot = (): JQuery<HTMLElement> => {
		return $(':root');
	};

    setTheme = () => {
        let root = this.getRoot()[0];
        let thumb = $(".toggle-thumb")

        if(this.state.checked){
            thumb.addClass('checked');
        }else if(thumb.hasClass('checked')){
            thumb.removeClass('checked');
        }
        
        root.dataset.theme = this.state.checked ? 'light' :'';
        
        localStorage.setItem('theme', root.dataset.theme);
    }

    onClick = (e:any) => {
        this.setState((state)=>({checked:!state.checked}),this.setTheme)
    }

	render() {
		return (
            <div className="toggle">
                <div className="toggle-track"  onClick={(e)=>this.onClick(e)}>
                    <div className={`toggle-thumb`}></div>
                    <div className='check icon'>{this.props.icons.checked}</div>
                    <div className='x icon'>{this.props.icons.unchecked}</div>
                </div>
            </div>
		);
	}
}
