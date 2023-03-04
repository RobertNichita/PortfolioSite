import './carouselcontainer.scss';
import $ from 'jquery';
import carouselItems from '../../carouselItems.json';
import { SwipeDirection } from '../../const/Const';
import React, { EventHandler, useCallback } from 'react';
import { General } from '../../utils/general';
import PageIndication from './pageindication';
import Resizeable, { ResizableProps, ResizableState } from '../util/resizeable';
import CarouselPage from './carouselpage'
import CardGrid from './cardgrid'
import debounce from 'lodash.debounce';
import ReactDOM from 'react-dom';
import { SwipeListener } from '../swipeListener';

type Props = { floatOffsetBottom: number, pages: number } & ResizableProps;
type State = {
	rotation: number;
	front: number;
	root: JQuery<HTMLElement>;
	self: Carousel;
	landscape: boolean;
} & ResizableState;

export class Carousel extends Resizeable<Props, State> {
	listener:SwipeListener;
	
	private resizeContainer = () => {
		let container = $(".container_");
		let BG = $('#' + this.state.front + '.element .BG .content .cardgrid');
		let bheight = BG.height();
		container.css({'height':`${bheight! + 150}px`});
	}

	private debouncedResizeContainer = debounce(this.resizeContainer,50,{trailing:true});
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

		this.listener = new SwipeListener(50,100,this.swipe);
	}

	componentDidMount(): void {
			this.listener.listen($(".container_").get()[0]);
			$('.next').on('click', { d: 'n', n: 1 }, this.rotate);
			$('.prev').on('click', { d: 'p', n: 1 }, this.rotate);
			$('#a.navbarTextButton').on('click', {n: 0}, this.rotateTo);
			$('#b.navbarTextButton').on('click', {n: 1}, this.rotateTo);
			$('#c.navbarTextButton').on('click', {n: 2}, this.rotateTo);
			$('#d').on('click', {n: 0}, this.rotateTo);
			$('#e').on('click', {n: 1}, this.rotateTo);
			$('#f').on('click', {n: 2}, this.rotateTo);
			$(window).on('resize',this.debouncedResizeContainer);
	}

	swipe = (direction:SwipeDirection|undefined) => {
		console.log('swipe');
		if (!direction || direction === SwipeDirection.DOWN || direction === SwipeDirection.UP){
			return;
		}
		let e = {data:{}};
		e.data = {
			d : (direction === SwipeDirection.LEFT ? 'n' : 'p'),
			n : 1,
		}
		this.rotate(e);
	}

	rotateTo = (e:any) => {
		let number = e.data.n;

		ReactDOM.flushSync(() => {
				this.setState((state:State) => { 
					let diff = state.front - number;
					return {...state,
						front: General.mod(state.front - diff, this.props.pages),
						rotation: state.rotation + diff * (360/this.props.pages)
					}
				},
				() => this.applyRotation(e)
			)
		})
	}

	rotate = (e: any) => {
		let direction = e.data.d;
		let number = e.data.n;
		ReactDOM.flushSync(() => {
			this.setState((state:State) => ({...state, 
					front: General.mod(state.front + (direction === 'n' ? 1 : -1) * number, this.props.pages), 
					rotation: state.rotation + (direction === 'n' ? -1 : 1) * (360/this.props.pages)
				}),
				() => this.applyRotation(e)
			)
		})
	}

	applyRotation = (e:any) => {
					$('.carousel_').css({
						'-webkit-transform': 'rotateY(' + this.state.rotation + 'deg)',
						'-moz-transform': 'rotateY(' + this.state.rotation + 'deg)',
						'-o-transform': 'rotateY(' + this.state.rotation + 'deg)',
						transform: 'rotateY(' + this.state.rotation + 'deg)',
					});
					let i = 0;
					for (; i < 3; i++) {
						let element = $('#' + i + '.element');
						if (i === this.state.front) {
							element.css({ 'z-index': 1 });
						} else {
							element.css({ 'z-index': -1 });
						}
					}
					
					this.resizeContainer();

					$(this.state.root).animate({ scrollTop: $('.carousel_')!.offset()!.top }, 250);
					PageIndication.updatePageIndication(this.state.front);
					if(e.stopPropagation){
						e.stopPropagation();
					}
	}

	render() {
		return (
				<div className="top">
					<div className="container_" style={{ width: this.state.width }}>
						<div style={{ position: 'relative', width: '100%', height: '100%' }}>
							<div className="carousel_">
								{carouselItems.Pages.map((Page,index) => {
									return(
										<div className="element" key={`${index}`} id={`${index}`} style={{ width: this.state.width}}>
											<CarouselPage 	wPercent={[Page.Dimensions.Portrait.Width, Page.Dimensions.Landscape.Width]} 
															hPercent={[Page.Dimensions.Portrait.Height, Page.Dimensions.Landscape.Height]}>
												{Page.Title}
												<CardGrid cards={Page.Cards}/>
											</CarouselPage>
										</div>
									)
								})}
							</div>
						</div>
					</div>
					<div className="base-float">
						<div className="float-wrap">
							<div className="prev">
								<img src="assets/Icons/arrowL_transp.png" alt="Left\nArrow" />
							</div>
							<PageIndication />
							<div className="next">
								<img src="assets/Icons/arrowR_transp.png" alt="Right\nArrow" />
							</div>
						</div>
					</div>
				</div>
		);
	}
}