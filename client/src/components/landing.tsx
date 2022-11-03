import "./landing.scss"
import React from 'react'
import Resizeable, { ResizableProps, ResizableState } from "./util/resizeable"

type Props = ResizableProps;
type State = ResizableState;

export default class Landing extends Resizeable<Props, State> {

    render() {
        return (
            <div className="landing" style={this.getStyle()}>
                <div className="hi">
                    <p>Hi!</p>
                    <p>I'm Robert.</p>
                    <p>This is my Portfolio.</p>
                </div>
                <div className="am">
                    I'm a fullstack developer  with a 
                    focus on building out application 
                    backends, data transformations and 
                    service integrations
                </div>
                <div className="face" style={{background: "center bottom / contain no-repeat url(\"assets/Images/looking_down.png\") , radial-gradient(circle closest-side, var(--FG) 70%,transparent)"}}>

                </div>
                <div className="base_ one" style={{backgroundImage: "url(\"/assets/Images/NicePng_torn-paper-texture-png_cropped.png\")"}}/>
                <div className="base_ two" style={{backgroundImage: "url(\"/assets/Images/NicePng_torn-paper-texture-png_cropped.png\")"}}/>
            </div>
        )
    }
}