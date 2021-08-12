import './pageindication.scss';
import React from 'react';
import $ from 'jquery';

type Props = {
};

type State = {

}

export default class PageIndication extends React.Component<Props,State> {
	constructor(props: Props) {
		super(props);
	}

	static updatePageIndication(front: number) {
		let i = 0;
		for (; i < 3; i++) {
			if (i === front) {
				$('#ind' + i).addClass('highlight');
			} else {
				$('#ind' + i).removeClass('highlight');
			}
		}
	}

	render() {
		return (
			<div className="contain">
				<div className="indicator highlight" id="ind0" />
				<div className="indicator" id="ind1" />
				<div className="indicator" id="ind2" />
			</div>
		);
	}
}
