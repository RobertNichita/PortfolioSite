import './hobbypage.scss';
import $ from 'jquery';
import React from 'react';
import Resizeable, {ResizableProps, ResizableState} from '../util/resizeable';


type Props = ResizableProps

type State = ResizableState

export class HobbyPage extends Resizeable<Props,State> {
	constructor(props:Props) {
		super(props);
	}

	render() {
		return <img className="HOBBYBG" alt="HOBBYBG"></img>;
	}
}
