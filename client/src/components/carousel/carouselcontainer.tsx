import './carouselcontainer.scss';
import $ from 'jquery';
import React, { EventHandler } from 'react';
import ArrowR from '../../assets/Icons/arrowR_transp.png';
import ArrowL from '../../assets/Icons/arrowL_transp.png';
import { ProjectPage } from './projectspage';
import { ExperiencePage } from './exppage';
import { HobbyPage } from './hobbypage';
import { General } from '../../utils/general';
import PageIndication from './pageindication';
import Resizeable, { ResizableProps, ResizableState } from '../util/resizeable';

type Props = { floatOffsetBottom: number } & ResizableProps;
type State = {
	rotation: number;
	front: number;
	root: JQuery<HTMLElement>;
	self: Carousel;
	landscape: boolean;
} & ResizableState;

export class Carousel extends Resizeable<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			...this.state,
			rotation: 0,
			front: 0,
			root: $('html, body'),
			self: this,
			landscape: false,
		};

		$(window).on('load', () => {
			$('top').on('swiperight', { d: 'n', state: this.state }, this.rotate);
			$('.next').on('click', { d: 'n', n: 1, state: this.state }, this.rotate);
			$('.prev').on('click', { d: 'p', n: 1, state: this.state }, this.rotate);
			$(window).on('scroll', {}, this.hideBaseFloat);
		});
	}

	hideBaseFloat = (e: any) => {
		let container = $('.container_')[0];
		let basefloat = $('.base-float');
		let float = basefloat[0];

		let containerbottom = container.getBoundingClientRect().bottom;
		let floatbottom = float.getBoundingClientRect().bottom;
		if (floatbottom > containerbottom) {
			basefloat.css({ visibility: 'hidden' });
		} else {
			basefloat.css({ visibility: 'inherit' });
		}
	};

	rotate(e: any) {
		let state = e.data.state;
		let direction = e.data.d;
		let number = e.data.n;
		if (direction === 'n') {
			state.front = General.mod(state.front + number, 3);
			state.rotation = state.rotation - 120;
		}
		if (direction === 'p') {
			state.front = General.mod(state.front - number, 3);
			state.rotation = state.rotation + 120;
		}
		$('.carousel_').css({
			'-webkit-transform': 'rotateY(' + state.rotation + 'deg)',
			'-moz-transform': 'rotateY(' + state.rotation + 'deg)',
			'-o-transform': 'rotateY(' + state.rotation + 'deg)',
			transform: 'rotateY(' + state.rotation + 'deg)',
		});
		let i = 0;
		for (; i < 3; i++) {
			let element = $('#' + i + '.element');
			if (i === state.front) {
				element.css({ 'z-index': 1 });
			} else {
				element.css({ 'z-index': -1 });
			}
		}

		$(state.root).animate({ scrollTop: $('.carousel_')!.offset()!.top }, 300);
		PageIndication.updatePageIndication(state.front);
		e.stopPropagation();
	}

	render() {
		return (
			<div className="top">
				<div className="container_" style={{ width: this.state.width }}>
					<div style={{ position: 'relative', width: '100%', height: '100%' }}>
						<div className="carousel_">
							<div className="element" id="0" style={{ width: this.state.width }}>
								<ProjectPage wPercent={[100, 88.5]} hPercent={[100, 100]} />
							</div>
							<div className="element" id="1" style={{ width: this.state.width }}>
								<ExperiencePage wPercent={[100, 88.5]} hPercent={[100, 100]} />
							</div>
							<div className="element" id="2" style={{ width: this.state.width }}>
								<HobbyPage wPercent={[100, 88.5]} hPercent={[100, 100]} />
							</div>
						</div>
					</div>
				</div>
				<div className="base-float">
					<div className="float-wrap">
						<div className="prev">
							<img src={ArrowL} alt="Left\nArrow" />
						</div>
						<PageIndication />
						<div className="next">
							<img src={ArrowR} alt="Right\nArrow" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
