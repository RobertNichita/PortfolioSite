import './carouselpage.scss';
import React from 'react';
import Resizeable, { ResizableProps, ResizableState } from '../util/resizeable';

type Props = ResizableProps

type State = ResizableState

export default class CarouselPage extends Resizeable<Props,State> {

    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div className="BG" style={{...this.getStyle(), margin:0}}>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="base" style={{backgroundImage:"url(\"/assets/Images/NicePng_torn-paper-texture-png_cropped.png\")"}}/>
            </div>
            );
    }
}