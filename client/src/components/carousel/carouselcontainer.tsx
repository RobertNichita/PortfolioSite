import './carouselcontainer.scss';
import $ from 'jquery';
import { SwipeDirection } from '../../const/HammerConst';
import React, { EventHandler, useCallback } from 'react';
import { General } from '../../utils/general';
import PageIndication from './pageindication';
import Resizeable, { ResizableProps, ResizableState } from '../util/resizeable';
import CarouselPage from './carouselpage'
import CardGrid from './cardgrid'
import debounce from 'lodash.debounce';
import ReactDOM from 'react-dom';
import Hammer from 'react-hammerjs';

type Props = { floatOffsetBottom: number, pages: number } & ResizableProps;
type State = {
	rotation: number;
	front: number;
	root: JQuery<HTMLElement>;
	self: Carousel;
	landscape: boolean;
} & ResizableState;

export class Carousel extends Resizeable<Props, State> {
	
	private resizeContainer = () => {
		let container = $(".container_");
		console.log('a' + this.state.front)
		let BG = $('#' + this.state.front + '.element .BG .content .cardgrid');
		let bheight = BG.height();
		console.log(`bheight: ${bheight}`)
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

		$(window).on('load', () => {
			$('.next').on('click', { d: 'n', n: 1 }, this.rotate);
			$('.prev').on('click', { d: 'p', n: 1 }, this.rotate);
			$();
			
			$(window).on('resize',this.debouncedResizeContainer);
		});
	}

	swipe = (e:any) => {
		e.data = {
			d : (e.direction == SwipeDirection.LEFT ? 'n' : 'p'),
			n : 1,
		}
		e.stopPropagation = () => {};
		this.rotate(e);
	}

	rotateTo = (e:any) => {
		let number = e.data.n;
		ReactDOM.flushSync(() => {
				this.setState((state:State) => { 
					return {...state, 
						front: number,
						rotation: number * (360/this.props.pages)
					}
				},
				() => {
					$('.carousel_').css({
						'-webkit-transform': 'rotateY(' + this.state.rotation + 'deg)',
						'-moz-transform': 'rotateY(' + this.state.rotation + 'deg)',
						'-o-transform': 'rotateY(' + this.state.rotation + 'deg)',
						transform: 'rotateY(' + this.state.rotation + 'deg)',
					});
					let i = 0;
					for (; i < 3; i++) {
						let element = $('#' + i + '.element');
						// let BG = $('#' + i + '.element .BG .content .cardgrid');
						// let container = $('.container_')
						if (i === this.state.front) {
							element.css({ 'z-index': 1 });
							// let bheight = BG.height();
							// container.css({'height':`${bheight! + 300}px`});
						} else {
							element.css({ 'z-index': -1 });
						}
					}
					
					this.resizeContainer();

					$(this.state.root).animate({ scrollTop: $('.carousel_')!.offset()!.top }, 250);
					PageIndication.updatePageIndication(this.state.front);
					e.stopPropagation();
				}
			)
		})
	}

	rotate = (e: any) => {
		let direction = e.data.d;
		let number = e.data.n;
		ReactDOM.flushSync(() => {
			this.setState((state:State) => ({...state, 
					front: General.mod(state.front + (direction === 'n' ? 1 : -1) * number, 3), 
					rotation: state.rotation + (direction === 'n' ? -1 : 1) * (360/3)
				}),
				() => {
					$('.carousel_').css({
						'-webkit-transform': 'rotateY(' + this.state.rotation + 'deg)',
						'-moz-transform': 'rotateY(' + this.state.rotation + 'deg)',
						'-o-transform': 'rotateY(' + this.state.rotation + 'deg)',
						transform: 'rotateY(' + this.state.rotation + 'deg)',
					});
					let i = 0;
					for (; i < 3; i++) {
						let element = $('#' + i + '.element');
						// let BG = $('#' + i + '.element .BG .content .cardgrid');
						// let container = $('.container_')
						if (i === this.state.front) {
							element.css({ 'z-index': 1 });
							// let bheight = BG.height();
							// container.css({'height':`${bheight! + 300}px`});
						} else {
							element.css({ 'z-index': -1 });
						}
					}
					
					this.resizeContainer();

					$(this.state.root).animate({ scrollTop: $('.carousel_')!.offset()!.top }, 250);
					PageIndication.updatePageIndication(this.state.front);
					e.stopPropagation();
				}
			)
		})
	}

	render() {
		return (
			<Hammer onSwipe={this.swipe}>
				<div className="top">
					<div className="container_" style={{ width: this.state.width }}>
						<div style={{ position: 'relative', width: '100%', height: '100%' }}>
							<div className="carousel_">
								<div className="element" id="0" style={{ width: this.state.width}}>
									<CarouselPage wPercent={[100, 88.5]} hPercent={[200, 100]}>
										Projects
										<CardGrid cards={[
											{description:"Gource Wizard",
											picture:"assets/Images/GourceWizard/GWiz_Logo.png",
											style:{"backgroundColor":"#ffffff"},
											link:"#/portfolioMd/GourceWizard"
											},
											{description:"Petsprout",
											picture:"assets/Images/Petsprout/Petsprout_Logo_Transparent.png",
											style:{"backgroundColor":"#353535"},
											link:"#/portfolioMd/Petsprout"
											},
											{description:"Find Dining",
											picture:"assets/Images/ScarboroughDining/Logo.png",
											style:{"backgroundColor":"#9B321E"},
											link:"#/portfolioMd/ScarboroughDining"
											},
											{description:"INgest",
											picture:"assets/Images/Ingest/Logo.png",
											style:{"backgroundColor":"#4C3ECC"},
											link:"#/portfolioMd/Ingest"
											},
											{description:"Robotics",
											picture:"assets/Images/Robotics/Logo.png",
											style:{"backgroundSize":"cover"},
											link:"#/portfolioMd/Robotics"
											}
										]}/>
									</CarouselPage>
								</div>
								<div className="element" id="1" style={{ width: this.state.width }}>
									<CarouselPage wPercent={[100, 88.5]} hPercent={[160, 50]}>
										Experience
										<CardGrid cards={[
											{description:"Caseware",
											picture:"assets/Images/Caseware/Logo.png",
											style:{"backgroundColor":"#ffffff"},
											link:"#/portfolioMd/Caseware"
											},{description:"Altairix",
											picture:"assets/Images/Altairix/Logo.png",
											style:{"backgroundColor":"#ffffff"},
											link:"#/portfolioMd/Altairix"
											}
										]}/>
									</CarouselPage>
								</div>
								<div className="element" id="2" style={{ width: this.state.width }}>
									<CarouselPage wPercent={[100, 88.5]} hPercent={[160, 100]}>
										Hobbies
										<CardGrid cards={[
											{description:"Music",
											picture:"assets/Images/Music/Logo.png",
											style:{"backgroundSize":"cover"},
											link:"#/portfolioMd/Music"
											},
											{description:"Cooking",
											picture:"assets/Images/Cooking/mushrooms_cooking.jpg",
											style:{"backgroundSize":"cover"},
											link:"#/portfolioMd/Cooking"
											},
											{description:"Gaming",
											picture:"",
											style:{},
											link:"#/portfolioMd/Gaming"
											}
										]}/>
									</CarouselPage>
								</div>
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
			</Hammer>
		);
	}
}
